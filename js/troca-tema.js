/*Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Filter by all/active/complete todos
- Clear all completed todos
- **Bonus**: Drag and drop to reorder items on the list
*/


const html = document.querySelector("html")
const iconeTema = document.querySelector(".icone__theme")
var num = 2

iconeTema.addEventListener("click", trocaTema)

function trocaTema(){

    html.classList.toggle("white__mode")

    setTimeout(function () {
    
    if (num == 1){
        iconeTema.src = "/assets/images/icon-sun.svg";
    
    } else if (num == 2){
        iconeTema.src = "/assets/images/icon-moon.svg";
    
    }
    //garante que num fique alternando entre 1 e 2    
    num = (num % 2) + 1;
    });
}