// Insert title above filters 
function addTitle() {
    
    //let filterTitle = document.createElement('h2');
    //let filterTitleText = document.createTextNode('Filter')
    //console.log(filterContainer);
    //filterTitle.insertBefore(filterTitleText, filterTitle.lastChild);
    //filterContainer.insertAfter(filterTitle, filterContainer.lastChild);
    //filterTitle.setAttribute('class', 'filter-main-title');
}

window.onload = function () {
    
    console.log('HERE IS MY SCRIPT')
    
    let filterNav = document.querySelector("#nav-dept");
    console.log(filterNav);

    if(filterNav.getAttribute("style") === "display: block") {
        let filterContainer = document.querySelectorAll(".filters-nav")[1];
        console.log(filterContainer);
    }
}

