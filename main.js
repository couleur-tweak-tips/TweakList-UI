function loadList(tlui) {

    const functionsList = document.getElementById('functions-list')
    let first_function = ""
    const selected_functions = JSON.parse(localStorage.getItem("selected"));

    for (const name in tlui) {

        if (first_function === "") {
            first_function = name
        }

        const listItem = document.createElement('div');
        listItem.classList.add('function');
        listItem.style.cursor = "pointer"

        listItem.addEventListener('click', function () {
            V2FocusFunction(funclink.text)
            V2loadParameters(name)
        });

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox"
        checkbox.id = name

        checkbox.addEventListener("click", function (event) {
            event.stopPropagation();
        });
        checkbox.addEventListener("dblclick", function (event) {
            event.stopPropagation();
        });
        if (selected_functions) {
            checkbox.checked = selected_functions.includes(name)

        }


        checkbox.addEventListener("change", function (event) {
            // let startTime = performance.now();
            let selected = JSON.parse(localStorage.getItem("selected"))
            if (selected === null) {
                selected = []
            }
            if (checkbox.checked) {
                if (!selected.includes(name)) {
                    selected.push(name)
                }
            } else {
                const index = selected.indexOf(name);
                if (index > -1) {
                    selected.splice(index, 1);
                }
            }
            localStorage.setItem("selected", JSON.stringify(selected))
        });
        listItem.addEventListener("dblclick", function (event) {
            checkbox.checked = !checkbox.checked
            checkbox.dispatchEvent(new Event('change'));
        });

        listItem.appendChild(checkbox)

        const funclink = document.createElement('a');
        funclink.text = name
        funclink.style.userSelect = 'none';
        listItem.appendChild(funclink)

        functionsList.appendChild(listItem)
    }

    const url = new URLSearchParams(window.location.search);
    const get_F = url.get('f')
    if (get_F) {
        V2loadParameters(get_F)
        V2FocusFunction(get_F)
    } else {
        V2loadParameters(first_function)
        V2FocusFunction(first_function)
    }
}


function V2FocusFunction(functionName) {
    const functions = document.querySelectorAll('.function')
    functions.forEach(func => {
        if (func.firstChild.id === functionName) {

            const url = new URLSearchParams(window.location.search)
            url.set('f', functionName)
            const newURL = `${window.location.origin}${window.location.pathname}?${url.toString()}`;
            window.history.pushState({path: newURL}, '', newURL);

            func.classList.add("active")
            func.style['background-color'] = "#20262c"
        } else {
            func.classList.remove("active")
            func.style['background-color'] = "initial"
        }
    })
}


