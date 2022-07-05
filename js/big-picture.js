export function closeTab (triggerElement, listenElement) {
  document.querySelector(`${triggerElement}`).addEventListener('click', function() {
    listenElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  })
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      listenElement.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  })
}

export function getToBigPicture(picture) {
  let bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');

  bigPicture.querySelector('img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  for (let i = 0; i < 2; i++) {
    let comment = document.querySelectorAll('.social__comment')[i];
    comment.innerHTML = (
      `<img
           class="social__picture"
           src= ${picture.comments[i].avatar}
           alt= ${picture.comments[i].name}
           width="35" height="35">
       <p class="social__text">${picture.comments[i].message}</p>`)
    //bigPicture.querySelector('.social__comments').appendChild(comment);
  }
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');

  closeTab('#picture-cancel',bigPicture);

}
