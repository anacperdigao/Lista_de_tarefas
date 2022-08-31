const botaoExcluir = document.querySelectorAll(".icone__excluir")

for(let i = 0; i < botaoExcluir.length; i++){
 
    botaoExcluir[i].addEventListener("click", excluirItem)
}


function excluirItem(event){
          
    const alvoEvento = event.target
    const paiDoAlvo = alvoEvento.parentNode
            
    setTimeout(function(){
        paiDoAlvo.remove();
        
        });
    }