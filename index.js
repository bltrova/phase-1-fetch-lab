
function fetchBooks() {
  // Fetch data from the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      // Pass the JSON data to the renderBooks function
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

// Define the renderBooks function
function renderBooks(books) {
  const bookList = document.getElementById('book-list');
} 
//   books.forEach(book => {
//     const li = document.createElement('li');
//     li.textContent = book.name; // Display the name of each book
//     bookList.appendChild(li);   // Add the book name to the list
//   });
// }

// // Call fetchBooks when the page is loaded
