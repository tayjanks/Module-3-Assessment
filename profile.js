const colorBtn = document.querySelector("#color");
function favColor (evt) {
  evt.preventDefault();
    alert("My favorite color is green!")
}

colorBtn.addEventListener ("click", favColor);

const placeBtn = document.querySelector("#place");
function favPlace (evt) {
    evt.preventDefault();
    alert("My favorite place is anywhere warm!")
}

placeBtn.addEventListener ("click", favPlace);

const ritualBtn = document.querySelector("#ritual");
function favRitual (evt) {
    evt.preventDefault();
    alert("My favorite ritual is making fancy hot cocoa in winter!")
}

ritualBtn.addEventListener ("click", favRitual);