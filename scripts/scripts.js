document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let idade = document.getElementById("idade").value;
    let telefone = document.getElementById("telefone").value;
    let quintal = document.querySelector('input[nome="quintal"]:checked');

    if(nome,length < 3) return alert("Nome Inválido");
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome:" + nome;

    if(idade,length < 18) return alert("Idade não aceita");
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Idade:" + idade;

     if(telefone,length < 18) return alert("Numero não aceito");
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Telefone:" + telefone;

})