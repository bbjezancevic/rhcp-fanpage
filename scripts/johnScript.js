x = new Array("../images/John/img1.jpg",
"../images/John/img2.jpg",
"../images/John/img3.jpg",
"../images/John/img4.jpg",
"../images/John/img5.jpg");
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