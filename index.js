let keyboard = document.getElementById("keyboard");
let keys = keyboard.querySelector(".kbp");
let keysClass = keys.classList;
let rect = keys.getBoundingClientRect(); // Calculate rect once outside the loop

let divsArr = [];

let charsST = "w e r t y u i o p a s d f g h j k l BKSP z x c v b n m ENTR";
let charsArr = charsST.split(" ");

let leftPosition = rect.right + 10; // Initial left position

for (var i = 0; i < charsArr.length; i++) {
    divsArr[i] = document.createElement("div");
    var keysHeader = document.createElement("h1");
    keysHeader.textContent = charsArr[i].toUpperCase();
    divsArr[i].appendChild(keysHeader);
    divsArr[i].classList = keysClass;

    if (i >= charsArr.indexOf("a")) {

      if (i >= charsArr.indexOf("BKSP")) {

        if (i == charsArr.indexOf("BKSP")) {
          leftPosition = 0;
        }

        divsArr[i].style.position = "absolute";
        divsArr[i].style.top = rect.bottom * 2 + "px";
        divsArr[i].style.left = leftPosition + "px";
        divsArr[i].style.marginLeft = "30px";
        leftPosition += divsArr[i].offsetWidth + 60;
      }

      else {

        if (i == charsArr.indexOf("a")) {
          leftPosition = 0;
        }
        divsArr[i].style.position = "absolute";
        divsArr[i].style.top = rect.bottom * 1.07 + "px";
        divsArr[i].style.left = leftPosition + "px";
        divsArr[i].style.marginLeft = "30px";
        leftPosition += divsArr[i].offsetWidth + 60;
      }
    }

    else {
      // Position each div to the right of the previous one
      divsArr[i].style.position = "absolute";
      divsArr[i].style.top = rect.top + "px";
      divsArr[i].style.left = leftPosition + "px";

      // Update the left position for the next div
      leftPosition += divsArr[i].offsetWidth + 60;
    }
    

    if (i == 0) {
        keys.insertAdjacentElement('afterend', divsArr[i]);
    } else if (i > 0) {
        divsArr[i - 1].insertAdjacentElement('afterend', divsArr[i]);
    }
}