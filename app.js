function randomRBG() {
    const r = Math.floor(Math.random() * 256);
    const g = 0;
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

// const h1 = document.querySelector("h1");
// function colorfunc(){
//   h1.style.color = randomRBG();  
// }

// setInterval(colodrfunc, 1000);

const letters = document.getElementsByClassName('letter');
const loopRGB = () => {
    for (let letter of letters) {
        letter.style.color = randomRBG();
    }
}
setInterval(loopRGB, 500);