let mainImage = document.getElementById("mainImage");
let smallImage = document.getElementsByClassName("image");
smallImage[0].onclick = ()=>{
    mainImage.src = smallImage[0].src;
}
smallImage[1].onclick = ()=>{
    mainImage.src = smallImage[1].src;
}
smallImage[2].onclick = ()=>{
    mainImage.src = smallImage[2].src;
}
smallImage[3].onclick = ()=>{
    mainImage.src = smallImage[3].src;
}
smallImage[4].onclick = ()=>{
    mainImage.src = smallImage[4].src;
}
