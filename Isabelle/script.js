function validar(){
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("password").value;
    if(usuario == "admin" && senha =="123"){
    window.location.href = "area-aluno.html";
    return false;
}
else{
    alert("usuáio ou senha incorretos!");
    return false;
}
}