//Values to generate a random hex value
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    //Start each hex value with a hash
    let hexColor = "#";
    //Loop through i 6 times to generate a hash that is 6 characters in length
    for(let i = 0; i < 6; i++){
        //Places the hexColor variable in front of the hex constant and adds the hex constant to the hexColor string
        hexColor += hex[getRandomNumber()]
    }
    //Manipulate the dom and give the color class a text value of the hexColor variable which is a string
    color.textContent = hexColor;
    //Style the background color of the body to be the hexColor value
    document.body.style.backgroundColor = hexColor;
})

const getRandomNumber = () => {return Math.floor(Math.random() * hex.length)};