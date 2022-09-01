//Puxando a classe da linha dos filtros apenas para alteração de CSS
const itensFinal = document.querySelectorAll(".linha__final-itens")

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

//Funções de filtragem e estilização

function filtrandoTodos(){
    const divsFiltro = document.querySelectorAll(".input__padrao")

    itensFinal.forEach((d, i) => {
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
    const divsFiltro = document.querySelectorAll(".input__padrao")

    itensFinal.forEach((d, i) => {
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
    const divsFiltro = document.querySelectorAll(".input__padrao")

    itensFinal.forEach((d, i) => {
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
    const divsFiltro = document.querySelectorAll(".input__padrao")

    divsFiltro.forEach((divsFiltro) => {
        if(divsFiltro.querySelector("input").checked)
            divsFiltro.remove()
    })
}


