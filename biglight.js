// Create & Add Filter Title to DOM
let filterSection = document.querySelector("#nav-dept");

function addFilterTitle() {
    
    // let filterNav = document.querySelector("#nav-dept");
    let filterTitle = document.createElement('h2');
    let filterTitleText = document.createTextNode('Filter');

    filterTitle.className = 'filter-title-main';
    filterTitle.appendChild(filterTitleText);
    filterSection.insertBefore(filterTitle, filterSection.firstChild);
} 

function addDoneButton() {
    // let filterNav = document.querySelector("#nav-dept");
    let doneButton = document.createElement('button');

    doneButton.innerHTML = "Done";
    doneButton.className = 'filter-button-done';
    filterSection.insertBefore(doneButton, filterSection.firstChild);
}

function addResetButton() {
    // let filterNav = document.querySelector("#nav-dept");
    let resetButton = document.createElement('button');

    resetButton.innerHTML = "Reset";
    resetButton.className = 'filter-button-reset';
    filterSection.insertBefore(resetButton, filterSection.firstChild);
}

addFilterTitle();
addDoneButton();
addResetButton();
      


