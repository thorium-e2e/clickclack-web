//
// script: js/create-clacks.js
//
// Client code for clack creation page
//
// author: apothuaud
//

// Add pair of fields for a new key-value attribute
function addKeyValueFields() {
  // Each key value pair fields
  // <div id="clacks_fields_pair" class="clacks_fields_pair mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
  //   <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone">
  //     <input class="mdl-textfield__input" type="text" id="keys">
  //     <label class="mdl-textfield__label" for="keys">Key...</label>
  //   </div>
  //   <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
  //     <input class="mdl-textfield__input" type="text" id="values">
  //     <label class="mdl-textfield__label" for="values">Value...</label>
  //   </div>
  //   <div class="mdl-cell mdl-cell--4-col mdl-cell--1-col-tablet mdl-cell--1-col-phone" id="fields_actions">
  //     <button type="button" onclick="deleteKeyValueFields(POS)" id="btn_delete_fields" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
  //       <i class="material-icons">cancel_presentation</i>
  //     </button>
  //     <div class="mdl-tooltip" data-mdl-for="btn_delete_fields">remove</div>
  //   </div>
  // </div>
  N_FIELDS = document.getElementsByClassName("clacks_fields_pair").length;
  FIELDS_LIST = document.getElementById("clacks_fields_pair_list");
  NEW_FIELDS_CTNR = document.createElement("div");
  NEW_FIELDS_CTNR.setAttribute("id", "clacks_fields_pair");
  NEW_FIELDS_CTNR.setAttribute("class", "clacks_fields_pair mdl-grid mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone");
  FIELDS_LIST.appendChild(NEW_FIELDS_CTNR);
  NEW_KEY_FIELD_CTNR = document.createElement("div");
  NEW_KEY_FIELD_CTNR.setAttribute("class", "mdl-textfield mdl-js-textfield mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone");
  NEW_FIELDS_CTNR.appendChild(NEW_KEY_FIELD_CTNR);
  NEW_KEY_INPUT = document.createElement("input");
  NEW_KEY_INPUT.setAttribute("class", "mdl-textfield__input");
  NEW_KEY_INPUT.setAttribute("type", "text");
  NEW_KEY_INPUT.setAttribute("id", "keys");
  NEW_KEY_FIELD_CTNR.appendChild(NEW_KEY_INPUT);
  NEW_KEY_LABEL = document.createElement("label");
  NEW_KEY_LABEL.setAttribute("class", "mdl-textfield__label");
  NEW_KEY_LABEL.setAttribute("for", "keys");
  NEW_KEY_LABEL.innerHTML = "Key...";
  NEW_KEY_FIELD_CTNR.appendChild(NEW_KEY_LABEL);
  NEW_VALUE_FIELD_CTNR = document.createElement("div");
  NEW_VALUE_FIELD_CTNR.setAttribute("class", "mdl-textfield mdl-js-textfield mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone");
  NEW_FIELDS_CTNR.appendChild(NEW_VALUE_FIELD_CTNR);
  NEW_VALUE_INPUT = document.createElement("input");
  NEW_VALUE_INPUT.setAttribute("class", "mdl-textfield__input");
  NEW_VALUE_INPUT.setAttribute("type", "text");
  NEW_VALUE_INPUT.setAttribute("id", "values");
  NEW_VALUE_FIELD_CTNR.appendChild(NEW_VALUE_INPUT);
  NEW_VALUE_LABEL = document.createElement("label");
  NEW_VALUE_LABEL.setAttribute("class", "mdl-textfield__label");
  NEW_VALUE_LABEL.setAttribute("for", "values");
  NEW_VALUE_LABEL.innerHTML = "Value...";
  NEW_VALUE_FIELD_CTNR.appendChild(NEW_VALUE_LABEL);
  NEW_DELETE_CTNR = document.createElement("div");
  NEW_DELETE_CTNR.setAttribute("class", "mdl-cell mdl-cell--4-col mdl-cell--1-col-tablet mdl-cell--1-col-phone");
  NEW_DELETE_CTNR.setAttribute("id", "fields_actions");
  NEW_FIELDS_CTNR.appendChild(NEW_DELETE_CTNR);
  NEW_DELETE_BTN = document.createElement("button");
  NEW_DELETE_BTN.setAttribute("type", "button");
  NEW_DELETE_BTN.setAttribute("onclick", "deleteKeyValueFields(" + (N_FIELDS + 1) + ")");
  NEW_DELETE_BTN.setAttribute("id", "btn_delete_fields");
  NEW_DELETE_BTN.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon mdl-button--colored");
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
}

function deleteKeyValueFields(pos) {
  var FIELDS_LIST = document.getElementById("clacks_fields_pair_list");
  var FIELDS_CTNRS = document.getElementsByClassName("clacks_fields_pair")[pos - 1];
  FIELDS_LIST.removeChild( FIELDS_CTNRS );
}
