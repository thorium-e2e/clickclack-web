NB_FIELDS = 1;

function addKeyValueFields() {

  NB_FIELDS ++;

  console.log("Adding Key - Value fields");

  newKeyValueInputs = document.createElement("p");
  newKeyValueInputs.class = "input input-free-form";

  newLabelKey = document.createElement("label");
  newLabelKey.innerHTML = "key : "
  newKeyValueInputs.appendChild(newLabelKey);

  newInputKey = document.createElement("input");
  newInputKey.type = "text"
  newInputKey.name = "keys";
  newKeyValueInputs.appendChild(newInputKey);

  newLabelValue = document.createElement("label");
  newLabelValue.innerHTML = " value : "
  newKeyValueInputs.appendChild(newLabelValue);

  newInputValue = document.createElement("input");
  newInputValue.type = "text"
  newInputValue.name = "values";
  newKeyValueInputs.appendChild(newInputValue);

  newLabelSpace = document.createElement("label");
  newLabelSpace.innerHTML = " "
  newKeyValueInputs.appendChild(newLabelSpace);

  newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add('button');
  newDeleteButton.classList.add('button-delete');
  newDeleteButton.type = "button";
  newDeleteButton.onclick = deleteKeyValueFields;
  newDeleteButton.innerHTML = "[ X ]";
  newKeyValueInputs.appendChild(newDeleteButton);

  form = document.getElementById("clack-fields");
  form.appendChild(newKeyValueInputs);
  console.log("Element added to form");
}

function deleteKeyValueFields() {

  console.log("Delete Key - Value fields");

  this.parentNode.remove();

  console.log("Element removed");

  NB_FIELDS --;
}
