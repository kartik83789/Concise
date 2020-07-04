/* for controlling the type of search done */

var baseSearchResultLocation = 'search_results.html';
// multi search by default
var searchResultLocation = baseSearchResultLocation + "?multi=";
var finalSearchLocation;
var searchLinks = document.querySelectorAll('.link-yellow .sub-links > li');
var searchBtn = document.querySelector('.search-form > button');
var searchInput = document.querySelector('.search-form > input');

function addListenerForSearchLinks(link, str) {
      link.addEventListener('click', function () {
            searchResultLocation = baseSearchResultLocation + "?" + str + "=";
            searchBtn.textContent = str.charAt(0).toUpperCase() + str.slice(1) + " Search";
      });
}

addListenerForSearchLinks(searchLinks[0].firstChild, "multi");
addListenerForSearchLinks(searchLinks[1].firstChild, "movie");
addListenerForSearchLinks(searchLinks[2].firstChild, "tv");
addListenerForSearchLinks(searchLinks[3].firstChild, "person");

searchInput.addEventListener('keyup', function(event) {
      if(event.keyCode === 13) {
            searchBtn.click();
      }
});

searchBtn.addEventListener('click', function() {
      var inputVal = searchInput.value;
      // add Input validation - regex 
      if(inputVal === "") {
            alert("input box was left empty!");
      } else {
            finalSearchLocation = searchResultLocation + inputVal.trim().split(' ').join('+') + "=1";
            window.location.assign(finalSearchLocation);
      }
});
