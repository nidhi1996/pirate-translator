var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output p");
//server URL to pirate API
var serverURL = "https://api.funtranslations.com/translate/pirate.json";
//prepare server URL for querying [load]
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}
//error handling
function errorHandler(error){
    console.log("Error occured ",error)
}
//click event
function clickEventHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {txtOutput.innerText=json.contents.translated
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);