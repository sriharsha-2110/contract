const data = {
    "states": [
        {
            "name": "Karnataka",
            "districts": [
                {
                    "name": "Bagalkot",
                    "taluks": ["Badami", "Bagalkot", "Bilagi", "Hunagunda", "Jamkhandi", "Mudhol"]
                },
                {
                    "name": "Bangalore Rural",
                    "taluks": ["Devanahalli", "Doddaballapur", "Hoskote", "Nelamangala"]
                },
                {
                    "name": "Bangalore Urban",
                    "taluks": ["Bangalore North", "Bangalore South", "Bangalore East", "Yelahanka", "Anekal"]
                },
                {
                    "name": "Belagavi",
                    "taluks": ["Athani", "Bailhongal", "Belagavi", "Chikkodi", "Gokak", "Hukkeri", "Khanapur", "Raibag", "Ramadurga", "Savadatti"]
                },
                {
                    "name": "Ballari",
                    "taluks": ["Ballari", "Hadagalli", "Hagaribommanahalli", "Hosapete", "Kudligi", "Sandur", "Siruguppa"]
                },
                {
                    "name": "Bidar",
                    "taluks": ["Aurad", "Basavakalyan", "Bhalki", "Bidar", "Humnabad"]
                },
                {
                    "name": "Chamarajanagar",
                    "taluks": ["Chamarajanagar", "Gundlupet", "Kollegal", "Yelandur"]
                },
                {
                    "name": "Chikkaballapur",
                    "taluks": ["Bagepalli", "Chikkaballapur", "Chintamani", "Gauribidanur", "Gudibanda", "Sidlaghatta"]
                },
                {
                    "name": "Chikkamagaluru",
                    "taluks": ["Chikkamagaluru", "Kadur", "Koppa", "Mudigere", "Narasimharajapura", "Sringeri", "Tarikere"]
                },
                {
                    "name": "Chitradurga",
                    "taluks": ["Challakere", "Chitradurga", "Hiriyur", "Holalkere", "Hosadurga", "Molakalmuru"]
                },
                {
                    "name": "Dakshina Kannada",
                    "taluks": ["Bantwal", "Belthangady", "Mangaluru", "Moodabidri", "Puttur", "Sullia", "Ullal"]
                },
                {
                    "name": "Davanagere",
                    "taluks": ["Channagiri", "Davanagere", "Harapanahalli", "Honnali", "Harihara", "Jagalur"]
                },
                {
                    "name": "Dharwad",
                    "taluks": ["Dharwad", "Hubli", "Kalghatgi", "Kundgol", "Navalgund"]
                },
                {
                    "name": "Gadag",
                    "taluks": ["Gadag", "Mundargi", "Naragund", "Rona", "Shirhatti"]
                },
                {
                    "name": "Hassan",
                    "taluks": ["Alur", "Arsikere", "Belur", "Channarayapatna", "Hassan", "Hole Narasipura", "Sakleshpur"]
                },
                {
                    "name": "Haveri",
                    "taluks": ["Byadagi", "Hanagal", "Haveri", "Hirekerur", "Ranebennur", "Savanur", "Shiggaon"]
                },
                {
                    "name": "Kalaburagi",
                    "taluks": ["Afzalpur", "Aland", "Chincholi", "Kalaburagi", "Jewargi", "Sedam", "Shahabad"]
                },
                {
                    "name": "Kodagu",
                    "taluks": ["Madikeri", "Somwarpet", "Virajpet"]
                },
                {
                    "name": "Kolar",
                    "taluks": ["Bangarapet", "Kolar", "Malur", "Mulbagal", "Srinivaspur"]
                },
                {
                    "name": "Koppal",
                    "taluks": ["Gangavathi", "Koppal", "Kushtagi", "Yelburga"]
                },
                {
                    "name": "Mandya",
                    "taluks": ["Krishnarajpet", "Mandya", "Malavalli", "Nagamangala", "Pandavapura", "Shrirangapattana"]
                },
                {
                    "name": "Mysuru",
                    "taluks": ["Heggadadevankote", "Hunsur", "Mysuru", "Nanjangud", "Piriyapatna", "T Narasipura"]
                },
                {
                    "name": "Raichur",
                    "taluks": ["Devadurga", "Lingsugur", "Manvi", "Raichur", "Sindhanur"]
                },
                {
                    "name": "Ramanagara",
                    "taluks": ["Channapatna", "Kanakapura", "Magadi", "Ramanagara"]
                },
                {
                    "name": "Shivamogga",
                    "taluks": ["Bhadravathi", "Hosanagar", "Sagara", "Shikaripur", "Shivamogga", "Soraba", "Thirthahalli"]
                },
                {
                    "name": "Tumakuru",
                    "taluks": ["Chikkanayakanahalli", "Gubbi", "Koratagere", "Kunigal", "Madhugiri", "Pavagada", "Sira", "Tumakuru", "Tiptur"]
                },
                {
                    "name": "Udupi",
                    "taluks": ["Brahmavar", "Karkala", "Kundapura", "Udupi"]
                },
                {
                    "name": "Uttara Kannada",
                    "taluks": ["Ankola", "Bhatkal", "Dandeli", "Haliyal", "Honnavar", "Karwar", "Kumta", "Sirsi", "Yellapur"]
                },
                {
                    "name": "Vijayapura",
                    "taluks": ["Basavana Bagewadi", "Indi", "Muddebihal", "Sindagi", "Vijayapura"]
                },
                {
                    "name": "Yadgir",
                    "taluks": ["Shahapur", "Shorapur", "Yadgir"]
                }
            ]
        },
        {
            "name": "Tamil Nadu",
            "districts": [
                {
                    "name": "Chennai",
                    "taluks": ["Chennai South", "Chennai North"]
                },
                {
                    "name": "Coimbatore",
                    "taluks": ["Coimbatore North", "Coimbatore South"]
                }
            ]
        }
    ]
};


