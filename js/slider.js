// previousSlide.onclick = function() {
//     var index = changeIndex('prev')
//     console.log('next',index % imgVar.length)
//     increment = (imgVar[index % imgVar.length].width) * (index)
//     console.log('imgvarwidth',imgVar[0].width)
//     console.log('changeindex',changeIndex('prev'))
//     setInterval(function() {
//         if ((increment<imgVar[index % imgVar.length].width)){
//             increment = increment + 10;
//             imgWrapper[0].style.marginLeft =  increment + 'px'
//             console.log(imgWrapper[0].style.marginLeft)
//         }
//     }, 25);
// }

previousSlide.onclick = function() {
    console.log('next',document.getElementById('next').onclick)
    increment = 0
    console.log('imgvar width',imgVar[0].width)
    console.log('changeindex',changeIndex('prev'))
    var index = changeIndex('prev')
    setInterval(function() {
        if (increment<imgVar[index].width){
            increment = increment + 25;
            imgWrapper[0].style.marginLeft =  increment + 'px'
            console.log(imgWrapper[0].style.marginLeft)
        }
    }, 25);
}

nextSlide.onclick = function() {
    imgWrapper[0].width = imgVar[0].width*imgVar.length
    var index = changeIndex('next')
    console.log('index',index)
    increment = (imgVar[index % imgVar.length].width) * (index - 1)
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