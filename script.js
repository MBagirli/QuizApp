let info = [{
    img: 'img/math-computer-science-300x200.jpg',
    question: 'What is the most popular programming language in the world?',
    answer1: 'Python',
    answer2: 'JavaScript',
    answer3: 'C#'
  },
  {
    img: 'img/arnold-francisca-f77Bh3inUpE-unsplash.jpg',
    question: 'What language is used in the frontend?',
    answer1: 'Java',
    answer2: 'Python',
    answer3: 'JavaScript'
  },
  {
    img: 'img/Person coding on a computer.png',
    question: 'What language has prototypal inheritance?',
    answer1: 'C#',
    answer2: 'Python',
    answer3: 'JavaScript'
  }
];
let image = document.querySelector('.container--image__img');
let questions = document.querySelector('.container--test__D');
let quiz = document.querySelector('.container');
let popup = document.querySelector('.popup');
let popup__container__h2 = document.querySelector('.popup__container--h2');
let counter = 0;
let score = 0;
let answers = [];
document.querySelectorAll('.container--test__answers').forEach(function (item) {
  answers.push(item);
});

class UI {
  constructor(img, question, answer1, answer2, answer3) {
    this.img = img;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
  }

  change() {
    image.setAttribute('src', this.img);
    questions.textContent = this.question;
    answers[0].textContent = this.answer1;
    answers[1].textContent = this.answer2;
    answers[2].textContent = this.answer3;
  }
};

document.querySelectorAll('.container--test__answers').forEach(function (item) {
  item.addEventListener('click', function (e) {
    switch (counter) {
      case 0:
        if (e.target.textContent == 'JavaScript') {
          RigthAnswer();
        } else {
          WrongAnswer();
        }
        break;
      case 1:
        if (e.target.textContent == 'JavaScript') {
          RigthAnswer();
        } else {
          WrongAnswer();
        }
        break;
      case 2:
        if (e.target.textContent == 'JavaScript') {
          Final1();
        } else {
          Final2();
        }
        break;
    }
  });
});

document.querySelector('.popup__container--btn').addEventListener('click', function () {
  counter = 0;
  score = 0;
  quiz.classList.toggle('hide');
  popup.classList.toggle('show');
  let next = new UI(info[counter].img, info[counter].question, info[counter].answer1, info[counter].answer2, info[counter].answer3);
  next.change();
});

function RigthAnswer() {
  score++;
  counter++;
  let next = new UI(info[counter].img, info[counter].question, info[counter].answer1, info[counter].answer2, info[counter].answer3);
  next.change();
}

function WrongAnswer() {
  counter++;
  let next = new UI(info[counter].img, info[counter].question, info[counter].answer1, info[counter].answer2, info[counter].answer3);
  next.change();
}

function Final1() {
  score++;
  counter++;
  quiz.classList.toggle('hide');
  popup.classList.toggle('show');
  popup__container__h2.textContent = `${score}/3`;
}

function Final2() {
  counter++;
  quiz.classList.toggle('hide');
  popup.classList.toggle('show');
  popup__container__h2.textContent = `${score}/3`;
}