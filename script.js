function Enviar(){

    var xthttp = new XMLHttpRequest();
    
    var nome1 = document.getElementById("nome1").innerHTML;
    var nome2 = document.getElementById("nome2").innerHTML;
    var nome3 = document.getElementById("nome3").innerHTML;
    var nome4 = document.getElementById("nome4").innerHTML;
    var historia = document.getElementById("historia").innerHTML;
    
    var alunos = new Array()
    xthttp.open("POST", "https://fsdt-contact.onrender.com/contact",  )

    var data = new FormData();
    data.append("nome1",nome1);
    data.append("nome2",nome2);
    data.append("nome3",nome2);
    data.append("nome4",nome2);
    data.append("historia",historia);
    
    xthttp.send(data);

    data.reset();

}

function limparFormulario() {
    document.getElementById("contatos").reset();
}

