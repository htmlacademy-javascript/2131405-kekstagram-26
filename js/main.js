function getRandomValue (minValue,maxValue) {
  if (minValue > 0 || maxValue > 0) {
    return Math.floor(Math.random () * (maxValue - minValue) + minValue);
  }
  if (minValue > maxValue) {
    return Math.abs( Math.floor(Math.random () * (maxValue - minValue) +minValue ) );
  }
}

getRandomValue(0,10);

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  else {
    return false;
  }
}

checkStringLength('Я изучаю JS', 20);

let object = {
  id: 1,
  url: 'photos/1.jpg',
  description: 'something',
  likes: 15,
  comments: [{id: 135, avatar: 'img/avatar-6.svg', message: 'В целом всё неплохо. Но не всё.', name: 'Артём'}, {id: 135, avatar: 'img/avatar-6.svg', message: 'В целом всё неплохо. Но не всё.', name: 'Артём',}]
};

let descriptionVariations = ['На море.', 'На природе', 'Утро.', 'Сегодня хорошая погода.', 'Чувствую себя хорошо.'];

let commentNames = ['Александр', 'Борис', 'Глеб', 'Игорь'];

function createPhotosDescriptions () {
  let descriptions = [];
  for (let i = 1; i <= 25; i++) {
    let description = {};
    description.id = i;
    description.url = `photos/${i}.jpg`;
    description.likes = getRandomValue(15,200);
    description.description = descriptionVariations[getRandomValue(0,4)];
    description.comments = [];
    for (let j = 1; j <= getRandomValue(1,10); j++) {
      let comment = {};
      comment.id = `${i}${j}`;
      comment.avatar = `img/avatar-${getRandomValue(1,6)}.svg`;
      if (j%2 === 0) {
        comment.message = 'Всё отлично!';
      }
      else {
        comment.message = 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
      }
      comment.name = commentNames[getRandomValue(0,3)];
      description.comments.push(comment);
    }
    descriptions.push(description);
  }
  return descriptions;
}

console.log(createPhotosDescriptions());
