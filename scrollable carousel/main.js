const carousel = document.querySelector(".carousel"),/*referring to the class carousel*/
firstImg= carousel.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".wrapper i");

const showHideIcons=() =>{
    //makes the arrows hidden when they reach their limit
    //showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth- carousel.clientWidth;//gettig max scrollable width
    arrowIcons[0].style.display =carousel.scrollLeft == 0? "none": "block"; 
    arrowIcons[1].style.display =carousel.scrollLeft == scrollWidth? "none": "block"; 

}

let isDragStart = false, prevScrollLeft, prevPageX;




arrowIcons.forEach(icon => {
    icon.addEventListener("click",()=> {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        //if clicked the icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left"? - firstImgWidth:firstImgWidth;//
        //calling showHideIcons after 60ms
        setTimeout(()=> showHideIcons(), 60)
    })
})

const dragStart = (e)=> {
    // updating golable variables value on mouse down event
    isDragStart =true;
    //e.pageX will run on desktop devices and it runs once the screen is touched
    prevPageX =e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
/*seems like writing the coordinates of the mouse in the console*/
/*the images seem to respond with the mouse navigation at this stage */
/*if I am not mistaken, the dragging is performed only when the 'isDragStart is true' and both of them were
exectuted together, as isDrag start should be true */
const dragging= (e)=> {
    //scrolling images/carousel to left according to the mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    //the line below will give the x coordinates of the mouse pointer or touch
    let positionDiff= (e.pageX || e.touches[0].pageX) - prevPageX
    carousel.scrollLeft = prevScrollLeft -positionDiff;
    showHideIcons(); //makes the arrows hide when dragged to the very end
}

const dragStop=() =>{
    isDragStart = false;
    carousel.classList.remove("dragging"); // change the status of dragging and stopping 
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);//stoping it from sliding whenever the mouse is leavig carousel
carousel.addEventListener("touchend", dragStop);//anything with a touch is used to be





