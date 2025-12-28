// WhatsApp redirect utility
// Replace with your actual WhatsApp business number
const WHATSAPP_NUMBER = "919876543210"; // Format: country code + number without +

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const whatsappMessages = {
  uploadPrescription: "Hi, I want to upload my prescription for order. Please assist me with the process.",
  enterMedicine: "Hi, I want to order medicines. Here are the medicine details:\n\n",
  orderService: (serviceName: string) => `Hi, I'm interested in ${serviceName}. Please provide more details and help me place an order.`,
  generalInquiry: "Hi, I have a question about your services. Can you help me?",
};
