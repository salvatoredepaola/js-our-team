
const team = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez ", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada ", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos ", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" },
];
console.log(team);

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    const contentElement = document.getElementById("content");
    const immagine = "./img";
    let contentHTML = `<div class="card">`;
    contentHTML += `<h2>${teamMember.nome}</h2>`;
    contentHTML += `<h3>${teamMember.ruolo}</h3>`;
    contentHTML += `<img src="${immagine}/${teamMember.foto}"/>`;
    contentHTML += `</div>`;
    console.log(contentHTML);

    contentElement.innerHTML += contentHTML;
}



