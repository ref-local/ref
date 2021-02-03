
const ashTab = document.querySelector('#ash');
const kepTab = document.querySelector('#kep');
const stabTab = document.querySelector('#stab');

const ashRef = document.querySelector('#ashref');
const kepRef = document.querySelector('#kepref');
const stabRef = document.querySelector('#stabref');

if (ashTab) ashTab.addEventListener('click', () => view_ash());
if (kepTab) kepTab.addEventListener('click', () => view_kep());
if (stabTab) stabTab.addEventListener('click', () => view_stab());


function view_ash() {
  ashTab.style.backgroundColor = '#8652fc';
  kepTab.style.backgroundColor = '#88bdff';
  stabTab.style.backgroundColor = '#88bdff';
  ashRef.style.display = 'block';
  kepRef.style.display = 'none';
  stabRef.style.display = 'none';
};
function view_kep() {
  ashTab.style.backgroundColor = '#88bdff';
  kepTab.style.backgroundColor = '#8652fc';
  stabTab.style.backgroundColor = '#88bdff';
  ashRef.style.display = 'none';
  kepRef.style.display = 'block';
  stabRef.style.display = 'none';
};
function view_stab() {
  ashTab.style.backgroundColor = '#88bdff';
  kepTab.style.backgroundColor = '#88bdff';
  stabTab.style.backgroundColor = '#8652fc';
  ashRef.style.display = 'none';
  kepRef.style.display = 'none';
  stabRef.style.display = 'block';
};
