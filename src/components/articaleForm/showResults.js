import {db} from "../../../firebase";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency

  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);

  // Add a new document in collection "cities"
  db.collection("articles").doc('A').set({
    name: values.name,
    title: values.title,
    description: values.description
  })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

});
