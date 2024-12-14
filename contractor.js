function displayUploadedItems() {
    const uploadedItems = JSON.parse(localStorage.getItem('uploadedItems')) || [];
    const uploadedItemsDisplay = document.getElementById("uploadedItemsDisplay");

    uploadedItemsDisplay.innerHTML = ""; // Clear previous content

    uploadedItems.forEach((item, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = item.image;
        productImage.alt = item.name;

        const productName = document.createElement("h3");
        productName.textContent = item.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `₹${item.price}`;

        // Create Remove Button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        removeButton.addEventListener("click", () => {
            uploadedItems.splice(index, 1); // Remove the item from the array
            localStorage.setItem('uploadedItems', JSON.stringify(uploadedItems)); // Save updated array to localStorage
            displayUploadedItems(); // Re-render the list after removal
        });

        // Create Contract Button
        const contractButton = document.createElement("button");
        contractButton.textContent = "Contract";
        contractButton.classList.add("contract-btn");

        // Add event listener to redirect to farmer registration details page
        contractButton.addEventListener("click", () => {
            // For the sake of example, let's assume each item has a "farmer" object with details
            const farmerDetails = {
                name: item.farmerName,
                phone: item.farmerPhone,
                email: item.farmerEmail,
                address: item.farmerAddress,
            };

            // Redirect to the farmer details page and pass the details via URL
            const queryParams = new URLSearchParams(farmerDetails).toString();   
            window.location.href = `farmerDetails.html?${queryParams}`;
        });

        // Append elements to product div
        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(removeButton);
        productDiv.appendChild(contractButton);

        uploadedItemsDisplay.appendChild(productDiv);
    });
}

window.onload = displayUploadedItems;
