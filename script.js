// 1. Set Google Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbxIG9p1TjbMx8uG6jRFY9pr1CSMzpD3KRjICzBx4PWb3n2NfGVBuHoTIwzF0o0TeMuo/exec';

// 2. Prevent choosing past dates
const datePicker = document.getElementById('appDate');
if(datePicker) {
    const today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);
}

// 3. Handle Form Submission
const form = document.getElementById('appointmentForm');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Generate Unique Appointment ID
    const randomID = "CF-" + Math.floor(1000 + Math.random() * 9000);

    // Prepare Form Data to send
    const formData = new FormData(form);
    formData.append('AppointmentID', randomID); 

    // Visual Feedback: Show "Processing..."
    const btn = document.getElementById('submitBtn');
    btn.innerText = "Processing...";
    btn.disabled = true;

    // Send data to Google Sheets
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            // A. Update the Receipt details on the screen
            document.getElementById('displayID').innerText = randomID;
            document.getElementById('receiptName').innerText = "Patient: " + document.getElementById('userName').value;
            document.getElementById('receiptDateTime').innerText = 
                "Slot: " + document.getElementById('appDate').value + " at " + document.getElementById('appTime').value;

            // B. Hide form and show success message
            form.classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Oops! Something went wrong. Please try again.");
            btn.innerText = "Request Appointment";
            btn.disabled = false;
        });
});
