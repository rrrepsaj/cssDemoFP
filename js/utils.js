let test = function(){

  // Page relocation

  $(".top").click(() => {
    $("html, body").animate({
      scrollTop: $("html").offset().top
    }, 1000);
  });

  $("#card-btn").click(() => {
    $("html, body").animate({
      scrollTop: $("#card-section").offset().top
    }, 1500);
  });

  $("#cube-btn").click(() => {
    $("html, body").animate({
      scrollTop: $("#cube-section").offset().top
    }, 1500);
  });

  $("#rectangular-btn").click(() => {
    $("html, body").animate({
      scrollTop: $("#rectangular-section").offset().top
    }, 1500);
  });

  $("#pyramid-btn").click(() => {
    $("html, body").animate({
      scrollTop: $("#pyramid-section").offset().top
    }, 1500);
  });

  $("#carousel-btn").click(() => {
    $("html, body").animate({
      scrollTop: $("#carousel-section").offset().top
    }, 1500);
  });



  //Card Flip
  let cardDiv = document.querySelector('.card-container').children[0];
  let flipButton = document.querySelector('#flip-button .flipped');
  let freeSpinButton = document.querySelector('#flip-button .card-free-spin');
  let onFlipButtonClick = function(e){
    if (cardDiv.className === ""){
      cardDiv.className = e.target.className;
    } else {
      cardDiv.className = "";
    }
  };

  let onFreeSpinButton = function(e){
    cardDiv.className = "card-free-spin";
  };

  let cardFront = document.querySelector('.card-top');
  let cardBack = document.querySelector('.card-back');
  let cardMiddleF = document.querySelector('.middle-f');
  let cardMiddleB = document.querySelector('.middle-b');

  let cardUnpack = function(e){
    cardFront.className = "card-top-unpack";
    cardBack.className = "card-back-unpack";
    cardMiddleF.className = "card-middle-f-unpack";
    cardMiddleB.className = "card-middle-b-unpack";
  };

  let cardRepack = function(e){
    cardFront.className = "card-top";
    cardBack.className = "card-back";
    cardMiddleF.className = "middle-f";
    cardMiddleB.className = "middle-b";
  };

  freeSpinButton.addEventListener('click', onFreeSpinButton, false);
  flipButton.addEventListener('click', onFlipButtonClick, false);
  cardDiv.addEventListener('mouseenter', cardUnpack, false);
  cardDiv.addEventListener('mouseleave', cardRepack, false);


  //3d cube
  let cubeDiv = document.querySelector('.cube-container').children[0];
  let cubeShowButtons = document.querySelectorAll('#cube-show-buttons button');
  let onCubeShowButtonClick = function(e){
    cubeDiv.className = e.target.className;
  };

  for (let i = 0; i < cubeShowButtons.length; i++){
    cubeShowButtons[i].addEventListener('click', onCubeShowButtonClick, false);
  }

  let cubeFront = document.querySelector('.cube-front');
  let cubeBack = document.querySelector('.cube-back');
  let cubeRight = document.querySelector('.cube-right');
  let cubeLeft = document.querySelector('.cube-left');
  let cubeTop = document.querySelector('.cube-top');
  let cubeBottom = document.querySelector('.cube-bottom');

  let cubeUnpack = function(e){
    cubeFront.className = "cube-front-unpack";
    cubeBack.className = "cube-back-unpack";
    cubeRight.className = "cube-right-unpack";
    cubeLeft.className =  "cube-left-unpack";
    cubeTop.className =  "cube-top-unpack";
    cubeBottom.className = "cube-bottom-unpack";
  };

  let cubeRepack = function(e){
    cubeFront.className = "cube-front";
    cubeBack.className = "cube-back";
    cubeRight.className = "cube-right";
    cubeLeft.className =  "cube-left";
    cubeTop.className =  "cube-top";
    cubeBottom.className = "cube-bottom";
  };

  cubeDiv.addEventListener('mouseenter', cubeUnpack, false);
  cubeDiv.addEventListener('mouseleave', cubeRepack, false);

  let spaceCubeDiv = document.querySelector('.cube-space-container').children[0];

  let spaceCubeFront = document.querySelector('.space-cube-front');
  let spaceCubeBack = document.querySelector('.space-cube-back');
  let spaceCubeRight = document.querySelector('.space-cube-right');
  let spaceCubeLeft = document.querySelector('.space-cube-left');
  let spaceCubeTop = document.querySelector('.space-cube-top');
  let spaceCubeBottom = document.querySelector('.space-cube-bottom');

  let spaceCubeUnpack = function(e){
    spaceCubeFront.className = "cube-front-unpack";
    spaceCubeBack.className = "cube-back-unpack";
    spaceCubeRight.className = "cube-right-unpack";
    spaceCubeLeft.className =  "cube-left-unpack";
    spaceCubeTop.className =  "cube-top-unpack";
    spaceCubeBottom.className = "cube-bottom-unpack";
  };

  let spaceCubeRepack = function(e){
    spaceCubeFront.className = "cube-front space-cube-front";
    spaceCubeBack.className = "cube-back space-cube-back";
    spaceCubeRight.className = "cube-right space-cube-right";
    spaceCubeLeft.className =  "cube-left space-cube-left";
    spaceCubeTop.className =  "cube-top space-cube-top";
    spaceCubeBottom.className = "cube-bottom space-cube-bottom";
  };

  spaceCubeDiv.addEventListener('mouseenter', spaceCubeUnpack, false);
  spaceCubeDiv.addEventListener('mouseleave', spaceCubeRepack, false);
  //rectangular prism
  let rectangularDiv = document.querySelector('.rectangular-container').children[0];
  let rectangularShowButtons = document.querySelectorAll('#rectangular-show-buttons button');
  let onRectangularShowButtonClick = function(e){
    rectangularDiv.className = e.target.className;
  };

  for (let i = 0; i < rectangularShowButtons.length; i++){
    rectangularShowButtons[i].addEventListener('click', onRectangularShowButtonClick, false);
  }

  let rectangularA = document.querySelector('.rectangular-a');
  let rectangularB = document.querySelector('.rectangular-b');
  let rectangularC = document.querySelector('.rectangular-c');
  let rectangularD = document.querySelector('.rectangular-d');
  let rectangularE = document.querySelector('.rectangular-e');
  let rectangularF = document.querySelector('.rectangular-f');

  let rectangularUnpack = function(e){
    rectangularA.className = "rectangular-a-unpack";
    rectangularB.className = "rectangular-b-unpack";
    rectangularC.className = "rectangular-c-unpack";
    rectangularD.className =  "rectangular-d-unpack";
    rectangularE.className =  "rectangular-e-unpack";
    rectangularF.className = "rectangular-f-unpack";
  };

  let rectangularRepack = function(e){
    rectangularA.className = "rectangular-a";
    rectangularB.className = "rectangular-b";
    rectangularC.className = "rectangular-c";
    rectangularD.className =  "rectangular-d";
    rectangularE.className =  "rectangular-e";
    rectangularF.className = "rectangular-f";
  };

  rectangularDiv.addEventListener('mouseenter', rectangularUnpack, false);
  rectangularDiv.addEventListener('mouseleave', rectangularRepack, false);


  //Carousel
  let carouselDiv = document.querySelector('.carousel-container').children[0];
  let carouselShowButtons = document.querySelectorAll('#carousel-show-buttons button');
  let onCarouselShowButtonClick = function(e){
    carouselDiv.className = e.target.className;
  };

  for (let i = 0; i < carouselShowButtons.length; i++){
    carouselShowButtons[i].addEventListener('click', onCarouselShowButtonClick, false);
  }

  let navigationLists = document.querySelectorAll('.lia');
  let navigationRotateButton = document.querySelector('.navigation-rotate');
  let onNavigationRotateButtonClick = function(e){
    for (let i = 0; i < navigationLists.length; i++){
      if (navigationLists[i].className === "lia list-item"){
        navigationLists[i].className = "lia list-item-rotated";
      } else {
        navigationLists[i].className = "lia list-item";
      }
    }
  }

  navigationRotateButton.addEventListener('click', onNavigationRotateButtonClick, false);


};
window.addEventListener("DOMContentLoaded", test, false);
