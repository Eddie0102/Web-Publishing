window.onload = function () {
    var elm = ".box";
    let btnValue = 0;
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            let rollScreen = $('.box');
            let wheelBtn = $('.circle');
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                        // if  (delta =  1){
                        //     btnValue++;
                        //     $('.circle').on('scroll', function(){
                        //         rollScree
                        //     })

                            // for( let i = 1 ; i > rollScreen.length; i++){
                            //     delta = btnValue;

                        // }                        
                      
            
                       
                        console.log(delta);
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        btnValue += delta;
                        console.log(delta);
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}

    
const article = document.querySelectorAll("article");
const naviBtn = document.querySelectorAll("li>button");
const normalColor = "white";
const selectedColor = "#ccc";


for (let i = 0; i < naviBtn.length; i++) {
    naviBtn[i].addEventListener("click", () => {
      for (let j = 0; j < naviBtn.length; j++) {
        naviBtn[j].style.backgroundColor = normalColor;
      }
      article[i].scrollIntoView({ behavior: "smooth" });
      naviBtn[i].style.backgroundColor = selectedColor;
    });
  }


  let none = document.querySelector('nav')

    window.addEventListener('scroll',function(){
        console.log(window.scrollY);
    if(window.scrollY > 3000){
        none.style.display = 'none';
    }else{
        none.style.display = 'block';
    }
    });
