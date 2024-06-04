/* Matrix Rain */
const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = (C.width = window.innerWidth),
  H = (C.height = window.innerHeight);

const str = "01",
  matrix = str.split("");

let font = 11,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  $.fillStyle = "rgba(0,0,0, 0.05)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#0f0";
  $.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}

setInterval(draw, 123);

window.addEventListener("resize", () => location.reload());

/* Typing Title */
let text = 'Digital cards'
let content = document.querySelector('#title')

for (let i in [...text]) {
  let letter = document.createElement('span')
  letter.textContent = [...text][i]
  if(letter.textContent.match(/\s/)) {
    letter.style.margin = 'auto 3px'
  }
  letter.style.animationDelay = i/10+'s'
  content.appendChild(letter)
}

/* Typing Text */
var typed = new Typed('#text', {
    strings: ['Наскучило дарить бумажные открытки? Хотите необычным образом поздравить ваших близких с праздником или важной датой? Нет возможности встретиться, а проявить внимание как-то нужно?', 'Если ваш ответ - да, то у меня есть решение. Я занимаюсь созданием цифровых открыток. Могу реализовать почти любые стили и эффекты. Свяжитесь со мной, и я создам для вас крутую открытку.', 'Ссылка в описании!'],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false
});
