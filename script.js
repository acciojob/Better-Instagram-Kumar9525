//your code here
// Store references to the draggable elements
const images = document.querySelectorAll('.image');

let draggedItem = null;

images.forEach(image => {
  image.addEventListener('dragstart', function() {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = 'none';
    }, 0);
  });

  image.addEventListener('dragend', function() {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  image.addEventListener('dragover', function(e) {
    e.preventDefault();
  });

  image.addEventListener('dragenter', function(e) {
    e.preventDefault();
    this.classList.add('selected');
  });

  image.addEventListener('dragleave', function() {
    this.classList.remove('selected');
  });

  image.addEventListener('drop', function() {
    if (draggedItem !== null && draggedItem !== this) {
      const tempBackground = this.style.backgroundImage;
      this.style.backgroundImage = draggedItem.style.backgroundImage;
      draggedItem.style.backgroundImage = tempBackground;
    }
    this.classList.remove('selected');
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");

  let dragged;

  images.forEach((image) => {
    image.addEventListener("dragstart", dragStart);
    image.addEventListener("dragover", dragOver);
    image.addEventListener("drop", drop);
  });

  function dragStart() {
    dragged = this;
    setTimeout(() => {
      this.style.display = "none";
    }, 0);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop() {
    if (dragged !== this) {
      const temp = this.innerHTML;
      this.innerHTML = dragged.innerHTML;
      dragged.innerHTML = temp;
    }
  }
});
