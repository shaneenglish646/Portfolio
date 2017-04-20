function doIt(){
    var startNum = document.forms["getnums"]["startNum"].value;
    var secondNum = document.forms["getnums"]["secondNum"].value;
    var stepNum = document.forms["getnums"]["stepNum"].value;
    document.getElementById("showStart").innertext = startNum;
    document.getElementById("showSecond").innertext = secondNum;
    document.getElementById("showStep").innertext = stepNum;
    return false;
}
