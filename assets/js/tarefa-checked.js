const botaoChecked = document.querySelectorAll(".input__checkbox")

for(let i = 0; i < botaoChecked.length; i++){

    botaoChecked[i].addEventListener("click", tarefaFinalizada)
}

export function tarefaFinalizada(event){

    const alvoEvento = event.target
    const irmaoDoAlvo = alvoEvento.nextElementSibling

    if(alvoEvento.checked){        
        
        irmaoDoAlvo.style.textDecoration = "line-through"
        irmaoDoAlvo.setAttribute("class","tarefas finalizados todos")       

    }else{  
        irmaoDoAlvo.style.textDecoration = "none"
        irmaoDoAlvo.setAttribute("class","tarefas ativos todos")
    } 
      
} 