document.addEventListener("DOMContentLoaded", () => {
  const cardNumberInput = document.getElementById("card-number");
  const expiryDateInput = document.getElementById("expiry-date");
  const cvvInput = document.getElementById("cvv");
  const visaIcon = document.querySelector(".visa-icon");
  const mastercardIcon = document.querySelector(".mastercard-icon");
  const amexIcon = document.querySelector(".amex-icon");
  const dinersIcon = document.querySelector(".diners-icon");

  const detectCardScheme = () => {
    const value = cardNumberInput.value.trim();
    visaIcon.classList.add("hidden");
    mastercardIcon.classList.add("hidden");
    amexIcon.classList.add("hidden");
    dinersIcon.classList.add("hidden");

    if (value.startsWith("4")) {
      visaIcon.classList.remove("hidden");
    } else if (value.startsWith("34") || value.startsWith("37")) {
      amexIcon.classList.remove("hidden");
    } else if (/^5[1-5]/.test(value)) {
      mastercardIcon.classList.remove("hidden");
    } else if (/^3(?:0[0-5]|[68])/.test(value)) {
      dinersIcon.classList.remove("hidden");
    } else if (value === "") {
      visaIcon.classList.remove("hidden");
      mastercardIcon.classList.remove("hidden");
      amexIcon.classList.remove("hidden");
      dinersIcon.classList.remove("hidden");
    }
  };

  const validateExpiryDate = () => {
    const value = expiryDateInput.value.trim();
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(value)) {
      expiryDateInput.classList.add("error");
    } else {
      expiryDateInput.classList.remove("error");
    }
  };

  const adjustCVVLength = () => {
    const isAmex = !amexIcon.classList.contains("hidden");
    cvvInput.maxLength = isAmex ? 4 :
