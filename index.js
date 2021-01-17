// Welcome console message
console.log("%cEXPLAIN! API ready", "font-size: 16px");
console.log("");

function loadScript(scriptname) {

    let script_filename = `./Scripts/${scriptname}.js`
    let scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript'
    scriptTag.src = script_filename;

    document.body.appendChild(scriptTag);

}

