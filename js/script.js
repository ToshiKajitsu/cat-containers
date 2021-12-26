const foieGras = document.querySelector('.main-container_foieGras');
const fish = document.querySelector('.main-container_fish');
const chicken = document.querySelector('.main-container_chicken');

//Входящий объект с наличием товара
const current = {
    foeGrasp: 1,
    fish: 1,
    chicken: 0,
};

window.onload = () => {
    const point = [];
    const notAvailable = [];
    for (set of Object.entries(current)) {
        point.push(set);
    }
    for (i = 0; i < point.length; i++) {
        for (k = 0; k < point[i].length; k++) {
            if (point[i][k] == 0) {
                notAvailable.push(point[i][k-1]);
            }
        }
    }
    for (value of notAvailable) {
        switch (value) {
            case "foeGrasp":
                document.querySelector('.main-container_foieGras').removeEventListener('mouseover', mouseoverFoieGras);
                document.querySelector('.main-container_foieGras').removeEventListener('mouseout', mouseoutFoieGras);
                document.querySelector('.main-container_foieGras').removeEventListener('click', clickOnFoieGras);
                document.querySelector('.main-container_foieGras').classList.add('notAvailableMain');
                document.querySelector('.drop-shadow_foieGras').classList.remove('drop-shadow');
                document.querySelector('.drop-shadow_foieGras').classList.add('notAvailable');
                document.querySelector('.buy-string_foieGras').classList.add('notAvailableText');
                document.querySelector('.buy-string_foieGras').textContent = 'Печалька, с фуа-гра закончился.';
                document.querySelector('.weight-foieGras_color').style.background = "#B3B3B3";
                console.log(`${value} недоступно`);
                break;
            case "fish":
                document.querySelector('.main-container_fish').removeEventListener('mouseover', mouseoverFish);
                document.querySelector('.main-container_fish').removeEventListener('mouseout', mouseoutFish);
                document.querySelector('.main-container_fish').removeEventListener('click', clickOnFish);
                document.querySelector('.main-container_fish').classList.add('notAvailableMain');
                document.querySelector('.drop-shadow_fish').classList.remove('drop-shadow');
                document.querySelector('.drop-shadow_fish').classList.add('notAvailable');
                document.querySelector('.buy-string_fish').classList.add('notAvailableText');
                document.querySelector('.buy-string_fish').textContent = 'Печалька, с рыбой закончился.';
                document.querySelector('.weight-fish_color').style.background = "#B3B3B3";
                console.log(`${value} недоступно`);
                break;
            case "chicken":
                document.querySelector('.main-container_chicken').removeEventListener('mouseover', mouseoverChicken);
                document.querySelector('.main-container_chicken').removeEventListener('mouseout', mouseoutChicken);
                document.querySelector('.main-container_chicken').removeEventListener('click', clickOnChicken);
                document.querySelector('.main-container_chicken').classList.add('notAvailableMain');
                document.querySelector('.drop-shadow_chicken').classList.remove('drop-shadow');
                document.querySelector('.drop-shadow_chicken').classList.add('notAvailable');
                document.querySelector('.buy-string_chicken').classList.add('notAvailableText');
                document.querySelector('.buy-string_chicken').textContent = 'Печалька, с курой закончился.';
                document.querySelector('.weight-chicken_color').style.background = "#B3B3B3";
                console.log(`${value} недоступно`);
        }
    }
    
};

//for foie-gras

let isActiveFoieGras = false;
foieGras.addEventListener('mouseover', mouseoverFoieGras);
function mouseoverFoieGras() {
    document.querySelector('.weight-foieGras_color').style.background = "#49aada";
    console.log(isActiveFoieGras);
    document.querySelector('.drop-shadow_foieGras').classList.remove('drop-shadow');
};

