const botaoChecked = document.querySelectorAll(".input__checkbox")

for(let i = 0; i < botaoChecked.length; i++){

    botaoChecked[i].addEventListener("click", tarefaFinalizada)
}

function tarefaFinalizada(event){

    const alvoEvento = event.target
    const irmaoDoAlvo = alvoEvento.nextElementSibling

    if(alvoEvento.checked){        
        
        irmaoDoAlvo.style.textDecoration = "line-through"
        irmaoDoAlvo.setAttribute("class","finalizados todos")       

    }else{  
        irmaoDoAlvo.style.textDecoration = "none"
        irmaoDoAlvo.setAttribute("class","ativos todos")
    } 
      
} 