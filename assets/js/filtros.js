//Puxando as divs principais
const divsFiltro = document.querySelectorAll(".input__padrao")

//Puxando os botões de filtros
const filtroTodos = document.querySelector("#filtro__todos")
const filtroAtivos = document.querySelector("#filtro__ativos")
const filtroFinalizados = document.querySelector("#filtro__finalizados")
const limparFinalizados = document.querySelector("#filtro__limpar")

//Adicionando evento de escuta para os botões
filtroTodos.addEventListener("click", filtrandoTodos)
filtroAtivos.addEventListener("click", filtrandoAtivos)
filtroFinalizados.addEventListener("click", filtrandoFinalizados)
limparFinalizados.addEventListener("click", limpandoFinalizados)

//Funções

function filtrandoTodos(){
    document.querySelectorAll(".linha__final-itens").forEach((d, i) => {
    if (i===0){
        d.classList.add("filtro-ativo")
    } else{
        d.classList.remove("filtro-ativo")
    }
    })

    
    divsFiltro.forEach((divsFiltro) => {
        divsFiltro.style.display = "grid"
    })  
}


function filtrandoAtivos() {
    document.querySelectorAll(".linha__final-itens").forEach((d, i) => {
        if (i===1){
            d.classList.add("filtro-ativo")
        } else{
            d.classList.remove("filtro-ativo")
        }
        })

    
    divsFiltro.forEach((divsFiltro) => {
        divsFiltro.style.display = "grid"
        if(divsFiltro.querySelector("input").checked)
            divsFiltro.style.display = "none"
    })
}


function filtrandoFinalizados(){
    document.querySelectorAll(".linha__final-itens").forEach((d, i) => {
        if (i===2){
            d.classList.add("filtro-ativo")
        } else{
            d.classList.remove("filtro-ativo")
        }
        })

    
    divsFiltro.forEach((divsFiltro) => {
        divsFiltro.style.display = "grid"
        if(!divsFiltro.querySelector("input").checked)
            divsFiltro.style.display = "none"
    })
}


function limpandoFinalizados(){
    divsFiltro.forEach((divsFiltro) => {
        if(divsFiltro.querySelector("input").checked)
            divsFiltro.remove()
    })
}

