x = new Array("../images/Flea/img1.jpg",
"../images/Flea/img2.jpg",
"../images/Flea/img3.jpg",
"../images/Flea/img4.jpg",
"../images/Flea/img5.jpg");
i=0;

function next(){
    i++;
    if(i==x.length) {
        i=0;
    }
    document.getElementById("idGallery").src=x[i];
}

function back(){
    if(i==0) {
        i=x.length;
    }
    i--;
    document.getElementById("idGallery").src=x[i];
}