// Function to populate states dropdown
function populateStates() {
    const stateSelect = document.getElementById('state');
    data.states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });
}

// Function to update districts based on selected state
function updateDistricts() {
    const stateName = document.getElementById('state').value;
    const districtSelect = document.getElementById('district');
    const talukSelect = document.getElementById('taluk');
    districtSelect.innerHTML = '<option value="">Select District</option>';
    talukSelect.innerHTML = '<option value="">Select Taluk</option>';

    const state = data.states.find(state => state.name === stateName);
    if (state) {
        state.districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district.name;
            option.textContent = district.name;
            districtSelect.appendChild(option);
        });
    }
}

// Function to update taluks based on selected district
function updateTaluks() {
    const stateName = document.getElementById('state').value;
    const districtName = document.getElementById('district').value;
    const talukSelect = document.getElementById('taluk');
    talukSelect.innerHTML = '<option value="">Select Taluk</option>';

    const state = data.states.find(state => state.name === stateName);
    if (state) {
        const district = state.districts.find(district => district.name === districtName);
        if (district) {
            district.taluks.forEach(taluk => {
                const option = document.createElement('option');
                option.value = taluk;
                option.textContent = taluk;
                talukSelect.appendChild(option);
            });
        }
    }
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('passwordError');
    
    if (password !== confirmPassword) {
        event.preventDefault();
        if (!errorMessage) {
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error');
            errorDiv.id = 'passwordError';
            errorDiv.textContent = 'Passwords do not match!';
            document.getElementById('confirmPassword').parentElement.appendChild(errorDiv);
        }
    } else {
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});
function navigateTo(page) {
    window.location.href = page;
  }
  
    function validateForm() {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const state = document.getElementById('state').value;
        const district = document.getElementById('district').value;
        const taluk = document.getElementById('taluk').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (name && age && phone && state && district && taluk && password && confirmPassword) {
            if (password === confirmPassword) {
                alert('Registration successful');
                window.location.href = 'index.html';
            } else {
                alert('Passwords do not match');
            }
        } else {
            alert('Please fill in all fields');
        }
    }


// Populate states dropdown on page load
window.onload = populateStates;

