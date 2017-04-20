function doIt(){
    var startNum = document.forms["getNums"]["startNum"].value;
    console.log(startNum);
    var secondNum = document.forms["getNums"]["secondNum"].value;
    console.log(secondNum);
    var stepNum = document.forms["getNums"]["stepNum"].value;
    console.log(stepNum);
    document.getElementById("showStart").innertext = startNum;
    document.getElementById("showSecond").innertext = secondNum;
    document.getElementById("showStep").innertext = stepNum;
    return false;
}
