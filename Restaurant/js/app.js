// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
   console.log(menuItems)
   let newArr =[];
   menuItems.forEach(element => {
    console.log(element);
      let myElement = `<article class="menu-item">
            <img src="${element.img}" alt="menu item" class="photo" />
            <div class="item-info">
                <header>
                <h4>${element.title}</h4>
                <h4 class="price">${element.price}</h4>
                </header>
                <p class="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
                laboriosam excepturi! Quo, officia.
                </p>
            </div>ss
            </article>`;    
            newArr.push(myElement)

   });          
let myMeniu = newArr.join('')
sectionCenter.innerHTML = myMeniu

}
function displayMenuButtons() {
    
   
}