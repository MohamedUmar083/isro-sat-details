const spaceCraft = document.getElementById("spaceCraft");
const centers = document.getElementById("centers");
const cusCraft = document.getElementById("customerSpacecraft");
const reset = document.getElementById("reset");
const containertable = document.getElementById("container-body");

function tableElements(tagname, classname, id, content) {
  let tag = document.createElement(tagname);
  tag.classList = classname;
  tag.id = id;
  tag.innerHTML = content;
  return tag;
}

function heading(tagname, content) {
  let head = document.createElement(tagname);
  head.innerHTML = content;
  return head;
}

const spaceCraftdiv = tableElements("div", "table-responsive", "", "");
const spaceCrafttable = tableElements("table", "table table-striped", "", "");
const spaceCrafthead = tableElements(
  "thead",
  "",
  "",
  "<tr><th>S.no</th><th>Name Of the Space Craft</th></tr>"
);
const spaceCrafttbody = tableElements("tbody", "", "tbody", "");
const spaceCraftheading = heading("h2", "ISRO Space-Crafts Information");

const centersdiv = tableElements("div", "table-responsive", "", "");
const centerstable = tableElements("table", "table table-striped", "", "");
const centersthead = tableElements(
  "thead",
  "",
  "",
  "<tr><th>S.no</th><th>Name Of the Centers</th><th>Place</th><th>State</th></tr>"
);
const centerstbody = tableElements("tbody", "", "centerstbody", "");
const centerheading = heading("h2", "ISRO Centers Information");

const csatdiv = tableElements("div", "table-responsive", "", "");
const csattable = tableElements("table", "table table-striped", "", "");
const csatthead = tableElements(
  "thead",
  "",
  "",
  "<tr><th>S.no</th><th>ID</th><th>Name Of the Country</th><th>Launch Date</th><th>Launcher</th></tr>"
);
const csattbody = tableElements("tbody", "", "csattbody", "");
const csatheading = heading("h2", "ISRO Customer Space-Crafts Information");
/*Event Listeners*/

spaceCraft.addEventListener("click", () => {
  containertable.innerHTML = "";
  const spaceCraftApi = fetch("https://isro.vercel.app/api/spacecrafts");

  spaceCraftApi
    .then((rdata) => rdata.json())
    .then((data) => {
      for (let i = 0; i < data.spacecrafts.length; i++) {
        const tableBody = document.getElementById("tbody");
        const row = tableBody.insertRow();
        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);

        idCell.textContent = data.spacecrafts[i].id;
        nameCell.textContent = data.spacecrafts[i].name;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  spaceCraftdiv.appendChild(spaceCrafttable);
  spaceCrafttable.append(spaceCrafthead, spaceCrafttbody);
  containertable.append(spaceCraftheading, spaceCraftdiv);
});

centers.addEventListener("click", () => {
  containertable.innerHTML = "";
  const centersApi = fetch("https://isro.vercel.app/api/centres");

  centersApi
    .then((rdata) => rdata.json())
    .then((data) => {
      for (let i = 0; i < data.centres.length; i++) {
        const tableBody = document.getElementById("centerstbody");
        const row = tableBody.insertRow();
        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const placeCell = row.insertCell(2);
        const stateCell = row.insertCell(3);

        idCell.textContent = data.centres[i].id;
        nameCell.textContent = data.centres[i].name;
        placeCell.textContent = data.centres[i].Place;
        stateCell.textContent = data.centres[i].State;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  centersdiv.appendChild(centerstable);
  centerstable.append(centersthead, centerstbody);
  containertable.append(centerheading, centersdiv);
});

cusCraft.addEventListener("click", () => {
  containertable.innerHTML = "";
  const cusCraft = fetch("https://isro.vercel.app/api/customer_satellites");

  cusCraft
    .then((rawdata) => rawdata.json())
    .then((data) => {
      for (let i = 0; i < data.customer_satellites.length; i++) {
        const csatTableBody = document.getElementById("csattbody");
        const csatrow = csatTableBody.insertRow();
        const csatnumCell = csatrow.insertCell(0);
        const csatidCell = csatrow.insertCell(1);
        const csatnameCell = csatrow.insertCell(2);
        const csatplaceCell = csatrow.insertCell(3);
        const csatstateCell = csatrow.insertCell(4);

        csatnumCell.textContent = i + 1;
        csatidCell.textContent = data.customer_satellites[i].id;
        csatnameCell.textContent = data.customer_satellites[i].country;
        csatplaceCell.textContent = data.customer_satellites[i].launch_date;
        csatstateCell.textContent = data.customer_satellites[i].launcher;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  csatdiv.appendChild(csattable);
  csattable.append(csatthead, csattbody);
  containertable.append(csatheading, csatdiv);
});

reset.addEventListener("click", () => {
  location.reload();
});
