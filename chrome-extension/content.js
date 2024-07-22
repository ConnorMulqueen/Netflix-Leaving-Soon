const ulElement = document.querySelector('.tabbed-primary-navigation');

if (ulElement) {
    var newItem = ulElement.lastElementChild.cloneNode(true);
    newItem.innerHTML = "<a href='https://www.whats-on-netflix.com/leaving-soon/' target='_blank'>Leaving Soon</a>"
    ulElement.appendChild(newItem)
}
