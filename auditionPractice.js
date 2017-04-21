function readIt(){
    var output = "";
    var num1 = Number(document.forms["getNums"]["startNum"].value);
        // console.log(num1);
    var num2 = Number(document.forms["getNums"]["secondNum"].value);
        // console.log(num2);
    var num3 = Number(document.forms["getNums"]["stepNum"].value);
        // console.log(num3);
    for (var i = num1; i <= num2; i += num3){
        // console.log(i);
        if(i % 2 == 0){
            output += " " + i + " ";
        }
    }
    if(output == ""){ 
            output = "There are no even values."
        }
    document.getElementById("results").style.display = 'block'
    document.getElementById("showIt").innerText = output;
    return false;
}