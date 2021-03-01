console.log("Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.");
let elementsToBeModified = document.getElementsByTagName('p');
console.log(elementsToBeModified.length);

console.log("Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.");
let CoucouContent = document.getElementById('coucou');
console.log(CoucouContent);

console.log("Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.");
let ThirdA = document.querySelectorAll('a');
console.log(`L'url contenu dans la 3 èmes balises <a> est : ${ThirdA[2]}`);

console.log("Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.");
let CountClass = document.getElementsByClassName('compte-moi').length;
console.log(CountClass + " éléments portent la classe compte-moi");

console.log("Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.")
let ElLiClass = document.querySelectorAll("li.compte-moi").length;
console.log(ElLiClass);

console.log("Question 7")
let Quest7 = document.querySelectorAll("div ul");
console.log(Quest7[1].querySelector("li"));
