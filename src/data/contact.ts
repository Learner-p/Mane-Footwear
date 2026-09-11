export const siteContact = {
  name: "MANE FOOTWEAR",
  phone: "9156310198",
  phoneHref: "tel:+919156310198",
  whatsappNumber: "919156310198",
  whatsappMessage:
    "Hello MANE FOOTWEAR, I would like to enquire about your footwear collection.",
  email: "manefootwear4406@gmail.com",
  location: "Near Cottonking, Maruti Mandir Chowk, Talegaon Dabhade",
  mapsQuery: "MANE FOOTWEAR near Cottonking Maruti Mandir Chowk Talegaon Dabhade Maharashtra",
};

export const whatsappHref = `https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(
  siteContact.whatsappMessage
)}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteContact.mapsQuery
)}`;