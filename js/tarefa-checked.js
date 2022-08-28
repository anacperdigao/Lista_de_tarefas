const botaoChecked = document.querySelector("#tarefa-1")
const labelFinalizado = document.querySelector("#input-tarefa-1")


botaoChecked.addEventListener("click", tarefaFinalizada)

function tarefaFinalizada(){

    if(botaoChecked.checked){        
        labelFinalizado.style.textDecoration = "line-through"
        labelFinalizado.setAttribute("class","finalizados todos")

    }else{
        labelFinalizado.style.textDecoration = "none"
        labelFinalizado.setAttribute("class","ativos todos")
    } 
} 
   





/*
const botaoChecked = document.querySelectorAll(".input__checkbox")
const labelFinalizado = document.querySelectorAll(".tarefas")


for(let i = 0; i < botaoChecked.length; i++){

    botaoChecked[i].addEventListener("click", tarefaFinalizada)
}


function tarefaFinalizada(){

    for(let i = 0; i < labelFinalizado.length; i++){

        labelFinalizado[i].style.textDecoration = "line-through"
        console.log(labelFinalizado[0])
    } 
}
    




/*if(botaoChecked.checked){        
            labelFinalizado[i].style.textDecoration = "line-through"
        }else{
            labelFinalizado[i].style.textDecoration = "none"
        }
        */