document.addEventListener('DOMContentLoaded', function() {
    const applyCouponButton = document.getElementById('apply-coupon');
    const couponCodeInput = document.getElementById('coupon-code');
    const finalPriceElement = document.getElementById('final-price');
    const originalPrice = 1000; // Original course price
  
    applyCouponButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      const couponCode = couponCodeInput.value;
      if (couponCode === '500') {
        const discountedPrice = originalPrice - 500;
        finalPriceElement.textContent = `Final Price: ₹${discountedPrice}`;
      } else {
        finalPriceElement.textContent = `Final Price: ₹${originalPrice}`;
      }
  
      finalPriceElement.classList.remove('hidden'); // Show the final price
    });
  });

  document.getElementById("btn").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeV21zn93fq88LssiO09H8HzVgrUZVfkwdMSIJElNqc0HEduw/viewform?usp=sf_link", "_blank");
  });

  