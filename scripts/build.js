const utilityNamesFantasy = require("@random-tables/utility-names-fantasy");
const utilityNature = require("@random-tables/utility-nature");
const utilityNPC = require("@random-tables/utility-npc");
const utilityNPCFantasy = require("@random-tables/utility-npc-fantasy");
const utilitySenses = require("@random-tables/utility-senses");
const utilityFactions = require("@random-tables/utility-factions");
const utilityNames = require("@random-tables/utility-names");
const utilityNamesHistoric = require("@random-tables/utility-names-historic");

const npcFantasy = require("@random-tables/npc-fantasy");
const factions = require("@random-tables/factions");
const biome = require("@random-tables/biome");

const write = require("write");

const pageData = { utility: [], tableset: [] };
function addToPageData(indexObj) {
  const { isUtility, collectionName, collectionID } = indexObj;
  const dataObj = { collectionName, collectionID };

  if (isUtility) {
    pageData.utility.push(dataObj);
  } else {
    pageData.tableset.push(dataObj);
  }
}

const opt = {
  newline: true,
};

function addDataObj(dataindex) {
  addToPageData(dataindex);
  write.sync(
    "./dist/" + dataindex.collectionID + ".json",
    JSON.stringify(dataindex),
    opt
  );
}

// utilities

[
  utilityNamesFantasy,
  utilityNature,
  utilityNPC,
  utilityNPCFantasy,
  utilitySenses,
  utilityFactions,
  utilityNames,
  utilityNamesHistoric,
].map(addDataObj);

// full tables

[npcFantasy, factions, biome].map(addDataObj);

// Data for web page
const webPageData = JSON.stringify(pageData);
write.sync("./dist/pageData.js", "const data = " + webPageData + ";", opt);
