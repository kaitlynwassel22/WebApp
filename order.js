/*
  Author: Kaitlyn Wassel, Vanessa Onwughalu, Mark Coleman
  Date: April 2025
  Foggy Bottom Food Trucks - JavaScript for Order Page
*/
// Toggle visibility based on selected order type
document.querySelectorAll('input[name="orderType"]').forEach(option => {
    option.addEventListener('change', () => {
      const isDelivery = document.querySelector('input[name="orderType"]:checked').value === 'delivery';
      document.getElementById('deliveryOptions').style.display = isDelivery ? 'block' : 'none';
      document.getElementById('pickupOptions').style.display = isDelivery ? 'none' : 'block';
    });
  });
  
  document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Data passes initial validation tests");
  });
  