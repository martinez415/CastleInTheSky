"use strict";

$(document).ready(() => {
    $("#jdom a").click(evt => {
        evt.preventDefault();
        const link=evt.currentTarget;

        $(link).prev().toggleClass("hide");
        if($(link).prev().attr("class")!="hide") {
            $(link).text("Show less");
        } else {
            $(link).text("Show more");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let imgFiles=["./Images/cits_1.jpg", "./Images/cits_2.png",
                  "./Images/cits_3.jpg", "./Images/cits_4.png",
                  "./Images/cits_5.jpg", "./Images/cits_6.jpg",
                  "./Images/cits_7.jpg", "./Images/cits_8.jpg",
                  "./Images/cits_9.jpg"];
    let imgIndex=0;
    let imgContainer=document.getElementById("imgContainer");
    let imgElements=[];
    
    for (let i=0; i<imgFiles.length; i++) {
        let imgElement=document.createElement("img");
        imgElement.src=imgFiles[i];
        imgContainer.appendChild(imgElement);
        imgElements.push(imgElement);
    }
    const displayNextImage = () => {
        let currentImg=imgElements[imgIndex];
        currentImg.classList.remove("visible");
        imgIndex=(imgIndex+1) % imgFiles.length;
        let nextImg = imgElements[imgIndex];
        nextImg.classList.add("visible");
    }

    imgElements[0].classList.add("visible");
    setInterval(displayNextImage, 5000);
});
