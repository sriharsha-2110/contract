const data = {
    "categories": [
        {
            "name": "Fruits",
            "items": [
                {
                    "name": "Apple",
                    "image": "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
                    "description": "A sweet red fruit."
                },
                {
                    "name": "Banana",
                    "image": "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjY3MzJmNmFiNzE2YjM1ZjA2YmEyMThiMzE5MTFlNDIzIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=2d1fad7b7d171175a452ff5971e30373869a744d30cc3fd8d32987abbe6e5302",
                    "description": "A yellow elongated fruit."
                },
                {
                    "name": "Grapes",
                    "image": "https://rukminim2.flixcart.com/image/850/1000/kt0enww0/plant-seed/h/h/n/25-dg-214-paudha-original-imag6fgvre6bmd5y.jpeg?q=90&crop=false",
                    "description": "Small round fruits, often purple or green."
                },
                {
                    "name": "Mango",
                    "image": "https://www.fortheloveofnature.in/cdn/shop/products/Mangiferaindica-Priyur_Mango_1.jpg?v=1640246617",
                    "description": "A tropical fruit with a large pit."
                },
                {
                    "name": "Orange",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq779novU3KONBe9aIfxT3xiPXaNf8Pslfw&s",
                    "description": "A citrus fruit with a sweet-tart taste."
                }
            ]
        },
        {
            "name": "Vegetables",
            "items": [
                {
                    "name": "Carrot",
                    "image": "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1704281309",
                    "description": "A root vegetable, typically orange."
                },
                {
                    "name": "Chilli",
                    "image": "https://organicmandya.com/cdn/shop/files/GreenChilli.jpg?v=1721374815&width=1000",
                    "description": "Savor the Spice of Life!."
                },
                {
                    "name": "Tomato",
                    "image": "https://www.allthatgrows.in/cdn/shop/products/Cherry-Tomato_large.jpg?v=1598080165",
                    "description": "A red or yellow fruit, often used as a vegetable."
                },
                {
                    "name": "Cucumber",
                    "image": "https://organicmandya.com/cdn/shop/files/Cucumber.jpg?v=1721383087&width=1000",
                    "description": "A long, green vegetable with a mild flavor."
                },
                {
                    "name": "Broccoli",
                    "image": "https://organicmandya.com/cdn/shop/files/Broccoli.jpg?v=1721371046&width=1000",
                    "description": "A green vegetable with a tree-like structure."
                }
            ]
        },
        {
            "name": "Grains",
            "items": [
                {
                    "name": "Rice",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fUc9kt_0i62cjkJBYZ-3SzwxI7xk5n9xjw&s",
                    "description": "A staple food grain."
                },
                {
                    "name": "Wheat",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJzazTIRVKHJrB4VOsplFjQ2TERZFXk6Qlg&s",
                    "description": "A common grain used for flour."
                },
                {
                    "name": "Corn",
                    "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/308375465/HX/PV/AV/8324940/indian-yellow-corn-500x500.png",
                    "description": "A yellow grain often used as food and animal feed."
                },
                {
                    "name": "Barley",
                    "image": "https://cdn.shopaccino.com/edible-smart/products/barley-838417_l.jpg?v=521",
                    "description": "A cereal grain used in brewing and food."
                },
                {
                    "name": "Oats",
                    "image": "https://images.immediate.co.uk/production/volatile/sites/30/2023/08/Porridge-oats-d09fae8.jpg?quality=90&resize=440,400",
                    "description": "A whole grain commonly used for oatmeal."
                }
            ]
        }
    ]
};

function displayItems() {
    const categorySelect = document.getElementById("categorySelect");
    const selectedCategory = categorySelect.value;
    const productDisplay = document.getElementById("productDisplay");

    productDisplay.innerHTML = ""; // Clear previous content

    if (selectedCategory) {
        const categoryData = data.categories.find(category => category.name === selectedCategory);
        categoryData.items.forEach(item => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productImage = document.createElement("img");
            productImage.src = item.image;
            productImage.alt = item.name;

            const productName = document.createElement("h3");
            productName.textContent = item.name;

            const productPriceLabel = document.createElement("label");
            productPriceLabel.textContent = "Price: ₹";

            const productPriceInput = document.createElement("input");
            productPriceInput.type = "text";
            productPriceInput.placeholder = "Enter price";
            
            const uploadButton = document.createElement("button");
            uploadButton.classList.add("upload-button");
            uploadButton.textContent = "Upload";
            uploadButton.onclick = () => uploadItem(item, productPriceInput.value);

            productDiv.appendChild(productImage);
            productDiv.appendChild(productName);
            productDiv.appendChild(productPriceLabel);
            productDiv.appendChild(productPriceInput);
            productDiv.appendChild(uploadButton);

            productDisplay.appendChild(productDiv);
        });
    }
}

function uploadItem(item, price) {
    if (!price) {
        alert("Please enter a valid price.");
        return;
    }

    item.price = price; // Update the item's price with the entered value
    const uploadedItems = JSON.parse(localStorage.getItem('uploadedItems')) || [];
    uploadedItems.push(item);
    localStorage.setItem('uploadedItems', JSON.stringify(uploadedItems));

    alert(`${item.name} uploaded successfully with price: ₹${price}`);
}document.getElementById('contractButton').addEventListener('click', function() {
    fetch('http://127.0.0.1:3004/getContractData')  // Use full URL with port to avoid issues with relative paths
        .then(response => response.json())
        .then(data => {
            let detailsDiv = document.getElementById('contractDetails');
            detailsDiv.innerHTML = ''; // Clear any previous content

            // Check if there are farmers or contractors data
            if (data.farmers.length > 0 || data.contractors.length > 0) {
                if (data.farmers.length > 0) {
                    const farmerTitle = document.createElement('h2');
                    farmerTitle.innerText = 'Farmers';
                    detailsDiv.appendChild(farmerTitle);

                    // Loop through farmers and display data
                    data.farmers.forEach(item => {
                        let contractDiv = document.createElement('div');
                        contractDiv.innerHTML = `
                            <h3>${item.name}</h3>
                            <p>Age: ${item.age}</p>
                            <p>Phone: ${item.phone}</p>
                            <p>State: ${item.state}</p>
                            <p>District: ${item.district}</p>
                            <p>Taluk: ${item.taluk}</p>
                        `;
                        detailsDiv.appendChild(contractDiv);
                    });
                }

                if (data.contractors.length > 0) {
                    const contractorTitle = document.createElement('h2');
                    contractorTitle.innerText = 'Contractors';
                    detailsDiv.appendChild(contractorTitle);

                    // Loop through contractors and display data
                    data.contractors.forEach(item => {
                        let contractDiv = document.createElement('div');
                        contractDiv.innerHTML = `
                            <h3>${item.name}</h3>
                            <p>Age: ${item.age}</p>
                            <p>Phone: ${item.phone}</p>
                        `;
                        detailsDiv.appendChild(contractDiv);
                    });
                }
            } else {
                detailsDiv.innerHTML = 'No contract data available.';
            }
        })
        .catch(error => {
            console.error('Error fetching contract data:', error);
        });
});
