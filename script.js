
 
const circleButton = document.querySelector('.shape-button[data-shape="circle"]');
const squareButton = document.querySelector('.shape-button[data-shape="square"]');
const circleImage = document.getElementById('circleImage');
const squareImage = document.getElementById('squareImage');
const cakeContainer = document.querySelector('.cake-container');
const dropSpots = document.querySelectorAll('.drop-spot');
const totalPriceElement = document.getElementById('totalPrice');
const shapeButtons = document.querySelectorAll('.shape-button[data-price]');


let selectedShape = 'circle'; 
const selectedElements = [];

let totalPrice = 0;

shapeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const price = parseInt(button.dataset.price);
        totalPrice += price;
        updateTotalPrice();
    });
});




circleButton.addEventListener('click', () => {
    selectedShape = 'circle';
    circleImage.style.opacity = 1;
    squareImage.style.opacity = 0;
});

squareButton.addEventListener('click', () => {
    selectedShape = 'square';
    squareImage.style.opacity = 1;
    circleImage.style.opacity = 0;
});

const elements = document.querySelectorAll('.draggable');
elements.forEach((element) => {
    element.draggable = true;

    element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', element.dataset.price);
    });
});

dropSpots.forEach((dropSpot, index) => {
    dropSpot.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropSpot.addEventListener('drop', (e) => {
        e.preventDefault();
        const dataPrice = e.dataTransfer.getData('text/plain');
        const price = parseInt(dataPrice);

        const imageElement = document.createElement('img');
        imageElement.src = 'path_to_your_element_image.png'; 
        imageElement.className = 'dropped-element-image';
        
        dropSpot.innerHTML = ''; 
        dropSpot.appendChild(imageElement);

        totalPrice += price;
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}



document.addEventListener("DOMContentLoaded", function () {
    const showÇıkolatalar = document.getElementById("showÇıkolatalar");
    const showKremalar = document.getElementById("showKremalar");
    const çıkolatalarSection = document.getElementById("çıkolatalar");
    const kremalarSection = document.getElementById("kremalar");

    showÇıkolatalar.addEventListener("click", function (e) {
        e.preventDefault();
        çıkolatalarSection.style.display = "block";
        kremalarSection.style.display = "none";
    });

    showKremalar.addEventListener("click", function (e) {
        e.preventDefault();
        çıkolatalarSection.style.display = "none";
        kremalarSection.style.display = "block";
    });
});












document.addEventListener("DOMContentLoaded", function () {
    const selectedOptionsList = document.getElementById("selectedOptionsList");

    const selectedOptions = []; 
    let totalPrice = 0; 

    shapeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const price = parseInt(button.dataset.price);
            totalPrice += price;
            updateTotalPrice();

            const listItem = document.createElement('li');

            const removeButton = document.createElement('button');
            removeButton.textContent = 'x';
            removeButton.classList.add('remove-button');

            removeButton.addEventListener('click', () => {
                selectedOptionsList.removeChild(listItem);

                totalPrice -= price;
                updateTotalPrice();

                const index = selectedOptions.indexOf(button.textContent);
                if (index !== -1) {
                    selectedOptions.splice(index, 1);
                }
            });

            const optionText = `${button.textContent} - Price: $${price}`;
            listItem.textContent = optionText;

            listItem.appendChild(removeButton);

            selectedOptionsList.appendChild(listItem);

            selectedOptions.push(optionText);
        });
    });

    function updateTotalPrice() {
        const totalPriceElement = document.getElementById('totalPrice');
        totalPriceElement.textContent = `Total Price: $${totalPrice}`;
    }
});





