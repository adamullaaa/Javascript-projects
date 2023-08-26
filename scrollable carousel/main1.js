const carousel = document.querySelector(".carousel");
let isDragStart= false, prevScrollLeft, prevPageX;
arrowIcon = document.querySelectorAll(".wrapper i");
firstImg= carousel.querySelectorAll("img") [0];


const dragging = (e) =>{
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX-prevPageX;
    carousel.scrollLeft= prevScrollLeft-positionDiff;
}
const dragStart =(e) => {
    isDragStart= true;
    prevPageX= e.pageX;
    prevScrollLeft= carousel.scrollLeft;
}
arrowIcon.forEach(icon=> {
    icon.addEventListener("click", ()=> {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left"? - firstImgWidth:firstImgWidth;
    });
});
const dragStop=() =>{
    isDragStart = false;
}
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);