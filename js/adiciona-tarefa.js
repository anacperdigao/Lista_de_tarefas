const botaoNovaTarefa = document.querySelector("#check-nova-tarefa")
const novaTarefa = document.querySelector(".nova-tarefa")


botaoNovaTarefa.addEventListener("click", adicionaTarefa)


function adicionaInput(){
    const input = document.createElement("input")

    input.setAttribute("type","checkbox");
    input.setAttribute("name","tarefa-incluida");
    input.setAttribute("value","text");
    input.setAttribute("class","input__checkbox"); 
   
    return input;
}

function adicionaLabel(){  
    const label = document.createElement("label")
    
    label.setAttribute("class","tarefas");
    label.textContent = novaTarefa.value;

    return label;
}


function adicionaDivSecundaria(){
    const divSecundaria = document.createElement("div")

    divSecundaria.setAttribute("class","check-tarefa");

    divSecundaria.appendChild(adicionaInput());
    divSecundaria.appendChild(adicionaLabel());
    
    return divSecundaria;
}

function adicionaImagem(){
    const imagem = document.createElement("img")
    imagem.addEventListener("click", excluirItem)

    imagem.setAttribute("src","/assets/images/icon-cross.svg");
    imagem.setAttribute("alt","Excluir");
    imagem.setAttribute("class","icone__excluir");

    return imagem;
}


function adicionaDivPrincipal(){
    const divPrincipal = document.createElement("div")

    divPrincipal.setAttribute("class","input__padrao");

    divPrincipal.appendChild(adicionaDivSecundaria());
    divPrincipal.appendChild(adicionaImagem());

    return divPrincipal;
}

function adicionaTarefa(){
    const section = document.querySelector(".container__tarefas")
    
    if(novaTarefa.value === ""){
        alert("Por favor, digite uma tarefa.")

    } else{
        section.appendChild(adicionaDivPrincipal());
    }

    novaTarefa.value = ""
    
    return section;

}


function excluirItem(event){
          
    const alvoEvento = event.target
    const paiDoAlvo = alvoEvento.parentNode
    
    setTimeout(function(){
        paiDoAlvo.remove();
    });
}