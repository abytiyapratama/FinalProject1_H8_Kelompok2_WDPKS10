let popup = document.getElementById("popup");

function imgSlider(anything){
  document.querySelector('.bengkel').src = anything;
}

function openPopup(){
  popup.classList.add("open-popup")
}
function closePopup(){
  popup.classList.remove("open-popup")
}