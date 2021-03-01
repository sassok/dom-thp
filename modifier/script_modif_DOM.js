//Modif 1
function changeTitles(){
  document.getElementsByClassName('jumbotron-heading').item(0).innerHTML = "Ce que j'ai appris à THP";
  document.getElementsByClassName('lead text-muted').item(0).innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

//Mofid 2
function changeCallToActions(){
  let yop = document.querySelector('a.btn-primary');
  yop.innerHTML= "OK je veux tester !";  
  yop.href = 'http://www.thehackingproject.org';

  let yap = document.querySelector('a.btn-secondary');
  yap.innerHTML= "Non Merci"; 
  yap.href = 'https://www.pole-emploi.fr/accueil/';
}

//Modif 3
function changeLogoName(){
  yep = document.querySelector('div.d-flex > a.navbar-brand strong')
  yep.innerHTML= "The THP Experience";
  yep.style.fontSize = "2em";
}

//Modif 4
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages(){
  let image = document.getElementsByClassName('card-img-top');

  for(let i=0; i<image.length; i++){
  image[i].src = imagesArray[i];
  }
}

//Modif 5
function deleteLastCards(){
  let card = document.getElementsByClassName('col-md-4');

  for(let j=0; j < 3 ; j++){
  card[card.length - 1].remove();
  }
}

//Modif 6
function changeCardsText(){
  let cards = document.getElementsByClassName('card-text');
  cards[0].innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
  cards[1].innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
  cards[2].innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
}

//Modif 7
function changeViewButtons(){
  let button = document.getElementsByClassName('btn-group');
  for(let l = 0; l < button.length; l++){
    button[l].getElementsByTagName("button")[0].classList.remove('btn-outline-secondary');
    button[l].getElementsByTagName("button")[0].classList.add('btn-success');
  }
}

//Modif 8
function div(){
let newdiv = document.createElement("div"); 
newdiv.className = "row";
document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName("div")[0].appendChild(newdiv); 
}

changeTitles()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()
div()

