
fetch('https://swapi.co/api/people')
.then(response => response.json())
.then(function (data) {
	let starWarData = [];
	for (let i = 1; i < data.results.length; i++) {
  	starWarData.push(data.results[i].name);
  }

  const search = document.getElementById('search');
  const matchList = document.getElementById('match-list');

  // Filter
  const searchStarWarData = searchText => {
   // Get matches to current text input
   let matches = starWarData.filter(data => {
    const regex = new RegExp(`${searchText}`, 'gi');
    return data.match(regex);
   });

   // Clear when input or matches are empty
   if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
   }

   outputHtml(matches);
  };

  // Show results in HTML
  const outputHtml = matches => {
   if (matches.length > 0) {
    const html = matches
     .map(
      match => `<div class="options">
      <h4>${match}</h4>
     </div>`
     )
     .join('');
    matchList.innerHTML = html;
   }
  };

  search.addEventListener('input', () => searchStarWarData(search.value));


}); 