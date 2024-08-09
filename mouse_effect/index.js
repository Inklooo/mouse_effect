
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

//window.addEventListener(`mousemove`, (e) =>{

  //on pointe le curseur qui nous interesse dans le HTML => cursor
  //puis on lui donne le style et sur le top et le left les coordonnées X et Y de E
  // nous devons faire le meme procédé pour les autres classes MOUSE1 et 2

  //cursor.style.top = e.y + "px";
  //cursor.style.left = e.x + "px";

  //mouse1.style.top = e.y + "px";
  //mouse1.style.left = e.x + "px";

  //mouse2.style.top = e.y + "px";
  //mouse2.style.left = e.x + "px";
//});


// VERSION DU CODE PLUS OTIMISEE

const mouses = document.querySelectorAll(`.mouse`);

window.addEventListener(`mousemove`, (e) =>{
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});
