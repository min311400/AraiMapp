function Func1() {
    if (document.typeR.R1.checked == true) {
        document.getElementById("field2").value = document.getElementById("R1").value;
    }
    else if (document.typeR.R2.checked == true) {
        document.getElementById("field2").value = document.getElementById("R2").value;
    }
    else if (document.typeR.R3.checked == true) {
        document.getElementById("field2").value = document.getElementById("R3").value;
    }
}