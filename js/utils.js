var imgContainer = document.getElementsByClassName('carousel-container')
var imgWrapper = document.getElementsByClassName('carousel-image-wrapper')
var imgVar = document.getElementsByTagName('img')
var indexNext = 0
var indexPrev = imgVar.length

imgWrapper[0].style.marginLeft = '0px'

console.log('imgg',imgVar[0].src)
var imgStart = document.createElement("img");
var imgEnd = document.createElement("img");
imgStart.id = 'imgStart'
imgEnd.id = 'imgEnd'
imgStart.src = imgVar[0].src
imgEnd.src = imgVar[3].src
imgWrapper[0].appendChild(imgStart)
imgWrapper[0].appendChild(imgEnd)
imgVar[0].before(imgEnd)


// previous and nextSlide
var previousSlide = document.createElement('button');
previousSlide.id = "previous";
previousSlide.innerHTML = '&#171'
var nextSlide = document.createElement('button');
nextSlide.id = "next";
nextSlide.innerHTML = '&#187'
imgContainer[0].appendChild(previousSlide);
imgContainer[0].appendChild(nextSlide);

// indicators
var indicatorContainer = document.createElement('div');
indicatorContainer.className = 'indicator-container'
imgContainer[0].appendChild(indicatorContainer);
for(i=0; i<imgVar.length; i++){
    var indicator = document.createElement('button');
    indicator.className = "indicator";
    indicatorContainer.appendChild(indicator);
}



var increment = 1
imgWrapper[0].style.transform = 'translateX( ' + (-imgVar[0].width*increment)+'px)' 

nextSlide.onclick = function() {
    imgWrapper[0].style.transition = 'transform 0.4s ease-in-out' 
    increment++
    imgWrapper[0].style.transform = 'translateX( ' + (-imgVar[0].width*increment)+'px)' 
}


// imgWrapper[0].style.transform = 'translateX( ' + (-imgVar[0].width*increment)+'px)' 

previousSlide.onclick = function() {
    
    imgWrapper[0].style.transition = 'transform 0.4s ease-in-out' 
    increment--
    imgWrapper[0].style.transform = 'translateX( ' + (-imgVar[0].width*increment)+'px)' 
}

imgWrapper[0].addEventListener('transitionend',stopTransition)

function stopTransition(){
    if(imgVar[increment].id == 'imgEnd'){
        imgWrapper[0].style.transition = 'none'
        increment = imgVar.length - 2
        imgWrapper[0].style.transform = 'translateX( ' + (-imgVar[0].width*increment)+'px)' 
    }
    if(imgVar[increment].id == 'imgStart'){
        imgWrapper[0].style.transition = 'none'
        increment = imgVar.length - increment
        imgWrapper[0].style.transform = 'translateX( ' + (-imgVar[0].width*increment)+'px)' 
    }
}