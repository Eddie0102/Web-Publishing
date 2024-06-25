



let currentImg = document.querySelector(".background_image");
// // console.log(image);

// function changePic(imgNumber){
//     const image = new image();
//     image.src = `images/$[imgNumber + 1].jpg`;
//     image.classList.add("bgimage");
//     currentImg.appendChild(image);
// }

// function randomNum(){
//     let num = Math.floor(Math.random()*(5-1)+1);
//     return num;
//     console.log(num);
// }

const IMAGES = ['images/1.jpg','images/2.jpg','images/3.jpg','image/4.jpg']
const IMG_NUMBER = 4;

// const getRandom = ()=>{
//     return Math.floor(Math.random()*IMG_NUMBER)
// }
// console.log(getRandom());
// const paintImage = ( imgNumber)=>{
//     const backgroundImage = "url('" + IMAGES[imgNumber] + "')"
//     console.log(backgroundImage);
//     Body.style.backgroundImage = backgroundImage;
// }
function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

console.log(genRandom());
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber +1}.jpg`
    image.classList.add("bgImage");
    currentImg.appendChild(image);
    
}
    // const  BGTEXT = ['img/1.png','img/2.png','img/3.png','img.4.png']
    // const  BGTEXT_NUMBER = 4;

    // function paintText(imgNumber){
    //     const image = new Image();
    //     image.src = `img/${imgNumber+1}.png`
    //     image.classList.add("bgText");
    // currentImg.appendChild(BGTEXT);
    // }
//  switch(number
//     case 0:
     

//  }
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init(); 
