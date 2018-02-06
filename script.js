function random() {
    var text = "";
    var possible = "RAMVNI";

    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log(random());

function verifyCode() {
    var code = document.getElementById("code").value;
    console.log(code);
}