// /*___________________ step-1_______________________*/ 
// let imgIndex= 0;
// setInterval(() => {
//     console.log(imgIndex)
//     imgIndex ++;
// }, 2000);

// /*___________________ step-2_______________________*/ 
// const imagesAll=[
//     'images/pic-1.jpg',
//     'images/pic-2.jpg',
//     'images/pic-3.jpg',
//     'images/pic-4.jpg',
//     'images/pic-5.jpg',
//     'images/pic-6.jpg',
//     'images/pic-7.jpg',
//     'images/pic-8.jpg',
//     'images/pic-9.jpg',
// ]
// let imgIndex= 0;
// setInterval(() => {
//     const imgUrl= imagesAll[imgIndex]
//     console.log(imgIndex, imgUrl)
//     imgIndex ++;
// }, 2000);

// /*___________________ step-3 to stop undefined applay if condition _________________*/ 
// const imagesAll=[
//     'images/pic-1.jpg',
//     'images/pic-2.jpg',
//     'images/pic-3.jpg',
//     'images/pic-4.jpg',
//     'images/pic-5.jpg',
//     'images/pic-6.jpg',
//     'images/pic-7.jpg',
//     'images/pic-8.jpg',
//     'images/pic-9.jpg',
// ]
// let imgIndex= 0;
// setInterval(() => {
//     if(imgIndex === 8){
//         imgIndex = 0;
//     }
//     const imgUrl= imagesAll[imgIndex]
//     console.log(imgIndex, imgUrl)
//     imgIndex ++;
// }, 2000);


/*___________________ step-4 Finally set to DOM  _________________*/ 
const imagesAll=[
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
    'images/pic-10.jpg',
    'images/pic-11.jpg',
    'images/pic-12.jpg',
    'images/pic-13.jpg',
    'images/pic-14.jpg',
    'images/pic-15.jpg',
    'images/pic-16.jpg',
    'images/pic-17.jpg',
    'images/pic-18.jpg',
    'images/pic-19.jpg',
]
let imgIndex= 0;
// for image Set to DOM
const imgSlider= document.getElementById('img-slider')

setInterval(() => {
    if(imgIndex === imagesAll.length){
        imgIndex = 0;
    }
    
    const imgUrl= imagesAll[imgIndex]
    console.log(imgIndex, imgUrl)
    // to images set DoM
    imgSlider.setAttribute('src', imgUrl)

    imgIndex ++;
    
}, 2000);