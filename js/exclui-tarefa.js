var botaoExcluir = document.querySelectorAll(".icone__excluir")

for(var i = 0; i < botaoExcluir.length; i++){
    
    botaoExcluir[i].addEventListener("click", excluirItem)

    function excluirItem(event){
          
            var alvoEvento = event.target
            var paiDoAlvo = alvoEvento.parentNode
        
            paiDoAlvo.classList.add("fadeOut")
            
            setTimeout(function(){
                paiDoAlvo.remove();
            });
    }

}



