var currentIndex=1;
displaySlides(currentIndex);
function setSlides(num){
    displaySlides(currentIndex +=num);
}
function displaySlides(num){
    var x;
    var slide=document.getElementsByClassName("ImgSlideShow_fade");
    if(num>slide.length){
        currentIndex =1
    }
    if(num<1){
        currentIndex = slide.length
    }
    for( x=0 ;x<slide.length;x++){
        slide[x].style.display="none"
    }
    slide[currentIndex-1].style.display ="block";
    
}