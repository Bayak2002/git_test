// Simple search alert to demonstrate JavaScript separation
const searchButton = document.querySelector('.search-container button');
if (searchButton) {
  searchButton.addEventListener('click', () => {
    const term = document.querySelector('.search-container input').value;
    alert(`Aranacak kelime: ${term}`);
  });
}
