function decoupeImage(tentative) {
    var image = document.getElementById("imageDuPendu");

    switch(tentative) {
        case 1: 
            image.style.backgroundPosition = "22% top";
            break;
        case 2:
            image.style.backgroundPosition = "41% top";
            break;
        case 3:
            image.style.backgroundPosition = "60% top";
            break;
        case 4:
            image.style.backgroundPosition = "80% top";
            break;  
        case 5:
            image.style.backgroundPosition = "98% top";
            break;
        case 6:
            image.style.backgroundPosition = "left bottom";
            break;                                      
        default:
            image.style.backgroundPosition = "3% top";
    }
}