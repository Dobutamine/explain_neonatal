// Extract required parts from LightningChartJS.
const { 
  SolidFill,
  AxisTickStrategies,
  lightningChart,
  Themes,
  EmptyFill,
  AxisScrollStrategies,
  ColorRGBA,
} = lcjs

//const chart = lightningChart().ChartXY({ containerId: 'target' }).setTitle('My first chart') // Set chart title

let chart2_data1 = [];

let rt_ch1_data = []
let rt_ch1_model = "LV"
let rt_ch1_prop = "pres"

let rt_ch2_data = []
let rt_ch2_model = "RV"
let rt_ch2_prop = "pres"

let rt_chart_interval = 200
let rt_factors = [1, 1]

// configure the realtime chart with id rt_chart
let rt_chart = lightningChart().ChartXY({
    container: 'rt_chart',
    theme: Themes.light,
    disableAnimations: false,
  });
rt_chart.setTitle("time-based realtime chart");
rt_chart.setPadding({top: 10, bottom: 0, left: 15, right: 30 });

let xAxis_rt_chart = rt_chart.getDefaultAxisX();
xAxis_rt_chart.setScrollStrategy(AxisScrollStrategies.fitting);
xAxis_rt_chart.setTickStrategy(AxisTickStrategies.Numeric);
xAxis_rt_chart.setTitleFillStyle(EmptyFill);
xAxis_rt_chart.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
xAxis_rt_chart.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let yAxis_rt_chart = rt_chart.getDefaultAxisY()
yAxis_rt_chart.setScrollStrategy(AxisScrollStrategies.fitting);
yAxis_rt_chart.setTitleFillStyle(EmptyFill);
yAxis_rt_chart.setTickStrategy(AxisTickStrategies.Numeric);
yAxis_rt_chart.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
yAxis_rt_chart.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let rt_chart_ch1_lineseries = rt_chart.addLineSeries();
rt_chart_ch1_lineseries.setStrokeStyle((style) => style.setThickness(2));
rt_chart_ch1_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(128, 0, 0) })));

let rt_chart_ch2_lineseries = rt_chart.addLineSeries();
rt_chart_ch2_lineseries.setStrokeStyle((style) => style.setThickness(2));
rt_chart_ch2_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(0, 0, 128) })));

// configure the first non realtime chart with id nonrt_chart1 
let nonrt_chart1 = lightningChart().ChartXY({
    container: 'nonrt_chart1',
    theme: Themes.light,
    disableAnimations: true,
});
nonrt_chart1.setTitle("time-based chart 1");
nonrt_chart1.setPadding({top: 10, bottom: 0, left: 15, right: 30 });

let xAxis_nonrt_chart1 = nonrt_chart1.getDefaultAxisX();
xAxis_nonrt_chart1.setScrollStrategy(AxisScrollStrategies.fitting);
xAxis_nonrt_chart1.setTickStrategy(AxisTickStrategies.Numeric);
xAxis_nonrt_chart1.setTitleFillStyle(EmptyFill);
xAxis_nonrt_chart1.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
xAxis_nonrt_chart1.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let yAxis_nonrt_chart1 = nonrt_chart1.getDefaultAxisY()
yAxis_nonrt_chart1.setScrollStrategy(AxisScrollStrategies.fitting);
yAxis_nonrt_chart1.setTitleFillStyle(EmptyFill);
yAxis_nonrt_chart1.setTickStrategy(AxisTickStrategies.Numeric);
yAxis_nonrt_chart1.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
yAxis_nonrt_chart1.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let nonrt_chart1_ch1_lineseries = nonrt_chart1.addLineSeries();
nonrt_chart1_ch1_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart1_ch1_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(128, 0, 0) })));

let nonrt_chart1_ch2_lineseries = nonrt_chart1.addLineSeries();
nonrt_chart1_ch2_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart1_ch2_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(0, 0, 128) })));

let nonrt_chart1_ch3_lineseries = nonrt_chart1.addLineSeries();
nonrt_chart1_ch3_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart1_ch3_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(0, 128, 0) })));

let nonrt_chart1_ch4_lineseries = nonrt_chart1.addLineSeries();
nonrt_chart1_ch4_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart1_ch4_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(128, 128, 0) })));

