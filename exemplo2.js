function incrementar() {
    let num1 = parseInt(document.getElementById("num1").value);
    for (let i = 1; i < num1; i++) {
        document.getElementById("resultado").innerHTML = "<p>" + i + "</p>";
    }
}