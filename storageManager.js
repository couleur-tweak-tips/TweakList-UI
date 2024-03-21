const conf = {}

for (const index in Object.keys(localStorage)) {

    const key = localStorage.key(index)

    if (!key.startsWith("func_")){
        continue
    }

    const string = localStorage.getItem(key)

    conf[key] = JSON.parse(string)
}


function getParameter(funcName, paramName) {

    if (!funcName.startsWith("func_")){
        return conf[funcName][paramName]
    }

    const func = conf[funcName]
    if (func && func[paramName]){
        const cached = func[paramName]
        if (cached !== undefined) {
            return cached
        }
    }

    const defaultParam = tlui[funcName.replace("func_", "")].parameters[paramName]

    switch(defaultParam.type){
        case 'checkbox': return false
        case 'enum[]': return []
        case 'folderpath':
        case 'filepath':
        case 'string':
        case 'enum':
            return ''
    }
}

function writeParameter(funcName, key, value) {

    if (!conf[funcName]){
        conf[funcName] = {}
    }

    conf[funcName][key] = value

    localStorage.setItem(
        funcName,
        JSON.stringify(conf[funcName])
    )
}