const textEntered = document.getElementById('text-entered');
const range = document.getElementById('range');
const fields = document.getElementsByClassName('field');
const fieldValue = document.getElementsByClassName('field-value');
const textWhite = document.getElementsByClassName('text-white');
const colorPicker = document.getElementById('color-picker');



function hexToRGB(hex) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r},${g},${b},`;
}

function checkAlpha(alphaRange){
    if((alphaRange/100) >  0.6)
    {
        for(let i=0; i<textWhite.length; i++){
           textWhite[i].style.color = 'white';
        }
    }else{
        for(let i=0; i<textWhite.length; i++){
            textWhite[i].style.color = '#000';
         } 
    }

}


//first approach using the non dynamically created tag
// function changeReload(){
//     console.log(fields);
//     let generatedHTML = "";
//     for(let i=0; i<fields.length; i++){
//         generatedHTML += `<h4 class= "text-white">${fields[i].id.toUpperCase()}:</h4><span class="field-value text-white">${fields[i].value}</span><br>`;
//     }
//     textEntered.innerHTML = generatedHTML;
//     for(let i=0; i<fieldValue.length; i++){
//         fieldValue[i].style.fontSize= `${range.value}px`;
//     }
//     console.log(`${hexToRGB(colorPicker.value)}${range.value/100})`)
//     document.body.style.backgroundColor = `${hexToRGB(colorPicker.value)}${range.value/100})`;
//     checkAlpha(range.value);
// }

// function insertAfter(newElement, referenceElement) {
//   referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
// }

//second approach to solve using dynamically created tags
function changeReload(){
    console.log(fields);
    textEntered.innerHTML = "";
    for(let i=0; i<fields.length; i++){
        let mainDiv = document.createElement("div");
        let keyField = document.createElement("h4");
        keyField.className = "text-white";
        keyField.innerText = fields[i].id.toUpperCase();
        let keyVal = document.createElement("span");
        keyVal.className = "field-value text-white";
        keyVal.innerText = fields[i].value;
        mainDiv.append(keyField);
        mainDiv.append(keyVal);
        textEntered.append(mainDiv)
        console.log(mainDiv); 
    }
    for(let i=0; i<fieldValue.length; i++){
        fieldValue[i].style.fontSize= `${range.value}px`;
    }
    console.log(`${hexToRGB(colorPicker.value)}${range.value/100})`)
    document.body.style.backgroundColor = `${hexToRGB(colorPicker.value)}${range.value/100})`;
    checkAlpha(range.value);
}

function changeSize(){
    for(let i=0; i<fieldValue.length; i++){
        fieldValue[i].style.fontSize= `${range.value}px`;
    }
    document.body.style.background = `${hexToRGB(colorPicker.value)}${range.value/100})`;
    checkAlpha(range.value);
}
changeReload();