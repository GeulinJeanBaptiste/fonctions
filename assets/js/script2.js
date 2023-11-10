const buttonArray = document.querySelectorAll("button");
console.dir(buttonArray);

const affiche = (btn) => {
  console.log(btn.innerText);
};
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */
let n = 0;
while (n < buttonArray.length) {
  // dans les boucles for et while, il est impossible de se basé sur l'index de ces boucles pour manipuler les éléments d'un tableau.
  // Je dois IMPRERATIVEMENT créer un autre index affilié à mon tableau cf let = i
  let i = n;
  buttonArray[i].addEventListener("click", () => {
    affiche(buttonArray[i]);
  });
  console.log("blabla");
  n++;
}
