var imgContainer = document.getElementsByClassName('carousel-container')
var imgVar = document.getElementsByTagName('img')
console.log('imgVar',imgVar)
console.log('imgVar',imgContainer)

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
    console.log('ok',i)
    var indicator = document.createElement('button');
    indicator.className = "indicator";
    indicatorContainer.appendChild(indicator);
}