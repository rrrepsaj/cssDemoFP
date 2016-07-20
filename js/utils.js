let test = function(){

  //Card Flip
  let cardDiv = document.querySelector('.card-container').children[0];
  let flipButton = document.querySelector('#flip-button button');
  let onFlipButtonClick = function(e){
    if (cardDiv.className === ""){
      cardDiv.className = e.target.className;
    } else {
      cardDiv.className = "";
    }
  };

  flipButton.addEventListener('click', onFlipButtonClick, false);


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

};
window.addEventListener("DOMContentLoaded", test, false);
