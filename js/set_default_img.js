const images = document.querySelectorAll('img');

document.querySelectorAll('img').forEach(img =>{
    console.log("runs")
    img.onerror = function(){
        // if default image is missing, no infinit loop
        this.onerror = null; 
        this.src = '../images/default_image.jpg';
        this.alt = "Default image";
    }

})