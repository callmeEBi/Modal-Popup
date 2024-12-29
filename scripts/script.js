let $ = document;
let popup = $.querySelector(".p-absolute");
let closeButton = $.querySelector(".popup_button");
let modalAnchor = $.querySelector(".modal_anchor");
modalAnchor.addEventListener("click", function () {
  popup.style.display = "initial";
  $.body.style.backdropFilter = "blur(10px)";
});
$.body.addEventListener("keyup", function (e) {
  if ((e.key = "Escape")) {
    popupRemover();
  }
});
closeButton.addEventListener("click", popupRemover);
function popupRemover() {
  popup.style.display = "none";
  $.body.style.backdropFilter = "";
}
