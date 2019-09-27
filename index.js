let text= document.getElementById("bird");
let image = document.getElementById("bougie");
let bouton = document.getElementById("mouseClic");

text.innerHTML=parseInt(0);
image.innerHTML="bougie";


mouseClic.addEventListener('click', e => {
    if (text.innerHTML<4){
        return text.innerHTML = parseInt(text.innerHTML)+ 1;
    }else{
      
      return text.innerHTML = 'Stop ne te vieillis pas ! Bon Anniversaire !!!';
    }
    
});

mouseClic.addEventListener('click', e =>{
  if (text.innerHTML<1){
    document.getElementById("bougie").src = "un.svg";
}else if (text.innerHTML<2){
    document.getElementById("bougie").src = "un.svg";
}else if (text.innerHTML<3){
  document.getElementById("bougie").src = "deux.svg";
}else if (text.innerHTML<4){
  document.getElementById("bougie").src = "trois.svg";
}else if (text.innerHTML<5){
  document.getElementById("bougie").src = "quatre.png";
}else {
  document.getElementById("bougie").src = "quatre.png";
}
});


mouseClic.addEventListener('click', e =>{
  if (text.innerHTML==='Stop ne te vieillis pas ! Bon Anniversaire !!!'){
    document.getElementById("mouseClic").src = "bouton_orange.png";
  }
});