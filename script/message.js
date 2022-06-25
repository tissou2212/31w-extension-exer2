
(function(){

    let elBoite__modale;
    let elBoite__X;
    let elBody = document.querySelector('body');
    let elBoiteContenu;

    function creerBoiteModale() {
        elBoiteContenu = document.createElement('div');
        elBoiteContenu.classList.add('elBoiteContenu');
        elBoite__modale = document.createElement('div');
        elBoite__X = document.createElement('button');
        elBoite__X.classList.add('boite__x');
        elBoite__modale.appendChild(elBoite__X);
        elBoite__modale.appendChild(elBoiteContenu);
        
        elBoite__X.innerHTML = "X";
        elBoiteContenu.innerHTML = " 3 800, rue Sherbrooke Est Montréal (Québec) H1X 2A2 | 514 254-7131 <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11175.893468333239!2d-73.56205423022462!3d45.55086130000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68ff300997eff5c!2sColl%C3%A8ge%20de%20Maisonneuve!5e0!3m2!1sfr!2sca!4v1656123876872!5m2!1sfr!2sca\" width=\"550\" height=\"250\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>";
        elBoite__modale.classList.add('boite__modale');
        elBody.appendChild(elBoite__modale);
    }

    creerBoiteModale();

    let btn = document.querySelector("#mon_bouton");
    //document.querySelector('.boite__modale');
    
    btn.addEventListener("mousedown", function(){
        console.log("Bravo, le script fonctionne");
        elBoite__modale.classList.add('boite__modale__ouvrir');
    })

    elBoite__X.addEventListener('mousedown', function(){
        elBoite__modale.classList.remove('boite__modale__ouvrir');
    })

})()