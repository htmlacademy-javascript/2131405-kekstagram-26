/* <template id="picture">
  <a href="#" className="picture">
    <img className="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p className="picture__info">
        <span className="picture__comments"></span>
        <span className="picture__likes"></span>
      </p>
  </a>
</template> */

import {createPhotosDescriptions} from './data.js';
import {getToBigPicture} from './big-picture.js';
let descriptions = createPhotosDescriptions();
let pictureTemplate = document.querySelector('#picture').content;
let pictureElement = pictureTemplate.querySelector('a');
let pictures = document.querySelector('.pictures');

export function createPhoto() {
  for (let i = 0; i < descriptions.length; i++) {
    let newPicture = pictureElement.cloneNode(true);
    newPicture.querySelector('img').src = descriptions[i].url;
    let pictureLikes = newPicture.querySelector('.picture__likes');
    pictureLikes.textContent = descriptions[i].likes;
    let pictureComments = newPicture.querySelector('.picture__comments');
    pictureComments.textContent = descriptions[i].comments.length;
    pictures.appendChild(newPicture);

    pictures.children[i+2].addEventListener('click', function() {
      getToBigPicture(descriptions[i]);
    })
  }

}