let nonrt_chart1_ch5_lineseries = nonrt_chart1.addLineSeries();
nonrt_chart1_ch5_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart1_ch5_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(0, 128,128) })));




// configure the second non realtime chart with id nonrt_chart2
let nonrt_chart2 = lightningChart().ChartXY({
  container: 'nonrt_chart2',
  theme: Themes.light,
  disableAnimations: true,
});
nonrt_chart2.setTitle("time-based chart 2");
nonrt_chart2.setPadding({top: 10, bottom: 0, left: 15, right: 30 });

let xAxis_nonrt_chart2 = nonrt_chart2.getDefaultAxisX();
xAxis_nonrt_chart2.setScrollStrategy(AxisScrollStrategies.fitting);
xAxis_nonrt_chart2.setTickStrategy(AxisTickStrategies.Numeric);
xAxis_nonrt_chart2.setTitleFillStyle(EmptyFill);
xAxis_nonrt_chart2.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
xAxis_nonrt_chart2.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let yAxis_nonrt_chart2 = nonrt_chart2.getDefaultAxisY()
yAxis_nonrt_chart2.setScrollStrategy(AxisScrollStrategies.fitting);
yAxis_nonrt_chart2.setTitleFillStyle(EmptyFill);
yAxis_nonrt_chart2.setTickStrategy(AxisTickStrategies.Numeric);
yAxis_nonrt_chart2.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
yAxis_nonrt_chart2.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let nonrt_chart2_ch1_lineseries = nonrt_chart2.addLineSeries();
nonrt_chart2_ch1_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart2_ch1_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(128, 0, 0) })));

let nonrt_chart2_ch2_lineseries = nonrt_chart2.addLineSeries();
nonrt_chart2_ch2_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart2_ch2_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(0, 0, 128) })));

let nonrt_chart2_ch3_lineseries = nonrt_chart2.addLineSeries();
nonrt_chart2_ch3_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart2_ch3_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(0, 128, 0) })));

let nonrt_chart2_ch4_lineseries = nonrt_chart2.addLineSeries();
nonrt_chart2_ch4_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart2_ch4_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(128, 128, 0) })));

let nonrt_chart2_ch5_lineseries = nonrt_chart2.addLineSeries();
nonrt_chart2_ch5_lineseries.setStrokeStyle((style) => style.setThickness(2));
nonrt_chart2_ch5_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(0, 128, 128) })));

// configure the first xy chart with id xy_chart1
let xy_chart1 = lightningChart().ChartXY({
  container: 'xy_chart1',
  theme: Themes.light,
  disableAnimations: true,
});
xy_chart1.setTitle("xy chart 1");
xy_chart1.setPadding({top: 10, bottom: 0, left: 15, right: 30 });

let xAxis_xy_chart1= xy_chart1.getDefaultAxisX();
xAxis_xy_chart1.setScrollStrategy(AxisScrollStrategies.fitting);
xAxis_xy_chart1.setTickStrategy(AxisTickStrategies.Numeric);
xAxis_xy_chart1.setTitleFillStyle(EmptyFill);
xAxis_xy_chart1.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
xAxis_xy_chart1.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let yAxis_xy_chart1 = xy_chart1.getDefaultAxisY()
yAxis_xy_chart1.setScrollStrategy(AxisScrollStrategies.fitting);
yAxis_xy_chart1.setTitleFillStyle(EmptyFill);
yAxis_xy_chart1.setTickStrategy(AxisTickStrategies.Numeric);
yAxis_xy_chart1.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
yAxis_xy_chart1.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let xy_chart1_ch1_lineseries = xy_chart1.addLineSeries();
xy_chart1_ch1_lineseries.setStrokeStyle((style) => style.setThickness(2));
xy_chart1_ch1_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(128, 0, 0) })));


// configure the second xy chart with id xy_chart2
let xy_chart2 = lightningChart().ChartXY({
  container: 'xy_chart2',
  theme: Themes.light,
  disableAnimations: true,
});
xy_chart2.setTitle("xy chart 2");
xy_chart2.setPadding({top: 10, bottom: 0, left: 15, right: 30 });

