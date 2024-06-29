const sendWhatsAppMessage = (courseTitle) => {
  const phoneNumber = "+919801684781"; // Ensure the number is in international format with country code
  const message = `I'm interested in enrolling in the ${courseTitle} course. Please provide more details.`; // Custom message with course title
  const url = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
export default sendWhatsAppMessage;
