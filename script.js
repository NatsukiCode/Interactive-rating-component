var selectedRating = null;

 function setRating(value) {
  var circles = document.getElementsByClassName('rating');
  for (var i = 0; i < circles.length; i++) {
    circles[i].classList.remove('selected');
  }

  var selectedCircle = document.querySelector('.rating:nth-child(' + value + ')');
  selectedCircle.classList.add('selected');

  selectedRating = value;
}
   
 function submitRating() {
    if (selectedRating !== null) {
        const message = "You selected " + selectedRating + " out of 5";
        document.getElementById("result").textContent = message;
    }

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
    console.log(selectedRating)
};