let xAxis_xy_chart2= xy_chart2.getDefaultAxisX();
xAxis_xy_chart2.setScrollStrategy(AxisScrollStrategies.fitting);
xAxis_xy_chart2.setTickStrategy(AxisTickStrategies.Numeric);
xAxis_xy_chart2.setTitleFillStyle(EmptyFill);
xAxis_xy_chart2.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
xAxis_xy_chart2.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let yAxis_xy_chart2 = xy_chart2.getDefaultAxisY()
yAxis_xy_chart2.setScrollStrategy(AxisScrollStrategies.fitting);
yAxis_xy_chart2.setTitleFillStyle(EmptyFill);
yAxis_xy_chart2.setTickStrategy(AxisTickStrategies.Numeric);
yAxis_xy_chart2.setTickStyle((a) => a.setMajorTickStyle((b) => b.setLabelFont((font) => font.setSize(12))));
yAxis_xy_chart2.setTickStyle((a) => a.setMinorTickStyle((b) => (b = undefined)));

let xy_chart2_ch1_lineseries = xy_chart2.addLineSeries();
xy_chart2_ch1_lineseries.setStrokeStyle((style) => style.setThickness(2));
xy_chart2_ch1_lineseries.setStrokeStyle((style) => style.setFillStyle(new SolidFill({ color: ColorRGBA(128, 0, 0) })));

console.log("PLOTTER: lightning chart API ready");


function plotXYChart(chart_no, model, model_x, prop_x, model_y, prop_y, factors = [ 1, 1], title= "") {

  let xy_chart_data = []

  model.data.forEach(dataline => { 
    xy_chart_data.push( {
      x: dataline[model_x][prop_x] * factors[0],
      y: dataline[model_y][prop_y] * factors[1]
    })
  });

  if (chart_no === 1) {
    xy_chart1_ch1_lineseries.clear()
    xy_chart1_ch1_lineseries.add(xy_chart_data)
    xy_chart1.setTitle(title);
  } else {
    xy_chart2_ch1_lineseries.clear()
    xy_chart2_ch1_lineseries.add(xy_chart_data)
    xy_chart2.setTitle(title);
  }

}

function plotTimeChart(chart_no, model, models, props, factors = [1, 1, 1, 1, 1], title = "", min= null, max = null) {
  
  if (min != null && max != null){
    yAxis_nonrt_chart1.setScrollStrategy(AxisScrollStrategies.Numeric);
    yAxis_nonrt_chart1.setInterval(min, max)
  } else {
    yAxis_nonrt_chart1.setScrollStrategy(AxisScrollStrategies.fitting);
  }

  let graph_models = []
  if (typeof models === 'string') {
    graph_models.push(models)
  } else {
    graph_models = models
  }

  let graph_props = []
  if (typeof props === 'string') {
    graph_props.push(props)
  } else {
    graph_props = props
  }

  let no_props1 = graph_props.length
  if (no_props1 < graph_models.length && no_props1 > 0) {
    for (let i = 0; i < (graph_models.length - no_props1); i++) {
      graph_props.push(graph_props[0])
    }
  }

  let no_models = 5 - graph_models.length
  for (let i = 0; i < no_models; i++) {
    graph_models.push("")
  }

  let no_props2 = 5 - graph_props.length
  for (let i = 0; i < no_props2; i++) {
    graph_props.push("")
  }

  let nonrt_chart1_data_ch1 = []
  let nonrt_chart1_data_ch2 = []
  let nonrt_chart1_data_ch3 = []
  let nonrt_chart1_data_ch4 = []
  let nonrt_chart1_data_ch5 = []


  model.data.forEach(dataline => {

    if (graph_models[0] != "") {
      nonrt_chart1_data_ch1.push( {
        x: dataline["time"],
        y: dataline[models[0]][props[0]] * factors[0]
      })
    }

    if (graph_models[1] != "") {
      nonrt_chart1_data_ch2.push( {
        x: dataline["time"],
        y: dataline[models[1]][props[1]] * factors[1]
      })
    }

    if (graph_models[2] != "") {
      nonrt_chart1_data_ch3.push( {
        x: dataline["time"],
        y: dataline[models[2]][props[2]] * factors[2]
      })
    }

    if (graph_models[3] != "") {
      nonrt_chart1_data_ch4.push( {
        x: dataline["time"],
        y: dataline[models[3]][props[3]] * factors[3]
      })
    }

    if (graph_models[4] != "") {
      nonrt_chart1_data_ch5.push( {
        x: dataline["time"],
        y: dataline[models[4]][props[4]] * factors[4]
      })
    }


    

  })

  if (chart_no === 1) {
    nonrt_chart1_ch1_lineseries.clear();
    nonrt_chart1_ch2_lineseries.clear();
    nonrt_chart1_ch3_lineseries.clear();
    nonrt_chart1_ch4_lineseries.clear();
    nonrt_chart1_ch5_lineseries.clear();

    nonrt_chart1_ch1_lineseries.add(nonrt_chart1_data_ch1)
    nonrt_chart1_ch2_lineseries.add(nonrt_chart1_data_ch2)
    nonrt_chart1_ch3_lineseries.add(nonrt_chart1_data_ch3)
    nonrt_chart1_ch4_lineseries.add(nonrt_chart1_data_ch4)
    nonrt_chart1_ch5_lineseries.add(nonrt_chart1_data_ch5)
    nonrt_chart1.setTitle(title);
  } else {
    nonrt_chart2_ch1_lineseries.clear();
    nonrt_chart2_ch2_lineseries.clear();
    nonrt_chart2_ch3_lineseries.clear();
    nonrt_chart2_ch4_lineseries.clear();
    nonrt_chart2_ch5_lineseries.clear();

    nonrt_chart2_ch1_lineseries.add(nonrt_chart1_data_ch1)
    nonrt_chart2_ch2_lineseries.add(nonrt_chart1_data_ch2)
    nonrt_chart2_ch3_lineseries.add(nonrt_chart1_data_ch3)
    nonrt_chart2_ch4_lineseries.add(nonrt_chart1_data_ch4)
    nonrt_chart2_ch5_lineseries.add(nonrt_chart1_data_ch5)
    nonrt_chart2.setTitle(title);
  }
  
}

