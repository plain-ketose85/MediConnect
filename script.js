// ==========================================
// 1. CONFIGURATION
// ==========================================
const scriptURL = 'https://script.google.com/macros/s/AKfycbxIG9p1TjbMx8uG6jRFY9pr1CSMzpD3KRjICzBx4PWb3n2NfGVBuHoTIwzF0o0TeMuo/exec';

// ==========================================
// 2. DATE VALIDATION (Prevent Past Appointments)
// ==========================================
const datePicker = document.getElementById('appDate');
if(datePicker) {
    const today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);
}

// ==========================================
// 3. FORM SUBMISSION & PHONE VALIDATION
// ==========================================
const form = document.getElementById('appointmentForm');

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent page refresh

    // --- Phone Validation Logic ---
    const phoneInput = document.getElementById('phone');
    const countryCode = document.getElementById('country-code').value;
    
    if (phoneInput && phoneInput.value.length !== 10) {
        alert("⚠️ Invalid Phone Number: Please enter exactly 10 digits.");
        phoneInput.focus();
        return; 
    }

    // Combine for a professional database entry (e.g., "+91 9876543210")
    const fullContact = `${countryCode} ${phoneInput.value}`;

    // Generate Unique Appointment ID
    const randomID = "CF-" + Math.floor(1000 + Math.random() * 9000);

    // Prepare Data for Google Sheets
    const formData = new FormData(form);
    formData.append('AppointmentID', randomID); 
    formData.set('Phone', fullContact); // Sends the combined international number

    // UI Feedback: Disable button during processing
    const btn = document.getElementById('submitBtn');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";
    btn.disabled = true;

    // AJAX Call to Google Sheets
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            // Update Receipt Details
            document.getElementById('displayID').innerText = randomID;
            document.getElementById('receiptName').innerText = "Patient: " + document.getElementById('userName').value;
            document.getElementById('receiptDateTime').innerText = 
                "Slot: " + document.getElementById('appDate').value + " at " + document.getElementById('appTime').value;

            // Transition UI
            form.classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Submission failed. Please check your internet and try again.");
            btn.innerText = originalText;
            btn.disabled = false;
        });
});

// ==========================================
// 4. GEOLOCATION API (Smart Feature)
// ==========================================
const locBtn = document.getElementById('find-location-btn');
const locStatus = document.getElementById('location-status');

if (locBtn) {
    locBtn.addEventListener('click', () => {
        if (!navigator.geolocation) {
            locStatus.textContent = "Geolocation is not supported by your browser.";
            return;
        }

        locStatus.textContent = "Detecting your location...";

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                // Success UI Update
                locStatus.innerHTML = `✅ Location Verified <br> <small>Lat: ${lat.toFixed(3)}, Lon: ${lon.toFixed(3)}</small>`;
                
                // Logging for project defense/demo
                console.log(`User Coordinates: ${lat}, ${lon}`);
            },
            () => {
                locStatus.textContent = "❌ Location access denied. Please enable permissions.";
            },
            { enableHighAccuracy: true, timeout: 5000 }
        );
    });
}
