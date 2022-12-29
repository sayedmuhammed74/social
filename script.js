let hearts = document.querySelectorAll('.fa-heart');
let commentsIcon = document.querySelectorAll('.commentsIcon');

hearts.forEach((e) => {
  e.onclick = function () {
    if (e.classList.contains('fa-regular')) {
      e.style.color = 'red';
      e.classList.remove('fa-regular');
      e.classList.add('fa-solid');
      console.log('regular');
    } else {
      e.style.color = 'black';
      e.classList.add('fa-regular');
      e.classList.remove('fa-solid');
      console.log('solid');
    }
  };
});

commentsIcon.forEach((e) => {
  e.addEventListener('click', () => {
    e.nextElementSibling.classList.toggle('show-comments');
    if (e.nextElementSibling.classList.contains('show-comments')) {
      e.textContent = 'hide comments';
      e.parentElement.style.height = '570px';
    } else {
      e.textContent = 'view all 277 comments';
      e.parentElement.style.height = '480px';
    }
  });
});
