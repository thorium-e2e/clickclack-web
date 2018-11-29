//
// script: javascripts/create-clacks.js
//
// Client code for clack creation page
//
// author: apothuaud
//

NB_FIELDS = 1; // global

// Add pair of fields for a new key-value attribute
function addKeyValueFields() {
  // Each key value pair fields is a paragraph
  // <p class="input input-free-form">
  //   <label>key :</label> + " "
  //   <input type="text" name="keys"> + " "
  //   <label>value :</label> + " "
  //   <input type="text" name="values">
  // </p>
  // log
  console.log("function addKeyValueFields()");
  // increment nb fields
  NB_FIELDS ++;
  console.log("NB_FIELDS incrementation (now=" + NB_FIELDS + ")");
  // create element for paragraph
  // <p class="input input-free-form">
  newKeyValueInputs = document.createElement("p");
  // set classes
  newKeyValueInputs.classList.add("input");
  newKeyValueInputs.classList.add("input-free-form");
  // create element first label 'key'
  // <label>key :</label> + " "
  newLabelKey = document.createElement("label");
  // set inner html
  newLabelKey.innerHTML = "key : "
  // append to paragraph newKeyValueInputs
  newKeyValueInputs.appendChild(newLabelKey);
  // create element first input 'key'
  // <input type="text" name="keys"> + " "
  newInputKey = document.createElement("input");
  // set attributes
  newInputKey.type = "text";
  newInputKey.name = "keys"; // POST params: keys will be a list
  newInputKey.id = "keys";
  newInputKey.setAttribute("testsAutoId", "input-key");
  // append to paragraph newKeyValueInputs
  newKeyValueInputs.appendChild(newInputKey);
  // create element second label 'value'
  newLabelValue = document.createElement("label");
  // set inner html
  newLabelValue.innerHTML = " value : "
  // apend to paragraph newKeyValueInputs
  newKeyValueInputs.appendChild(newLabelValue);
  // create element second input 'value'
  // <label>value :</label> + " "
  newInputValue = document.createElement("input");
  // set attributes
  newInputValue.type = "text"
  newInputValue.name = "values";
  newInputValue.id = "values";
  newInputValue.setAttribute("testsAutoId", "input-value");
  // append to paragraph newKeyValueInputs
  newKeyValueInputs.appendChild(newInputValue);
  // create label element to add space
  newLabelSpace = document.createElement("label");
  newLabelSpace.innerHTML = " "
  newKeyValueInputs.appendChild(newLabelSpace);
  // create button element to delete this fields
  newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add('button');
  newDeleteButton.classList.add('button-delete');
  newDeleteButton.setAttribute("testsAutoId", "btn-delete-fields");
  newDeleteButton.type = "button";
  newDeleteButton.onclick = deleteKeyValueFields;
  newDeleteButton.innerHTML = "[ X ]";
  newKeyValueInputs.appendChild(newDeleteButton);
  // append paragraph to the form
  form = document.getElementById("clack-fields");
  form.appendChild(newKeyValueInputs);
  // log
  console.log("Element added to form");
}

function deleteKeyValueFields() {
  // delete key value fields
  // log
  console.log("function deleteKeyValueFields()");
  // remove paragraph node
  this.parentNode.remove();
  // log
  console.log("Element removed");
  // decrement NB_FIELDS
  NB_FIELDS --;
  console.log("NB_FIELDS decrementation (now=" + NB_FIELDS + ")");
}
