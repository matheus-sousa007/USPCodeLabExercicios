let script = document.getElementsByTagName("script")[0]

function createInputNameField(){
    let inputNameField = document.createElement("input")
    inputNameField.type = "text"
    inputNameField.id = "nome"
    document.body.insertBefore(inputNameField, script)
}


function splitName(){
    let name = document.getElementById("nome")
    let nome = name.value
    // console.log(nome)
    let splittedName = nome.split(" ")

    // console.log(splittedName)

    let surname = ""

    for(let i = 1; i < splittedName.length; i++){
        surname += splittedName[i] + ' '
    }

    splittedName = [splittedName[0], surname]

    printName(splittedName)
}

function printName(Name){
    if (!Array.isArray(Name)) return;
    let pName = document.createElement("p")
    pName.innerHTML = Name[0]
    document.body.insertBefore(pName, script)
    let pSurnames = document.createElement("p") 
    pSurnames.innerHTML = Name[1]
    document.body.insertBefore(pSurnames, script)
}

function createSplitNameButton(){
    let splitNameButton = document.createElement("button")
    splitNameButton.type = "button"
    splitNameButton.innerHTML = "Dividir Nome"
    splitNameButton.addEventListener("click", splitName)
    document.body.insertBefore(splitNameButton, script)
}

function DarkMode(){
    if(document.body.className == "dark-mode")
        document.body.className = "light-mode"
    else
        document.body.className = "dark-mode"
}

function createDarkModeButton(){
    let darkModeButton = document.createElement("button")
    darkModeButton.type = "button"
    darkModeButton.innerHTML = "Dark Mode"
    darkModeButton.addEventListener("click", DarkMode)
    document.body.insertBefore(darkModeButton, script)
}

createInputNameField()
createSplitNameButton()
createDarkModeButton()