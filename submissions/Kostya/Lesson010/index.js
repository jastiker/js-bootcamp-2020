/* eslint-disable no-unused-vars */
const checkPassword = () => {
  var resultActionUser = prompt('Введите логин');
  switch (resultActionUser) {
    case 'Админ':
      let resultActionUser2 = prompt('Введите пароль'); // eslint-disable-line
      if (resultActionUser2 === 'Я главный') {
        document.getElementById('resultPrompt').innerHTML = 'Здравствуйте!';
        break;
      } else {
        document.getElementById('resultPrompt').innerHTML = 'Неверный пароль';
        break;
      }
    case null: {
      document.getElementById('resultPrompt').innerHTML = 'Отменено';
      break;
    }
    default: {
      document.getElementById('resultPrompt').innerHTML = 'Я вас не знаю';
      break;
    }
  }
};

const fibonachi = (n) => {
  let count = 0;
  let fibonacciN = 1;
  let fibonacci0 = 0;
  let fibonacci1 = 1;
  let fibonacci2 = 1;
  if (n < 1) {
    fibonacciN = 0;
  }
  return recurse();
  function recurse() {
    if (count < n - 2) {
      count++;
      fibonacci2 = fibonacci1 + fibonacci0;
      fibonacci0 = fibonacci1;
      fibonacciN = fibonacci2 + fibonacci1;
      fibonacci1 = fibonacci2;
      return recurse();
    }
    return (document.getElementById(
      'fibonacchiOutput',
    ).innerHTML = `${fibonacciN}`);
  }
};
let text = document.getElementById('numberN');

const makeButton = () => {
  document
    .getElementById('addButton')
    .insertAdjacentHTML(
      'beforebegin',
      '<p><input type="button" onclick="counter1()" name="addButton" id="butt" value="Count" /><p>',
    );
};
const counter1 = () => {
  let func = counter();
  return func();
};
const counter = () => {
  let count = 0;
  return function () {
    count++;
    console.log(count);
    return document.innerHTML('afterbegin', '<h2> count</h2>');
  };
};

const func = () => {
  let count = 0;
  return function () {
    count++;
    console.log(count);
    return (document.getElementById('addButton').innerHTML = `${count}`);
  };
};
