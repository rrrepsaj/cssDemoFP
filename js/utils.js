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
  let showButtons = document.querySelectorAll('#show-buttons button');
  let onShowButtonClick = function(e){
    cubeDiv.className = e.target.className;
  };

  for (let i = 0; i < showButtons.length; i++){
    showButtons[i].addEventListener('click', onShowButtonClick, false);
  }

};
window.addEventListener("DOMContentLoaded", test, false);
