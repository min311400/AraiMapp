function fncSubmit() {
    if (document.typeR.R1.checked == true || document.typeR.R2.checked == true || document.typeR.R3.checked == true) {
        return false;              
    }
    document.form1.submit();
}