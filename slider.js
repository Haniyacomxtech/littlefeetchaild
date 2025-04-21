document.addEventListener("DOMContentLoaded", function () {
  // Create the slider container
  var sliderContainer = document.createElement("div");
  sliderContainer.id = "custom-slider-wrapper";
  sliderContainer.innerHTML = `
    <div style="width: 100%; overflow: hidden; position: relative; font-family: Arial, sans-serif; background: #f0f0f0; margin: 0 auto;">
      <button id="slider-prev" style="position: absolute; top: 50%; transform: translateY(-50%); background-color: rgba(0,0,0,0.5); color: white; border: none; padding: 10px; cursor: pointer; z-index: 1; border-radius: 50%; left: 10px;">❮</button>

      <div id="slider" style="display: flex; transition: transform 0.5s ease-in-out;">
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 158.png" alt="1" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 159.png" alt="2" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 160.png" alt="3" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 161.png" alt="4" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 158.png" alt="5" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 159.png" alt="6" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 160.png" alt="7" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
        <div style="min-width: 25%; padding: 5px;"><img src="./assets/images/Group 161.png" alt="8" style="width: 100%; height: 100%; display: block; border-radius: 10px;"></div>
      </div>

      <button id="slider-next" style="position: absolute; top: 50%; transform: translateY(-50%); background-color: rgba(0,0,0,0.5); color: white; border: none; padding: 10px; cursor: pointer; z-index: 1; border-radius: 50%; right: 10px;">❯</button>
    </div>
  `;

  // Insert the slider immediately after a specific Angular container
  const containerDiv = document.querySelector('div[_ngcontent-ng-c1782458218].container');
  if (containerDiv) {
    containerDiv.insertAdjacentElement('afterend', sliderContainer);
  } else {
    console.warn("Target container not found!");
  }

  // JS logic for sliding
  const slider = sliderContainer.querySelector('#slider');
  const slideCount = slider.children.length;
  const visibleSlides = 4;
  const slidesToScroll = 2;
  let currentIndex = 0;

  function moveSlide(direction) {
    const maxIndex = Math.ceil((slideCount - visibleSlides) / slidesToScroll);
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const slideWidth = slider.offsetWidth / visibleSlides;
    slider.style.transform = `translateX(-${currentIndex * slideWidth * slidesToScroll}px)`;
  }

  sliderContainer.querySelector("#slider-prev").addEventListener("click", () => moveSlide(-1));
  sliderContainer.querySelector("#slider-next").addEventListener("click", () => moveSlide(1));
});
