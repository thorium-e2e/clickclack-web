//
// script: js/clacks-update.js
//
// Client code for clack creation page
//
// author: apothuaud
//

function getNbFields() {
  console.log("// --- call --- \\\\");
  console.log("// getNbFields() ..........");
  var nb = document.getElementsByClassName("clacks_fields_pair").length;
  console.log("\tNb fields = " + nb);
  console.log("// ------ \\\\");
  return nb;
}

function createFieldsContainer() {
  console.log("// --- call --- \\\\");
  console.log("createFieldsContainer() ..........");
  NEW_FIELDS_CTNR = document.createElement("div");
  NEW_FIELDS_CTNR.setAttribute("id", "clacks_fields_pair");
  NEW_FIELDS_CTNR.setAttribute("class", "clacks_fields_pair mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone");
  console.log("\tNew fields ctnr:");
  console.log(NEW_FIELDS_CTNR);
  console.log("// ------ \\\\");
  return NEW_FIELDS_CTNR;
}

function createFieldKey() {
  console.log("// --- call --- \\\\");
  console.log("createFieldKey() ..........");
  NEW_KEY_FIELD_CTNR = document.createElement("div");
  NEW_KEY_FIELD_CTNR.setAttribute("class", "mdl-textfield mdl-js-textfield mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone");
  NEW_KEY_INPUT = document.createElement("input");
  NEW_KEY_INPUT.setAttribute("class", "mdl-textfield__input");
  NEW_KEY_INPUT.setAttribute("type", "text");
  NEW_KEY_INPUT.setAttribute("id", "keys");
  NEW_KEY_INPUT.setAttribute("name", "keys");
  NEW_KEY_FIELD_CTNR.appendChild(NEW_KEY_INPUT);
  NEW_KEY_LABEL = document.createElement("label");
  NEW_KEY_LABEL.setAttribute("class", "mdl-textfield__label");
  NEW_KEY_LABEL.setAttribute("for", "keys");
  NEW_KEY_LABEL.innerHTML = "Key...";
  NEW_KEY_FIELD_CTNR.appendChild(NEW_KEY_LABEL);
  console.log("\tNew key field:");
  console.log(NEW_KEY_FIELD_CTNR);
  console.log("// ------ \\\\");
  return NEW_KEY_FIELD_CTNR;
}

function createFieldValue() {
  console.log("// --- call --- \\\\");
  console.log("createFieldValue() ..........");
  NEW_VALUE_FIELD_CTNR = document.createElement("div");
  NEW_VALUE_FIELD_CTNR.setAttribute("class", "mdl-textfield mdl-js-textfield mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--2-col-phone");
  NEW_VALUE_INPUT = document.createElement("input");
  NEW_VALUE_INPUT.setAttribute("class", "mdl-textfield__input");
  NEW_VALUE_INPUT.setAttribute("type", "text");
  NEW_VALUE_INPUT.setAttribute("id", "values");
  NEW_VALUE_INPUT.setAttribute("name", "values");
  NEW_VALUE_FIELD_CTNR.appendChild(NEW_VALUE_INPUT);
  NEW_VALUE_LABEL = document.createElement("label");
  NEW_VALUE_LABEL.setAttribute("class", "mdl-textfield__label");
  NEW_VALUE_LABEL.setAttribute("for", "values");
  NEW_VALUE_LABEL.innerHTML = "Value...";
  NEW_VALUE_FIELD_CTNR.appendChild(NEW_VALUE_LABEL);
  console.log("\tNew value field:");
  console.log(NEW_VALUE_FIELD_CTNR);
  console.log("// ------ \\\\");
  return NEW_VALUE_FIELD_CTNR;
}

