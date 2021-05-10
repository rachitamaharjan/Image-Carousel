var imgContainer = document.getElementsByClassName('carousel-container')
var imgWrapper = document.getElementsByClassName('carousel-image-wrapper')
var imgVar = document.getElementsByTagName('img')
var 

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
console.log('jj',imgWrapper[0]);
console.log('next',nextSlide)
previousSlide.onclick = function() {
    console.log('next',document.getElementById('next').onclick)
    increment = 0
    console.log('kk',imgVar[0].width)

    setInterval(function() {
        
        
        if (increment<imgVar[0].width){
            increment = increment + 10;
            imgWrapper[0].style.marginLeft =  increment+'px'
            console.log(imgWrapper[0].style.marginLeft)
        }
            
            // console.log('jj',increment);
        // }
    }, 25);
}
