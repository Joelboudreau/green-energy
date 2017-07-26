/*
---------------------------------
DECLARING AND ASSIGNING VARIABLES
--------------------------------- */
(function (){
 
    "use strict";
 
 
var masthead, slides, buttons, contents, container, i, k;



masthead = document.querySelector(".mh-image");


slides = [
    "<img src= img/image_1.png><p>Instalationde panneau solaire</p>",
    "<img src= img/image_2.png><p>Recherche et developpement</p>",
    "<img src= img/image_3.png><p>Installation d'éolienne</p>",
    "<img src= img/image_4.png><p>Systeme de recyclage</p>"
];


function fadeout(){
    masthead.style.opacity = 0;
}


var i = 0;


function runSlides() {
    
    masthead.style.opacity = 1;
  
    if (i > 3) {
        i=0;          
    } 
    
    masthead.innerHTML=slides[i];  
                
    i += 1;
 
    window.setTimeout(fadeout, 5000);

}

runSlides();
window.setInterval(runSlides, 6000);


buttons = document.querySelectorAll(".btn");

contents = [
    "<img src=\"img/switch.jpg\"><h4>Éteindre ses appareils électriques</h4><p>Les gens sont tellement habitués d’être constamment entourés d’appareils électriques que ces derniers finissent par se fondre dans la masse. Sans s’en rendre compte, les télévisions restent ouvertes, la radio joue, les lumières sont allumées, les ordinateurs aussi, bref, tout est allumé sans toutefois être utilisé. Penser à éteindre les lumières et les appareils non utilisés est une bonne façon d’économiser notre énergie et d’ainsi aider notre belle planète.</p>",
    
    "<img src=\"img/bag.jpg\"><h4>Adopter les sacs de tissus</h4><p>Ça ne parait pas toujours, mais le nombre de sacs de papier ou de plastique utilisés dans notre monde de consommation est faramineux. Imaginez tous ces sacs qui circulent, qui sont jetés ou qui trainent un peu partout sur la planète. C’est incroyable. Donc pour aider nos arbres, l’environnement et contrer la pollution, utiliser des sacs de tissus est un bon moyen. De plus, vous aurez toujours vos sacs à portée de la main et vous pourrez les utiliser comme bon vous semble.</p>",
    
    "<img src=\"img/lumiere.jpg\"><h4>Utiliser des ampoules fluocompactes</h4><p>Ces ampoules durent plus longtemps et économisent l’énergie. Prenez soin d’en installer un peu partout dans la maison et vous verrez le bien qu’elles feront aussi à vos factures d’électricité. 3</p>"
];  

container = document.querySelector(".container");

container.innerHTML = contents[0];


function handleClick(ev) {
    
    for (k = 0; k < buttons.length; k += 1) {
        if (buttons[k].hasAttribute("id")) {
         buttons[k].removeAttribute("id");
        }
        
    }

//  ev.target.innerHTML=button[0]; 
   /* 
   Use innerHTML on ev.target to check which button
   was clicked. Based on this, display corresponding array 
   element inside <div class="container"></div> */
    if (ev.target.innerHTML == "1") {
        container.innerHTML = contents[0];
        } else if (ev.target.innerHTML == "2") {
       container.innerHTML = contents[1];     
        } else {
        container.innerHTML = contents[2];
        }

   /*
   Add the class active to clicked list item (use ev.target) */
    ev.target.setAttribute("id", "active");

}

/* 
Loop through buttons array and 
register handleClick to listen for "click" event 
on any button from array buttons. */ 
for (k = 0; k < buttons.length; k += 1)
{ (buttons[k].addEventListener("click", handleClick));
}


}());