function V2loadParameters(funcName) {

    const func = tlui[funcName]

    const parametersPane = document.getElementById('parameters');
    parametersPane.innerHTML = ''

    const title = document.createElement("h2")
    title.innerText = funcName
    parametersPane.appendChild(title)

    const desc = document.createElement("p")
    desc.innerText = func.description
    parametersPane.appendChild(desc)
    for (let [paramName, param] of Object.entries(func.parameters)) {
        // console.log(paramName + ': ' + param.type)

        switch (param.type) {
            case 'enum': {

                const paramTitle = document.createElement("h3")
                paramTitle.htmlFor = paramName
                paramTitle.innerText = paramName
                parametersPane.appendChild(paramTitle)

                if (param.description) {
                    const p = document.createElement('p');
                    p.textContent = param.description
                    parametersPane.appendChild(p)
                }

                // if it is an object, each value is supposed to be a description
                // thus it'll be formatted like "<b>key</b>: value"
                const is_array = Object.prototype.toString.apply(param.values) === '[object Array]'

                for (const i in param.values) {

                    const radioDiv = document.createElement("div")
                    const radioValue = is_array ? param.values[i] : i

                    const radioInput = document.createElement("input")
                    radioInput.type = "radio"
                    radioInput.id = radioValue
                    radioInput.name = paramName

                    const savedValue = getParameter('func_' + funcName, paramName)

                    radioInput.addEventListener('change', () => {
                        writeParameter('func_' + funcName, paramName, radioValue)
                    })
                    if (savedValue === radioValue) {
                        radioInput.checked = true
                    } else if (!savedValue && radioValue === tlui[funcName].parameters[paramName].default) {
                        radioInput.checked = true
                        radioInput.dispatchEvent(new Event('change'));
                    }
                    radioDiv.appendChild(radioInput)


                    const label = document.createElement("label")
                    label.htmlFor = radioValue
                    label.innerHTML = is_array ? param.values[i] : `<b>${i}</b>: ${param.values[i]}`
                    radioDiv.appendChild(label)

                    parametersPane.appendChild(radioDiv)
                    // console.log(i + ': ' + param.values[i])
                }
                parametersPane.appendChild(document.createElement("br"))
                break
            }
            case 'enum[]': {

                const select_cache = getParameter('func_' + funcName, paramName)
                const is_array = Object.prototype.toString.apply(param.values) === '[object Array]'

                const paramTitle = document.createElement("h3")
                paramTitle.htmlFor = paramName
                paramTitle.innerText = paramName
                parametersPane.appendChild(paramTitle)

                for (const i in param.values) {
                    const checkboxValue = is_array ? param.values[i] : i

                    const div = document.createElement("div")

                    const checkbox = document.createElement("input")
                    checkbox.id = checkboxValue
                    checkbox.type = "checkbox"
                    div.appendChild(checkbox)

                    const label = document.createElement("label")
                    label.innerHTML = is_array ? param.values[i] : `<b>${i}</b>: ${param.values[i]}`
                    label.htmlFor = checkboxValue
                    div.appendChild(label)

                    if (select_cache.includes(checkboxValue)) {
                        checkbox.checked = true
                    }

                    checkbox.addEventListener('change', () => {

                        let selected = select_cache ? select_cache : []
                        if (checkbox.checked) {

                            if (!selected.includes(checkboxValue)) {
                                // console.log("Adding " + checkboxValue)

                                selected.push(checkboxValue)
                            }
                        } else {

                            const index = selected.indexOf(checkboxValue);
                            if (index > -1) { // only splice array when item is found
                                // console.log("Removing " + checkboxValue)

                                selected.splice(index, 1); // 2nd parameter means remove one item only
                            }
                        }
                        writeParameter('func_' + funcName, paramName, selected)
                    })

                    parametersPane.appendChild(div)
                }
                parametersPane.appendChild(document.createElement("br"))

                break
            }
            case 'bool':
            case 'boolean': {
                const checkbox = document.createElement("input")
                checkbox.type = "checkbox"
                checkbox.id = paramName
                checkbox.checked = getParameter('func_' + funcName, paramName)
                parametersPane.appendChild(checkbox)

                const paramTitle = document.createElement("label")
                paramTitle.htmlFor = paramName
                paramTitle.innerText = paramName
                parametersPane.appendChild(paramTitle)

                checkbox.addEventListener('change', function () {
                    writeParameter('func_' + funcName, paramName, checkbox.checked)
                });

                parametersPane.appendChild(document.createElement("br"))
                break
            }
            case 'String':
            case 'string': {
                const span = document.createElement("span")
                span.innerHTML = paramName + ': '

                const input = document.createElement("input")
                input.type = "text"
                input.id = paramName
                span.appendChild(input)

                const saved = getParameter('func_' + funcName, paramName)
                if (![undefined, null, ""].includes(saved)) {
                    input.value = saved
                }


                input.addEventListener('input', function () {
                    writeParameter('func_' + funcName, paramName, input.value.trim())
                });

                span.appendChild(document.createElement("br"))

                parametersPane.appendChild(span)
                parametersPane.appendChild(document.createElement("br"))

                break
            }
            default: {
                console.log(param.type)
            }
        }
    }
    parametersPane.addEventListener("change", () => {
        const funclink = document.getElementById(funcName)

        if (funclink.parentElement.classList.contains("active")) {
            funclink.checked = true
            funclink.dispatchEvent(new Event('change'));
        }
    })
}

function sanitizeString(string) {

    if (typeof (string) === 'boolean') {
        console.error("invalid string passed to sanitizeString")
    }

    let doQuoting = false;

    if (string.includes(" ")) {
        doQuoting = true
    }

    if (doQuoting) {
        return `'${string}'`
    } else {
        return string
    }
}

function exportCode() {
    const exportDiv = document.getElementById("export");
    exportDiv.style.display = "block"

    const defaultValue = "iex(irm tl.ctt.cx);"

    exportDiv.innerHTML = defaultValue

    const selected = JSON.parse(localStorage.getItem("selected"))

    for (const index in selected) {

        const funcName = selected[index]

        const paragraph = document.createElement("p")
        paragraph.innerHTML = funcName

        for (const arg in conf['func_' + funcName]) {
            switch (tlui[funcName].parameters[arg].type) {
                case 'String':
                case 'string':
                    const string = sanitizeString(conf['func_' + funcName][arg])
                    if (string !== "") {
                        paragraph.innerHTML += ` -${arg} ${string}`
                    }
                    break
                case 'enum':
                    paragraph.innerHTML += ` -${arg} ${sanitizeString(conf['func_' + funcName][arg])}`
                    break
                case 'enum[]':
                    const values = conf['func_' + funcName][arg]
                    if (values.length) {
                        paragraph.innerHTML += ` -${arg} ${values.map(string => sanitizeString(string)).join(', ')}`
                    }
                    break
                case 'boolean':
                case 'bool': {
                    if (
                        conf['func_' + funcName][arg]
                    ) {
                        paragraph.innerHTML += ` -${arg}`
                    }
                }
            }
        }

        exportDiv.appendChild(paragraph)
    }

    if (exportDiv.innerHTML === defaultValue) {
        exportDiv.style.display = "none"
    }
}