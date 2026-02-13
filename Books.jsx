import React, { useState } from "react";

const Books1 = () => {
  // 1. Initial State for books using useState
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);
  
  // 2. Controlled component states for inputs
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  // 3. Logic to Add a new book (Create)
  const addBook = () => {
    if (title.trim() && author.trim()) {
      // Using Date.now() for a unique temporary ID
      setBooks([...books, { id: Date.now(), title, author }]);
      setTitle("");
      setAuthor("");
    }
  };

  // 4. Logic to Remove a book (Delete)
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // 5. Search filtering performed during render for efficiency
  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="experiment-container">
      <h2>Experiment 3.2: Library Management System</h2>
      
      {/* Search Input using the .search-bar class from App.css */}
      <input 
        type="text" 
        className="search-bar"
        placeholder="Search books by title..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />

      {/* Form Group using the .library-form class */}
      <div className="library-form">
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter Book Title" 
        />
        <input 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          placeholder="Enter Author Name" 
        />
        <button className="add-btn" onClick={addBook}>Add Book</button>
      </div>

      {/* Rendered List using the .book-item class */}
      <div className="list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <div>
                <h3 style={{ margin: "0 0 5px 0" }}>{book.title}</h3>
                <p style={{ margin: 0, color: "#666" }}>by {book.author}</p>
              </div>
              <button className="remove-btn" onClick={() => removeBook(book.id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: "#999", marginTop: "20px" }}>No books found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Books1;