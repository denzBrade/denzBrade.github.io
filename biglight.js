// // Insert title above filters 
// function addTitle() {
    
//     //let filterTitle = document.createElement('h2');
//     //let filterTitleText = document.createTextNode('Filter')
//     //console.log(filterContainer);
//     //filterTitle.insertBefore(filterTitleText, filterTitle.lastChild);
//     //filterContainer.insertAfter(filterTitle, filterContainer.lastChild);
//     //filterTitle.setAttribute('class', 'filter-main-title');
// }

// window.onload = function () {
    
function addTitle() {
    console.log('HERE IS MY SCRIPT');
    
    let filterNav = document.querySelector("#nav-dept");
    let filterTitle = document.createElement('h2');
    let filterTitleText = document.createTextNode('Filter');


    filterTitle.className = 'filter-title-main';
    filterTitle.appendChild(filterTitleText);

    filterNav.insertBefore(filterTitle, filterNav.firstChild);
} 

addTitle();
      
// }

