function calculateTriangleArea (){
    // getting height 
    const baseField = document.getElementById('base-triangle');
    const baseFieldValueString = baseField.value;
    const baseFieldValue=parseFloat(baseFieldValueString);console.log(baseFieldValue)

    // getting height 
    const heightField = document.getElementById('height-triangle');
    const heightFieldValueString =heightField.value;
    const heightFieldValue = parseFloat(heightFieldValueString);

    const area = .5 * heightFieldValue * baseFieldValue;

    // setting the value to area text 
    const areaText = document.getElementById('area-text');
    areaText.innerText = area;
}

// functions  
function getInputFieldValue (fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString );
    return inputFieldValue;
    console.log(inputFieldValue)
}

function setElementInnerText (elementId , value){
    const element = document.getElementById(elementId);
    element.innerText=value;
}


// ractangle 
function calculateRectangleArea (){
    const width = getInputFieldValue('width-rectangle');
    const height = getInputFieldValue('height-rectangle');
    const area =height*width;
    setElementInnerText('area-rectangle',area);
}
function calculateParallelogramArea(){
    const width = getInputFieldValue('base-parallelogram');
    const height = getInputFieldValue('height-parallelogram');
    const area =height*width;
    setElementInnerText('area-parallelogram',area);
}