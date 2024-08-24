// const expandQuestion = document.querySelectorAll('.questions');
// const getAnswer = document.querySelectorAll('.answers');
// // console.log(getAnswer);
// getAnswer.forEach((question) => {
//   console.log(question);
//   const result = (document.querySelectorAll('.answers').style.color = 'blue');
//   console.log(result);

//   question.addEventListener('click', function () {
//     // question.nextElementSibling.classList.toggle('active');
//     question.classList.toggle('active');

//     // if (getAnswer.style.display === 'none') {
//     //   getAnswer.style.display = 'block';
//     // } else {
//     //   getAnswer.style.display = 'none';
//     // }
//   });
// });

// const signs = document.querySelectorAll('.plus');
// // const sign = document.getElementsByClassName('plus');
// const newImg = 'images/icon-minus.svg';
// signs.forEach((sign) => {
//   sign.addEventListener('click', () => {
//     console.log('click click');

//     sign.src = newImg;
//   });
// });

// accordion.forEach((question) => {
//   console.log(question);
//   question.addEventListener('click', () => {
//     console.log('just clicked');
//     question.nextElementSibling.classList.toggle('active');

//   });
// });
// accordion.forEach((question) => {
//   //   console.log(question);
//   question.addEventListener('click', () => {
//     console.log('just clicked');
//     // question.classList.toggle('active');
//     question.nextElementSibling.classList.toggle('active');
//     // const answer = question.nextElementSibling.classList.toggle('active');

//     const plusSign = question.querySelector('.plus');
//     const minusSign = question.querySelector('.minus');

//     if (question.style.display) {
//       question.style.display = 'none';
//       plusSign.style.display = 'block';
//       minusSign.style.display = 'none';
//     } else {
//       question.style.display = 'block';
//       plusSign.style.display = 'none';
//       minusSign.style.display = 'block';
//     }
//   });
// });
const accordion = document.querySelectorAll('.questions');
const plusSign = document.querySelectorAll('.plus');
const minusSign = document.querySelectorAll('.minus');
const answer = document.querySelectorAll('.answers');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    plusSign[i].classList.toggle('hidden');
    minusSign[i].classList.toggle('hidden');
    answer[i].classList.toggle('hidden');
  });
}
