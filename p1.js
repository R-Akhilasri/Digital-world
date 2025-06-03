
const imageContainer = document.getElementById('imageContainer');
        const productImage = document.getElementById('productImage');

        imageContainer.addEventListener('mouseover', () => {
            productImage.style.transform = 'scale(1.2)'; // Zoom in
        });

        imageContainer.addEventListener('mouseout', () => {
            productImage.style.transform = 'scale(1)'; // Reset zoom
        });
        document.getElementById("addToCartBtn").addEventListener("click", function() {
   addToCartBtn.classList.add('animate__animated', 'animate__bounce'); // Use 'animate__bounce' for bounce effect
          addToCartBtn.classList.add('change-bg');
            // Remove animation classes after animation ends to reset the state
            addToCartBtn.addEventListener('animationend', () => {
                addToCartBtn.classList.remove('animate__animated', 'animate__bounce');
            }, { once: true });
});
         document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get input values
    let comment = document.getElementById('comment').value;

    // Create new comment element
    let commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
        <p>${comment}</p>
    `;

    // Append new comment to comments list
    document.getElementById('commentsList').appendChild(commentElement);

    // Clear form inputs
    document.getElementById('comment').value = '';
});
         