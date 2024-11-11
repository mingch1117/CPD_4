document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainer = document.getElementById("slideshow-gallery");

    // Array of all the selected image in the gallery folder that I want to display
    const images = [
        "2334968.jpg", "18820257.jpg", "18820279.jpg", "21142901.jpg", "21142917.jpg", "21147171.jpg"
    ];

    let slideIndex = 0;
    const totalSlides = images.length;

    // a wrapper div that contain the image and buttons
    const wrapper = document.createElement("div");
    wrapper.classList.add("slideshow-wrapper");
    slideshowContainer.appendChild(wrapper);

    //image element and append it to wrapper
    const img = document.createElement("img");
    img.classList.add("slide-image");
    wrapper.appendChild(img);


     //Function to display the current slide
    function showSlide(index) {
        img.src = `gallery/${images[index]}`; // the path to images in the gallery folder
        img.alt = `Slide ${index + 1}`;
    }

    //give the initial display of the first slide
    showSlide(slideIndex);

    //function for next slide and previous slide
    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    //Buttons for slide navigation
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next-button");
    nextButton.addEventListener("click", nextSlide);

    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.classList.add("prev-button");
    prevButton.addEventListener("click", prevSlide);

    //Append buttons to slideshow container
    slideshowContainer.appendChild(prevButton);
    slideshowContainer.appendChild(nextButton);

    //If users are not clicking the buttons, auto-play slideshow every 5 seconds
    setInterval(nextSlide, 5000);
});