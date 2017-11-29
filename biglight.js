// Create & Add Filter Title to DOM
function addFilterTitle() {
    
    let filterNav = document.querySelector("#nav-dept");
    let filterTitle = document.createElement('h2');
    let filterTitleText = document.createTextNode('Filter');


    filterTitle.className = 'filter-title-main';
    filterTitle.appendChild(filterTitleText);
    filterNav.insertBefore(filterTitle, filterNav.firstChild);
} 

function addDoneButton() {
    let filterNav = document.querySelector("#nav-dept");
    let doneButton = document.createElement('button');

    doneButton.innerHTML = "Done";
    doneButton.className = 'filter-button-done';
    filterNav.insertBefore(doneButton, filterNav.firstChild);
}

addFilterTitle();
addDoneButton();
      


