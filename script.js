var code = "";

function random() {
    var possible = "RAMVNI";

    for (var i = 0; i < 4; i++)
        code += possible.charAt(Math.floor(Math.random() * possible.length));

    code = "NRRI";
    return code;
}

console.log(random());

function verifyCode() {
    var inputCode = document.getElementById("inputCode").value;
    var equis = "";
    var asterisk = "";

    console.log(code);
    console.log(inputCode);

    for (var i = 0; i < inputCode.length; i++) {
        var e = inputCode.charAt(i);
        for (var j = 0; j < code.length; j++) {
            if (e == code.charAt(j) && i==j ) {
                console.log("i: ", i);
                console.log("j: ", j);
                equis += "X";
            } else if (e == code.charAt(j)) {
                console.log("i: ", i);
                console.log("j: ", j);
                asterisk += "*";
            }
        }
    }
    console.log(equis+asterisk);
}