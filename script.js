document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    // 1. Prevent the page from reloading
    e.preventDefault();

    // 2. Collect the data (you could send this to a server later)
    const appointmentData = {
        name: document.getElementById('userName').value,
        phone: document.getElementById('userPhone').value,
        date: document.getElementById('appDate').value,
        time: document.getElementById('appTime').value
    };

    console.log("Appointment Details:", appointmentData);

    // 3. Hide the form and show the success message
    document.getElementById('appointmentForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
});
