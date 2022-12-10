import {
  getCall,
  buildIndex,
  appendIndex,
  inspectIndex,
} from "@random-tables/generator-logic";

function getFromURLArray(urlArray, onComplete, onError) {
  Promise.all(urlArray.map((url) => fetch(url).then((res) => res.json()))).then(
    (data) => {
      buildIndex(data, onComplete, onError);
    }
  );
}

window.document.RandomTables = {
  getCall,
  buildIndex,
  appendIndex,
  inspectIndex,
  getFromURLArray,
};
