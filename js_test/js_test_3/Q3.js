const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const states = ['CA', 'AZ', 'WA', 'NY', 'OR', 'TX', 'TS', 'ML', 'MX'];

// FIlter states
const searchStates = searchText => {
 // Get matches to current text input
 let matches = states.filter(state => {
  const regex = new RegExp(`${searchText}`, 'gi');
  return state.match(regex);
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

search.addEventListener('input', () => searchStates(search.value));