function createDeleteButton() {
  console.log("// --- call --- \\\\");
  console.log("createDeleteButton() ..........");
  NEW_DELETE_CTNR = document.createElement("div");
  NEW_DELETE_CTNR.setAttribute("class", "mdl-cell mdl-cell--4-col mdl-cell--1-col-tablet mdl-cell--1-col-phone");
  NEW_DELETE_CTNR.setAttribute("id", "fields_actions");
  NEW_FIELDS_CTNR.appendChild(NEW_DELETE_CTNR);
  NEW_DELETE_BTN = document.createElement("button");
  NEW_DELETE_BTN.setAttribute("type", "button");
  NEW_DELETE_BTN.setAttribute("onclick", "deleteKeyValueFields(" + (N_FIELDS + 1) + ")");
  NEW_DELETE_BTN.setAttribute("id", "btn_delete_fields");
  NEW_DELETE_BTN.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon mdl-button--accent");
  NEW_DELETE_CTNR.appendChild(NEW_DELETE_BTN);
  NEW_MATERIAL_ICON = document.createElement("i");
  NEW_MATERIAL_ICON.setAttribute("class", "material-icons");
  NEW_MATERIAL_ICON.innerHTML = "cancel_presentation";
  NEW_DELETE_BTN.appendChild(NEW_MATERIAL_ICON);
  NEW_TOOLTIP = document.createElement("div");
  NEW_TOOLTIP.setAttribute("class", "mdl-tooltip");
  NEW_TOOLTIP.setAttribute("data-mdl-for", "btn_delete_fields");
  NEW_TOOLTIP.innerHTML = "remove";
  NEW_DELETE_CTNR.appendChild(NEW_TOOLTIP);
  console.log("\tNew delete button:");
  console.log(NEW_DELETE_CTNR);
  console.log("// ------ \\\\");
  return NEW_DELETE_CTNR;
}

function addKeyValueFields() {
  console.log("// --- call --- \\\\");
  console.log("addKeyValueFields() ..........");
  N_FIELDS = getNbFields();
  FIELDS_LIST = document.getElementById("clacks_fields_pair_list");
  NEW_FIELDS_CTNR = createFieldsContainer();
  NEW_KEY_FIELD = createFieldKey();
  NEW_VALUE_FIELD = createFieldValue();
  NEW_DELETE_BUTTON = createDeleteButton();
  NEW_FIELDS_CTNR.appendChild(NEW_KEY_FIELD);
  NEW_FIELDS_CTNR.appendChild(NEW_VALUE_FIELD);
  NEW_FIELDS_CTNR.appendChild(NEW_DELETE_BUTTON);
  FIELDS_LIST.appendChild(NEW_FIELDS_CTNR);
  console.log("\tNew element:");
  console.log(NEW_FIELDS_CTNR);
  console.log("\tis added to fields list:");
  console.log(FIELDS_LIST);
  console.log("// ------ \\\\");
}

function removeFieldsAtPos(pos) {
  console.log("// --- call --- \\\\");
  console.log("removeFieldsAtPos(" + pos + ") ..........");
  var FIELDS_LIST = document.getElementById("clacks_fields_pair_list");
  var FIELDS_CTNRS = document.getElementsByClassName("clacks_fields_pair");
  for (var i = 0; i < FIELDS_CTNRS.length; i++) {
    console.log("\tevaluation of fields at pos " + (i + 1));
    console.log(FIELDS_CTNRS[i]);
    if (i + 1 == pos) {
      console.log("\tthese are the fields we want to remove...");
      FIELDS_LIST.removeChild(FIELDS_CTNRS[i]);
      console.log("\tfields removed, we should continue the loop to modify delete functions (decrement position parameter)...");
    }
  }
  console.log("// ------ \\\\");
}

function repairDeleteFunctions() {
  console.log("// --- call --- \\\\");
  console.log("repairDeleteFunctions() ..........");
  var FIELDS_CTNRS = document.getElementsByClassName("clacks_fields_pair");
  for (var i = 0; i < FIELDS_CTNRS.length; i++) {
    console.log("\tevaluation of fields at pos " + (i + 1));
    console.log(FIELDS_CTNRS[i]);
    var button = FIELDS_CTNRS[i].getElementsByTagName("div")[2].getElementsByTagName("button")[0];
    console.log("Button:");
    console.log(button);
    button.setAttribute("onclick", "deleteKeyValueFields(" + (i + 1) + ")")
    console.log("Button modified");
    console.log(button);
  }
  console.log("// ------ \\\\");
}

function deleteKeyValueFields(pos) {
  console.log("// --- call --- \\\\");
  console.log("deleteKeyValueFields() ..........");
  removeFieldsAtPos(pos);
  repairDeleteFunctions();
  console.log("// ------ \\\\");
}
