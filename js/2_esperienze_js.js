document.getElementById("btnPlusAdulti").addEventListener("click", function () {
  var adultiInput = document.getElementById("adulti");
  adultiInput.value = parseInt(adultiInput.value) + 1;
});

document
  .getElementById("btnMinusAdulti")
  .addEventListener("click", function () {
    var adultiInput = document.getElementById("adulti");
    if (parseInt(adultiInput.value) > 0) {
      adultiInput.value = parseInt(adultiInput.value) - 1;
    }
  });

document
  .getElementById("btnPlusPiccoli")
  .addEventListener("click", function () {
    var PiccoliInput = document.getElementById("Piccoli");
    PiccoliInput.value = parseInt(PiccoliInput.value) + 1;
  });

document
  .getElementById("btnMinusPiccoli")
  .addEventListener("click", function () {
    var PiccoliInput = document.getElementById("Piccoli");
    if (parseInt(PiccoliInput.value) > 0) {
      PiccoliInput.value = parseInt(PiccoliInput.value) - 1;
    }
  });

