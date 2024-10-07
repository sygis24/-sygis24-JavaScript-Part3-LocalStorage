const btnHamburger = document.querySelector('.hamburger'); // Määrame muutujale btnHamburger HTML-element, mille ID on hamburger
const menuPanel = document.querySelector('.menu-panel'); // Määrame muutujale menuPanel HTML-element, mille klass on menu-panel
const menuLinks = document.querySelectorAll('.menu-panel a'); // Määrame muutujale menuLinks kõik HTML-sildid, mis asuvad menüü paneeli sees
const frameImage = document.querySelector('#frame');
const images = ['1.webp', '2.webp', '3.webp','4.webp', '5.webp', '6.webp'];

let currentImageIndex = 0;

frameImage.addEventListener('click', ()=> {
    currentImageIndex++; //+1

    if(currentImageIndex >= 5) {
        currentImageIndex = 0;
    }
    
    frameImage.src = 'images/' + images[currentImageIndex];
    
});


btnHamburger.addEventListener('click', ()=> { // Lisame btnHamburger nupule sündmuse jälgimise, mis reageerib klikkimisele
    menuPanel.classList.toggle('active'); // Kasutame toggle meetodit, et lisada või eemaldada klass active menüü paneelilt
});


document.addEventListener('click', (event) => { // Lisame sündmuse jälgimise kogu dokumendile, et registreerida kõik klikkimised
    if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) { // Kontrollime, kas klikk toimus väljaspool menüü paneeli ja nuppu
        menuPanel.classList.remove('active');  // Eemaldame klassi active menüü paneelist, et sulgeda see
    } 

});

menuLinks.forEach((link)=>{ // Käime läbi kõik lingid, mis asuvad menuLinks muutujas
    
    link.addEventListener('click', ()=> { // Lisame iga lingi jaoks sündmuse jälgimise, mis reageerib klikkimisele
        menuPanel.classList.remove('active'); // Eemaldame klassi active menüü paneelilt, et sulgeda see
    });

});