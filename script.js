/*Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- **Bonus**: Drag and drop to reorder items on the list
*/


//Trocando dark e white mode

const html = document.querySelector("html")
const iconeTema = document.querySelector(".icone__theme")

iconeTema.addEventListener("click", trocaTema)

function trocaTema(){
    html.classList.toggle("white__mode")
}

