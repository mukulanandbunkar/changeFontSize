const textEntered = document.getElementById('text-entered');
const range = document.getElementById('range');
const fields = document.getElementsByClassName('field');
const fieldValue = document.getElementsByClassName('field-value');
const textWhite = document.getElementsByClassName('text-white');
const colorPicker = document.getElementById('color-picker');
console.log(colorPicker.value);


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

function changeReload(){
    console.log(fields);
    range.value = "20";
    let generatedHTML = "";
    for(let i=0; i<fields.length; i++){
        generatedHTML += `<h4 class= "text-white">${fields[i].id.toUpperCase()}:</h4><span class="field-value text-white">${fields[i].value}</span><br>`;
    }
    textEntered.innerHTML = generatedHTML;
    for(let i=0; i<fieldValue.length; i++){
        fieldValue[i].style.fontSize= `20px`;
    }
    console.log(`${hexToRGB(colorPicker.value)}${range.value/100})`)
    document.body.style.backgroundColor = `${hexToRGB(colorPicker.value)}${range.value/100})`;
    checkAlpha(range.value);
   
}

function changeSize(){
    for(let i=0; i<fieldValue.length; i++){
        fieldValue[i].style.fontSize= `${range.value}px`;
    }
    console.log(`${hexToRGB(colorPicker.value)}${range.value/100}`);
    document.body.style.background = `${hexToRGB(colorPicker.value)}${range.value/100})`;
    console.log(range.value/100);
    checkAlpha(range.value);
}
changeReload();