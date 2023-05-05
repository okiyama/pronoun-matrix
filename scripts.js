const pronouns = [
    "she", "her", "he", "him", "they", "them", "dude", "buddy", "pal", "friend", "mate", "comrade",
    "guy", "gal", "sibling", "folk", "amigo", "amiga", "bro", "sis", "chum", "fella", "fam", "acquaintance",
    "pard", "compadre", "colleague", "partner", "neighbour", "cohort", "peer", "associate", "confidant",
    "sidekick", "ally", "collaborator", "cooperator", "team-mate", "homie", "chap", "guv", "lad", "lass"
];
const headerRow = document.getElementById("header-row");
const tableBody = document.getElementById("table-body");
const pronounsList = document.getElementById("pronouns-list");

function createTable() {
    headerRow.innerHTML = "<th></th>";
    pronouns.forEach(pronoun => {
        headerRow.innerHTML += `<th>${pronoun}</th>`;
    });

    pronouns.forEach((rowPronoun, rowIndex) => {
        const row = document.createElement("tr");
        row.innerHTML = `<th>${rowPronoun}</th>`;
        pronouns.forEach((colPronoun, colIndex) => {
            row.innerHTML += `<td><input type="checkbox" data-row="${rowIndex}" data-col="${colIndex}"></td>`;
        });
        tableBody.appendChild(row);
    });
}

function updateSelectedPronouns() {
    const selected = [];
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        if (checkbox.checked) {
            const row = checkbox.dataset.row;
            const col = checkbox.dataset.col;
            selected.push(`${pronouns[row]} / ${pronouns[col]}`);
        }
    });
    pronounsList.textContent = selected.join(", ") || "None";
}

createTable();
tableBody.addEventListener("change", updateSelectedPronouns);
