const botaoNovaTarefa = document.querySelector("#check-nova-tarefa")
const novaTarefa = document.querySelector(".nova-tarefa")


botaoNovaTarefa.addEventListener("change", adicionaTarefa)


function adicionaInput(){
    var input = document.createElement("input")

    input.setAttribute("type","checkbox");
    input.setAttribute("name","tarefa-incluida");
    input.setAttribute("value","text");
    input.setAttribute("class","input__checkbox"); 
   
    return input;
}

function adicionaLabel(){  
    var label = document.createElement("label")
    
    label.setAttribute("class","tarefas");
    label.textContent = novaTarefa.value;

    return label;
}


function adicionaDivSecundaria(){
    var divSecundaria = document.createElement("div")

    divSecundaria.setAttribute("class","check-tarefa");

    divSecundaria.appendChild(adicionaInput());
    divSecundaria.appendChild(adicionaLabel());
    
    return divSecundaria;
}

function adicionaImagem(){
    var imagem = document.createElement("img")

    imagem.setAttribute("src","/assets/images/icon-cross.svg");
    imagem.setAttribute("alt","Excluir");
    imagem.setAttribute("class","icone__excluir");

    return imagem;
}


function adicionaDivPrincipal(){
    var divPrincipal = document.createElement("div")

    divPrincipal.setAttribute("class","input__padrao");

    divPrincipal.appendChild(adicionaDivSecundaria());
    divPrincipal.appendChild(adicionaImagem());

    return divPrincipal;
}

function adicionaTarefa(){
    var section = document.querySelector(".container__tarefas")
    
    if (this.checked){
    section.appendChild(adicionaDivPrincipal());
    } else{

        novaTarefa.value = ""
    }

    return section;

}

