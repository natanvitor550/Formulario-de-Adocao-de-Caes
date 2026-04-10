document.getElementById("fformAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let idade = document.getElementById("iddade").value;
    let telefone = document.getElementById("telefone").value;
    let quintal = document.querySelector('input[nome="quintal"]:checked');
    let horas = document.getElementById("horas").value;
    idade = parseFloat(idade);
    
    if(horas>8) return alert("Seu pet nao pode ficar mais de 8 horas sozinho");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome:" + nome;

})