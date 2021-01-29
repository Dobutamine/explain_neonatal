
// declare a object holding the neonatal model
neo = null

// define an empty callback function which is called after the message ready from the model comes in
callback = () => {
    // set the datalogger interval
    neo.setDataloggerInterval(0.015);
    // set the models to watch
    neo.setDataloggerWatchedModels(['LA','LV','RA','RV','AA','VC'])
    // calculate 10 second of the model
    neo.calculateModel(10)
    // reset the callback
    resetCallback()
}

// instantiate the model engine and inject the 
NeoBuildAndGo('normal_neonate')


function NeoBuildAndGo(neonatal_config_file) {

    console.log(`%cSCRIPT: running neonatal script.`, "color:orange;")
    // load the normal_neonate model definition file into an instance of the model engine

    // prevent memory leak by terminating the worker and deleting the previous model object from memory
    if (neo !== null) {
        // terminate the worker thread otherwise it will linger in memory
        neo.engine.terminate()
        // delete the model instance from memory
        delete neo
    }
    
    // instantiate a new model engine instance and inject the model definition file
    neo = new Model(neonatal_config_file)

    // define a callback function which is called when the data calculations are ready
    neo.engine.addEventListener("message", (message) => {
        if (message.data.data[0] === 'ready') {
            callback()
        }
      });
}

function start(datalogger_interval = 0.015) {
    neo.setDataloggerInterval(datalogger_interval)
    neo.startModel()
}

function stop() {
    neo.stopModel()
}

function calc(duration = 10, datalogger_interval = 0.015) {
    neo.setDataloggerInterval(datalogger_interval)
    neo.calculateModel(duration)
}

function screenshot(chart = nonrt_chart1, filename = 'screenshot') {
    chart.saveToFile(filename)
}

function save(data = neo.data, filename = "datadump") {

    if (!data) {
        console.error('Console.save: No data');
        return;
    }

    if (!filename) {
        filename = 'console.json';
    }

    if (typeof data === 'object') {
        data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}

function showPressure(model) {
    neo.setDataloggerInterval(0.0005)
    neo.setDataloggerWatchedModels(model)
    callback = () => {
        plotTimeChart(1, neo, [model],['pres'],[1],["pressure in mmmhg"]);
        resetCallback()
    }
    neo.calculateModel(20)
}

function calcPres(model, chart = 1, duration = 30, logger_interval = 0.0005, min = null, max = null) {
    neo.setDataloggerInterval(logger_interval)
    neo.setDataloggerWatchedModels([model])
    callback = () => {
        let max_pres = -1000
        let min_pres = 1000
        neo.data.forEach(dataline => {
            if (dataline[model].pres != 'undefined')
            {
                if (dataline[model].pres > max_pres){
                    max_pres = dataline[model].pres
                }
                if (dataline[model].pres < min_pres){
                    min_pres = dataline[model].pres
                }
            }  
        })
        let mean = Math.round(((2 * min_pres) + max_pres) / 3)
        let systole = Math.round(max_pres)
        let diastole = Math.round(min_pres)
        let pres_mes = `pressures of ${model} : ${systole}/${diastole} (${mean}) mmHg`
        console.log(pres_mes)
        plotTimeChart(chart, neo, [model],['pres'],[1,1],[pres_mes], min, max);
        resetCallback()

    }
    neo.calculateModel(duration)
}

function calcFlow(model, chart = 1, duration = 30, logger_interval = 0.0005, min = null, max = null) {
    neo.setDataloggerInterval(logger_interval)
    neo.setDataloggerWatchedModels([model, "ecg"])
    callback = () => {
        let total_flow = 0
        let stroke_volume_cum = 0
        let stroke_volume = 0
        let temp_stroke_volume = 0
        let no_heartbeats = 0
        neo.data.forEach(dataline => {
            if (dataline.ecg.ncc_ventricular === 1){
               
                no_heartbeats += 1
                stroke_volume = temp_stroke_volume       
                temp_stroke_volume = 0
            }
            dataline[model]["sv"] = stroke_volume
            temp_stroke_volume += dataline[model].real_flow * 1000 * 0.0005
            stroke_volume_cum += dataline[model].real_flow * 1000 * 0.0005
            total_flow += dataline[model].real_flow
        })
        let avg_flow = ((total_flow / neo.data.length) * 60).toFixed(3);  
        let avg_sv  = (stroke_volume_cum / no_heartbeats ).toFixed(2)
        
        console.log(`${model} : avg stroke ${avg_sv} ml : avg flow ${avg_flow} l/min`)
        plotTimeChart(chart, neo, [model, model],['sv','real_flow'],[1, 1],[`${model} : avg stroke ${avg_sv} ml : avg flow ${avg_flow} l/min`], min, max);
        resetCallback()
    }
    neo.calculateModel(duration)
}

function getBloodGas(model = 'AA', chart = 1, duration = 0.1, logger_interval = 0.015) {
    neo.setDataloggerWatchedModels([model])
    neo.setDataloggerInterval(logger_interval)

    callback = () => {
        plotTimeChart(chart, neo, [model, model, model, model, model],['ph','po2','pco2','hco3p','be'],[1, 0.13, 0.13, 0.1, 1])
        resetCallback();
    }

    neo.calculateModel(30)
}



function resetCallback() {
    callback = () => {}
}




