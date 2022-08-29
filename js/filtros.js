//Puxando as classes
const elementosAtivos = document.querySelectorAll(".ativos")
const elementosFinalizados = document.querySelectorAll(".finalizados")
const elementosTodos = document.querySelectorAll(".todos")

//Puxando os botões de filtros
const filtroTodos = document.querySelector("#filtro__todos")
const filtroAtivos = document.querySelector("#filtro__ativos")
const filtroFinalizados = document.querySelector("#filtro__finalizados")

//Adicionando evento de escuta para os botões
filtroTodos.addEventListener("click", filtrandoTodos)
filtroAtivos.addEventListener("click", filtrandoAtivos)
filtroFinalizados.addEventListener("click", filtrandoFinalizados)

//Funções

function filtrandoTodos(){

}


function filtrandoAtivos(){

}


function filtrandoFinalizados(){

}








// Limpar finalizados
const limparFinalizados = document.querySelector("#filtro__limpar")

limparFinalizados.addEventListener("click", limpandoFinalizados)

function limpandoFinalizados(){

}



// Itens restantes