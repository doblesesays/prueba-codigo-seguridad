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
    var stash = "";

    console.log(code);
    console.log(inputCode);

    for (var i = 0; i < inputCode.length; i++) {
        var e = inputCode.charAt(i);
        var go = true;
        var j = 0;
        while (j<code.length && go){
            if (e == code.charAt(j) && i==j ) {
                console.log("i: ", i);
                console.log("j: ", j);
                equis += "X";
                inputCode = inputCode.replaceAt(i, " ");
                console.log("inputCode: "+ inputCode);
                console.log(stash);
                if (stash.includes(e)) {
                    console.log(asterisk);
                    asterisk = asterisk.replace('*', '');
                    console.log(asterisk);
                }
                go = false;
            } else if (e == code.charAt(j)) {
                console.log("i: ", i);
                console.log("j: ", j);
                asterisk += "*";
            }
            j++;
        }
        if (!go) {
            stash+=e;
        }
    }
    console.log(equis+asterisk);
    stash=equis=asterisk="";
}

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}