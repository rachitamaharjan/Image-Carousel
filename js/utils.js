var imgContainer = document.getElementsByClassName('carousel-container')
var imgWrapper = document.getElementsByClassName('carousel-image-wrapper')
var imgVar = document.getElementsByTagName('img')
var indexNext = 0
var indexPrev = imgVar.length

imgWrapper[0].style.marginLeft = '0px'

function changeIndex(val){
    console.log('val',val)
    if (val == 'next'){
        ++indexNext
        if (indexNext > imgVar.length){
            indexNext = 1
        }
        console.log('indexNext',indexNext)
        return indexNext
    }
    else if(val == 'prev'){
        indexPrev--
        console.log('indexPrev',indexPrev)
        return indexPrev
    }
    // return 0
}

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



nextSlide.onclick = function() {
    // imgWrapper[0].width = imgVar[0].width*imgVar.length
    var index = changeIndex('next')
    console.log('index',index)
    increment = (imgVar[index % imgVar.length].width) * (index - 1)
    console.log('increment',increment)
    console.log('index % imgVar.length',index % imgVar.length)

    if (index > index % imgVar.length){
        imgWrapper[0].style.marginLeft = '0px'
    }
    setInterval(function() {
        if (increment < ((imgVar[index % imgVar.length].width) * (index % imgVar.length))){
            increment += 25;
            imgWrapper[0].style.marginLeft = '-' + increment + 'px'
            // console.log('position',imgWrapper[0].style.marginLeft)
        }
    }, 25);
}

previousSlide.onclick = function() {

    
    console.log('o',imgWrapper[0].style.marginLeft)
    console.log('next',document.getElementById('next').onclick)
    increment = 0
    console.log('imgvar width',imgVar[0].width)
    console.log('changeindex',changeIndex('prev'))
    var index = changeIndex('prev')
    // if (imgWrapper[0].style.marginLeft == '0px'){
    //     imgWrapper[0].style.marginLeft = '-' + (imgVar[index].width * imgVar.length)+'px'
    //     console.log('imgwrapper1',imgWrapper[0].style.marginLeft)
    //     console.log('1',imgVar[index].width * imgVar.length)
    //     console.log('2',imgVar.length)
    // }
    setInterval(function() {
        if (increment<imgVar[index].width){
            increment = increment + 25;
            imgWrapper[0].style.marginLeft =  increment + 'px'
            // console.log(imgWrapper[0].style.marginLeft)
        }
    }, 25);
}


