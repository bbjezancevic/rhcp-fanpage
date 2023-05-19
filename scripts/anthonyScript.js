x = new Array("../images/Anthony/img1.jpg",
"../images/Anthony/img2.jpg",
"../images/Anthony/img3.jpg",
"../images/Anthony/img4.jpg",
"../images/Anthony/img5.jpg");
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