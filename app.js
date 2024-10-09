const btnHamburger = document.querySelector('.hamburger'); // Määrame muutujale btnHamburger HTML-element, mille ID on hamburger
const menuPanel = document.querySelector('.menu-panel'); // Määrame muutujale menuPanel HTML-element, mille klass on menu-panel
const menuLinks = document.querySelectorAll('.menu-panel a'); // Määrame muutujale menuLinks kõik HTML-sildid, mis asuvad menüü paneeli sees
const frameImage = document.querySelector('#frame'); // Valime HTML elemendi, millel on id 'frame'
const images = ['1.webp', '2.webp', '3.webp','4.webp', '5.webp', '6.webp']; // Piltide nimede massiiv
const modal = document.querySelector('.modal'); // Valib Modal akna
const btnOpenModal = document.querySelector('#btn-open-form'); // Valib nuppu vormi avamiseks
const inputName = document.querySelector('#name'); //Valib nime sisendvälja
const inputEmail = document.querySelector('#email'); // Valib e-posti sisendvälja
const inputMessage = document.querySelector('#message'); // Valib sõnumi sisendvälja
const contactForm = document.querySelector('#contact-form'); // Valib kontaktivormi

contactForm.addEventListener('submit', (event)=> { // Lisame vormi esitamise ootamise
    event.preventDefault(); // Peatab vormi vaikimisi esitamise

    const name = inputName.value; // Nime väärtus
    const email = inputEmail.value; // E-posti väärtus
    const message = inputMessage.value;  // Sõnumi väärtus  

    //object literal

    const formData = { // Loome objekti, mis sisaldab vormi andmeid
        userName: name, // Kasutaja nimi
        userEmail: email,  // Kasutaja e-post
        userMessage: message // Kasutaja sõnum
    }

    localStorage.setItem("name", JSON.stringify(formData.userName)); // Salvestame nime
    localStorage.setItem("email", JSON.stringify(formData.userEmail)); // Salvestame e-posti
    localStorage.setItem("message", JSON.stringify(formData.userMessage)); // Salvestame sõnumi

});


btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

window.onclick = (event) => {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}



let currentImageIndex = 0; // Hoiab praegu valitud pildi indeksit, alustades esimesest (indeks 0)

frameImage.addEventListener('click', ()=> { // Lisab sündmuse kuulaja, mis käivitab funktsiooni, kui pildile klikitakse
    currentImageIndex++; // Suurendab indeksi väärtust ühe võrra

    if(currentImageIndex >= 6) { // Kui indeks on suurem või võrdne 5-ga (viimane indeks), siis...
        currentImageIndex = 0; // ...muudab indeksi tagasi 0-ks (algusesse)
    }

    //array length

    frameImage.src = 'images/' + images[currentImageIndex]; // Muudab pildi 'src' atribuuti, et näidata järgmist pilti
    
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