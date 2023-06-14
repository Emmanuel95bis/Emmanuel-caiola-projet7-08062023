const selectIngredient = document.querySelectorAll('#choix1');
let filtres = [];

function closeFilter() {

}
let increment = 0;

selectIngredient.forEach(element => {
    element.addEventListener("click", function () {
        increment++;
        filtres.push(element.innerText);
        const filtre = document.querySelector('.filtres');
        const selectFiltre = document.createElement('div');
        selectFiltre.setAttribute('id', `div${increment}`);
        selectFiltre.innerHTML = `${element.innerText}<i id=${increment} class="fa-solid fa-xmark"></i>`;
        filtre.appendChild(selectFiltre);

       document.getElementById(increment).addEventListener('click', function (e) {
        console.log(e.target.id);
            document.getElementById(`div${e.target.id}`).style.display = 'none';
            console.log(e.target.id);

        })


        console.log(filtres);
        console.log(element.innerText);
    });
})
