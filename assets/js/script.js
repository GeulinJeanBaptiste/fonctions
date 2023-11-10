const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// creer une fonction qui , au clique sur le boutton 1 affiche son innerText.

const affiche = (button) => {
  console.log(button.innerText);
};
// appeler cette fonction au click sur boutton.
// Attention !!!! une fonction callback ne s'appelle pas avec des parenthèses.
button1.addEventListener("click", () => {
  affiche(button1);
});
// pour chaque boutton utiliser un nouvel event click qui apellera la même fonction affiche.
// cette fonction une fois modifiée devra afficher dans le même console.log l'innerText de chaque boutton.
button2.addEventListener("click", () => {
  affiche(button2);
});
button3.addEventListener("click", () => {
  affiche(button3);
});
