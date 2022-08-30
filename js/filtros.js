//Puxando as divs principais
const divsFiltro = document.querySelectorAll(".input__padrao")

//Puxando os botões de filtros
const filtroTodos = document.querySelector("#filtro__todos")
const filtroAtivos = document.querySelector("#filtro__ativos")
const filtroFinalizados = document.querySelector("#filtro__finalizados")
const limparFinalizados = document.querySelector("#filtro__limpar")
//const itensRestantes = document.querySelector("#itens__restantes")

//Adicionando evento de escuta para os botões
filtroTodos.addEventListener("click", filtrandoTodos)
filtroAtivos.addEventListener("click", filtrandoAtivos)
filtroFinalizados.addEventListener("click", filtrandoFinalizados)
limparFinalizados.addEventListener("click", limpandoFinalizados)

//Funções

function filtrandoTodos(){
    divsFiltro.forEach((divsFiltro) => {
        divsFiltro.style.display = "grid"
    })
    return filtrandoTodos  
}


function filtrandoAtivos() {
    divsFiltro.forEach((divsFiltro) => {
        if(divsFiltro.querySelector("input").checked)
            divsFiltro.style.display = "none"
    })
}


function filtrandoFinalizados(){
    divsFiltro.forEach((divsFiltro) => {
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


/* Itens restantes

function quantItensRestantes(){

    itensRestantes.textContent = `${divsFiltro.filter((t)=> t.checked === false).length} itens restantes`
}
*/
