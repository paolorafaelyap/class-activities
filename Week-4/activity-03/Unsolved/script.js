var article = document.getElementById('articles')

article.style.fontSize = '50px';
article.firstElementChild.lastElementChild.style.color = 'blue';
article.previousElementSibling.style.backgroundColor = 'black';

var main = document.getElementById('main');
main.childNodes[1].style.textDecoration = 'underline';
main.lastElementChild.style.fontSize = '50px';
main.firstElementChild.style.color = 'orange';
main.lastElementChild.parentElement.style.fontSize = '40px'