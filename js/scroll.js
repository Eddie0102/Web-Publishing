let currentImg = document.querySelector(".background_image");
let currentText = document.querySelector(".background_text");

const IMG_NUMBER = 4;

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImage(imgNumber){
    // 이미지 로드
    const image = new Image();
    image.src = `../images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    currentImg.appendChild(image);
    
    // 텍스트 이미지 로드
    const textImage = new Image();
    textImage.src = `../img/${imgNumber + 1}.png`;
    textImage.classList.add("bgText");
    currentText.appendChild(textImage);
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init(); 
