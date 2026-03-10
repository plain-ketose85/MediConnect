// Ara's Logic: Prevent selecting past dates
const datePicker = document.getElementById('appDate');
const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);

// Form Submission handling
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Visual feedback
    const btn = document.getElementById('submitBtn');
    btn.innerText = "Processing...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
        document.getElementById('appointmentForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }, 1200); // Artificial delay to make it feel like a real system
});
