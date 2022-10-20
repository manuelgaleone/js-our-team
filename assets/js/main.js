/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

    MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

    MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

    MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

    BONUS 1: Trasformare la stringa foto in una immagine effettiva
    
    BONUS 2: Organizzare i singoli membri in card/schede
*/

let team = [

    {
        name: "Wayne Barnett",
        Role: "Founder & CEO",
        Image: "./assets/img/wayne-barnett-founder-ceo.jpg"

    },
    {
        name: "Angela",
        Role: "Chief Editor",
        Image: "./assets/img/angela-caroll-chief-editor.jpg"

    },
    {
        name: "Waleter gordon",
        Role: "Chief Editor",
        Image: "./assets/img/walter-gordon-office-manager.jpg"

    },
    {
        name: "Waleter gordon",
        Role: "Social Media Manager",
        Image: "./assets/img/angela-lopez-social-media-manager.jpg"

    },
    {
        name: "Scott Estrada",
        Role: "Developer",
        Image: "./assets/img/scott-estrada-developer.jpg"

    },
    {
        name: "Barbara Ramos",
        Role: "Grafic designer",
        Image: "./assets/img/barbara-ramos-graphic-designer.jpg"

    }
]

//console.log(team);

for (let i = 0; i < team.length; i++) {
    let teamMemb = team[i];
    //console.log(teamMemb);

    let cardDiv = `
    <div class="card card_team col-4 border_team">
        <div class="team_element margin_left_right_auto py-3">
            <img class="img_team margin_left_right_auto" src="${teamMemb.Image}">
            </img>
            <h3 class="text-center">${teamMemb.name}
            </h3>
            <p class="text-center">${teamMemb.Role}
            </p>
        </div>
    </div>`

    console.log(cardDiv)
    document.querySelector(".row").insertAdjacentHTML("beforeend", cardDiv);

}