function drawRTGraph (data) {
    rt_chart_ch1_lineseries.clear();
    rt_chart_ch2_lineseries.clear();

    data.forEach(dataline => {

      if (rt_ch1_model != "") {
        rt_ch1_data.push( {
          x: dataline["time"],
          y: dataline[rt_ch1_model][rt_ch1_prop] * rt_factors[0]
        })
      }

      if (rt_ch2_model != "") {
        rt_ch2_data.push( {
          x: dataline["time"],
          y: dataline[rt_ch2_model][rt_ch2_prop] * rt_factors[1]
        })
      }
      
    })

    if (rt_ch1_model != "") {
      if (rt_ch1_data.length > rt_chart_interval) {
        rt_ch1_data.splice(0, rt_ch1_data.length - rt_chart_interval - 1)
      }
      rt_chart_ch1_lineseries.add(rt_ch1_data)

    }

    if (rt_ch2_model != "")  {
      if (rt_ch2_data.length > rt_chart_interval) {
        rt_ch2_data.splice(0, rt_ch2_data.length - rt_chart_interval - 1)
      }
      rt_chart_ch2_lineseries.add(rt_ch2_data)
    }
    
}

function setRealtimeChartSamples(no_samples) {
  rt_chart_interval = no_samples
}

function setRealtimeChart(model1, prop1, model2 = "", prop2 = "",factors = [1, 1], title="") {
  rt_ch1_data = []
  rt_ch1_model = model1
  rt_ch1_prop = prop1
  
  rt_ch2_data = []
  rt_ch2_model = model2
  rt_ch2_prop = prop2

  rt_factors = factors
  
  rt_chart.setTitle(title);
}

function clearCharts() {

  nonrt_chart1_ch1_lineseries.clear();
  nonrt_chart1_ch2_lineseries.clear();
  nonrt_chart1_ch3_lineseries.clear();
  nonrt_chart1_ch4_lineseries.clear();
  nonrt_chart1_ch5_lineseries.clear();
  
  nonrt_chart2_ch1_lineseries.clear();
  nonrt_chart2_ch2_lineseries.clear();
  nonrt_chart2_ch3_lineseries.clear();
  nonrt_chart2_ch4_lineseries.clear();
  nonrt_chart2_ch5_lineseries.clear();
  
  xy_chart1_ch1_lineseries.clear()
  xy_chart2_ch1_lineseries.clear()

  rt_chart_ch1_lineseries.clear()
  rt_chart_ch2_lineseries.clear()
  
}
