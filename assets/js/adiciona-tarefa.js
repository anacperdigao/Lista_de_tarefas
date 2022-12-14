import {excluirItem} from './exclui-tarefa.js'
import {tarefaFinalizada} from './tarefa-checked.js'

const botaoNovaTarefa = document.querySelector("#check-nova-tarefa")
const novaTarefa = document.querySelector(".nova-tarefa")

var nId = 1 //Apenas para atribuir id e for nas tarefas
var nFor = 1 //Apenas para atribuir id e for nas tarefas

botaoNovaTarefa.addEventListener("click", adicionaTarefa)


function adicionaInput(){
    const input = document.createElement("input")
    
    input.addEventListener("click",tarefaFinalizada)

    input.setAttribute("type","checkbox");
    input.setAttribute("name","tarefa-incluida");
    input.setAttribute("value","text");
    input.setAttribute("class","input__checkbox");
    input.setAttribute("id",`tarefa-${nId}`); 

    nId = nId + 1
    
    return input;

}

function adicionaLabel(){  
    const label = document.createElement("label")
    
    label.setAttribute("class","tarefas");
    label.setAttribute("for",`tarefa-${nFor}`);
    
    label.textContent = novaTarefa.value;

    nFor = nFor + 1
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
        section.appendChild(adicionaDivPrincipal())
    }

    novaTarefa.value = ""
    
    return section;

}

