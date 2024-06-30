const handleWhatsAppMessage = () => {
  const message = "Hello! I'm interested in your English classes.";
  const phoneNumber = "7046016354";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};

export default handleWhatsAppMessage;
