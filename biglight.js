// Create & Add Filter Title to DOM

let filterSection = document.querySelector("#nav-dept");
let doneButton = document.createElement('button');
let resetButton = document.createElement('button');

function addFilterTitle() {
    let filterTitle = document.createElement('h2');
    let filterTitleText = document.createTextNode('Filter');

    filterTitle.className = 'filter-title-main';
    filterTitle.appendChild(filterTitleText);
    filterSection.insertBefore(filterTitle, filterSection.firstChild);
} 

function addDoneButton() {
    doneButton.innerHTML = "Done";
    doneButton.className = 'filter-button-done';
    filterSection.insertBefore(doneButton, filterSection.firstChild);

    function hideFilters() {
        filterSection.style.display === 'none' ? '' : 'none';
    }

    doneButton.addEventListener('click', function() {
        hideFilters();
    })
}

function addResetButton() {
    resetButton.innerHTML = "Reset";
    resetButton.className = 'filter-button-reset';
    filterSection.insertBefore(resetButton, filterSection.firstChild);
}



addFilterTitle();
addDoneButton();
addResetButton();




