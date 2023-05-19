x = new Array("../images/Chad/img1.jpg",
"../images/Chad/img2.jpg",
"../images/Chad/img3.jpg",
"../images/Chad/img4.jpg",
"../images/Chad/img5.jpg");
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