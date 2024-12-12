// JavaScript for detecting card scheme
document.addEventListener('DOMContentLoaded', () => {
  const cardNumberInput = document.getElementById('card-number');
  const visaIcon = document.querySelector('.visa-icon');
  const mastercardIcon = document.querySelector('.mastercard-icon');
  const amexIcon = document.querySelector('.amex-icon');
  const dinersIcon = document.querySelector('.diners-icon');

  // Helper function to reset all icons
  function resetIcons() {
    visaIcon.style.display = 'block';
    mastercardIcon.style.display = 'block';
    amexIcon.style.display = 'block';
    dinersIcon.style.display = 'block';
  }

  // Add an event listener to detect input
  cardNumberInput.addEventListener('input', () => {
    const value = cardNumberInput.value.trim();

    // Reset all icons if input is empty
    if (value === '') {
      resetIcons();
      return;
    }

    // Detect card scheme
    resetIcons(); // Ensure all icons are visible before updating
    if (value.startsWith('4')) {
      mastercardIcon.style.display = 'none';
      amexIcon.style.display = 'none';
      dinersIcon.style.display = 'none';
    } else if (value.startsWith('34') || value.startsWith('37')) {
      visaIcon.style.display = 'none';
      mastercardIcon.style.display = 'none';
      dinersIcon.style.display = 'none';
    } else {
      // If no matching scheme, show all icons
      resetIcons();
    }
  });
});
