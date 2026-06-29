 function changeImage() {

    const image = document.querySelector('#image');
    
    const url = prompt("Please enter your image url")
    const width = prompt("Please enter width of the image")
    const heigth = prompt("Please enter height of the image")
    const borderRadius = prompt("Please enter  the border radius of image")
    const paddingSize = prompt("please add padding size of the image")
    const backgroudColor = prompt("Please enter the backgroud color of image ")


    image.setAttribute('src',url);
    image.style.width = '300px';
    image.style.height = '200px';
    image.style.borderRadius = '2px solid  blue';
    image.style.padding = "15px";
    image.style.backgroundColor = '#f3640b';
   
 }
