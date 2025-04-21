// script.js
/*
  Author: Kaitlyn Wassel, Vanessa Onwughalu, Mark Coleman
  Date: April 2025
  Foggy Bottom Food Trucks - JavaScript for Reviews Page
*/
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
  