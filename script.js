// script.js

document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const reviewText = document.getElementById("review").value.trim();
    const rating = document.getElementById("rating").value;
  
    if (name && reviewText) {
      const newReview = document.createElement("article");
      newReview.innerHTML = `<p><strong>${name}</strong> (${rating} Stars): "${reviewText}"</p>`;
  
      document.getElementById("review-list").appendChild(newReview);
  
      // Clear the form
      this.reset();
    }
  });
  