foieGras.addEventListener('mouseout', mouseoutFoieGras);
function mouseoutFoieGras() {
    document.querySelector('.weight-foieGras_color').style.background = "#1698D9";
    document.querySelector('.drop-shadow_foieGras').classList.add('drop-shadow');
};
document.querySelector('.link-foieGras').addEventListener('click', clickOnFoieGras);
foieGras.addEventListener('click',clickOnFoieGras);
function clickOnFoieGras() {
    if (!isActiveFoieGras) {
        document.querySelector('.drop-shadow_foieGras').classList.add('clickedFoieGras');
        document.querySelector('.weight-foieGras_color').classList.add('foieGras-color_click');
        document.querySelector('.buy-string_foieGras').style.display = "none";
        document.querySelector('.buy-string_foieGrasHidden').style.display = "block";

        document.querySelector('.drop-shadow_foieGras').onmouseleave = () => {
            if (!isActiveFoieGras) {
                document.querySelector('.text-container_baseStringFoieGras').style.display = "block";
                document.querySelector('.text-container_hoverStringFoieGras').style.display = "none";
            } else {
                document.querySelector('.text-container_baseStringFoieGras').style.display = "none";
                document.querySelector('.text-container_hoverStringFoieGras').style.display = "block";
            }
        }
    } else {
        document.querySelector('.drop-shadow_foieGras').classList.remove('clickedFoieGras');
        document.querySelector('.weight-foieGras_color').classList.remove('foieGras-color_click');

        document.querySelector('.buy-string_foieGras').style.display = "block";
        document.querySelector('.buy-string_foieGrasHidden').style.display = "none";

    }
    isActiveFoieGras = !isActiveFoieGras
};


//for fish

let isActiveFish = false;

fish.addEventListener('mouseover', mouseoverFish);
function mouseoverFish () {
    document.querySelector('.weight-fish_color').style.background = "#49aada";
    console.log(isActiveFish)
    document.querySelector('.drop-shadow_fish').classList.remove('drop-shadow');
};

fish.addEventListener('mouseout', mouseoutFish);
function mouseoutFish () {
    document.querySelector('.weight-fish_color').style.background = "#1698D9";
    document.querySelector('.drop-shadow_fish').classList.add('drop-shadow');
};
document.querySelector('.link-fish').addEventListener('click', clickOnFish);
fish.addEventListener('click',clickOnFish);
function clickOnFish() {
    if (!isActiveFish) {
        document.querySelector('.drop-shadow_fish').classList.add('clickedFish');
        document.querySelector('.weight-fish_color').classList.add('fish-color_click');
        document.querySelector('.buy-string_fish').style.display = "none";
        document.querySelector('.buy-string_fishHidden').style.display = "block";

        document.querySelector('.drop-shadow_fish').onmouseleave = () => {
            if (!isActiveFish) {
                document.querySelector('.text-container_baseStringFish').style.display = "block";
                document.querySelector('.text-container_hoverStringFish').style.display = "none";
            } else {
                document.querySelector('.text-container_baseStringFish').style.display = "none";
                document.querySelector('.text-container_hoverStringFish').style.display = "block";
            }
        }
    } else {
        document.querySelector('.drop-shadow_fish').classList.remove('clickedFish');
        document.querySelector('.weight-fish_color').classList.remove('fish-color_click');

        document.querySelector('.buy-string_fish').style.display = "block";
        document.querySelector('.buy-string_fishHidden').style.display = "none";

    }
    isActiveFish = !isActiveFish
};


//for chicken

let isActiveChicken = false;

chicken.addEventListener('mouseover', mouseoverChicken);
function mouseoverChicken () {
    document.querySelector('.weight-chicken_color').style.background = "#49aada";
    console.log(isActiveChicken)
    document.querySelector('.drop-shadow_chicken').classList.remove('drop-shadow');
};

chicken.addEventListener('mouseout', mouseoutChicken);
function mouseoutChicken () {
    document.querySelector('.weight-chicken_color').style.background = "#1698D9";
    document.querySelector('.drop-shadow_chicken').classList.add('drop-shadow');
};
document.querySelector('.link-chicken').addEventListener('click', clickOnChicken);
chicken.addEventListener('click',clickOnChicken);
function clickOnChicken() {
    if (!isActiveChicken) {
        document.querySelector('.drop-shadow_chicken').classList.add('clickedChicken');
        document.querySelector('.weight-chicken_color').classList.add('chicken-color_click');
        document.querySelector('.buy-string_chicken').style.display = "none";
        document.querySelector('.buy-string_chickenHidden').style.display = "block";

        document.querySelector('.drop-shadow_chicken').onmouseleave = () => {
            if (!isActiveChicken) {
                document.querySelector('.text-container_baseStringChicken').style.display = "block";
                document.querySelector('.text-container_hoverStringChicken').style.display = "none";
            } else {
                document.querySelector('.text-container_baseStringChicken').style.display = "none";
                document.querySelector('.text-container_hoverStringChicken').style.display = "block";
            }
        }
    } else {
        document.querySelector('.drop-shadow_chicken').classList.remove('clickedChicken');
        document.querySelector('.weight-chicken_color').classList.remove('chicken-color_click');

        document.querySelector('.buy-string_chicken').style.display = "block";
        document.querySelector('.buy-string_chickenHidden').style.display = "none";

    }
    isActiveChicken = !isActiveChicken
};