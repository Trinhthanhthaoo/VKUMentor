const cardImages = document.querySelectorAll(".card-image");
const cardTitles = document.querySelectorAll(".card-title");
const cardDescriptions = document.querySelectorAll(".card-description");
const cardMediaIcons = document.querySelectorAll(".card-mediaIcons a");
const cardImgs = document.querySelectorAll(".card-image img");
const cardTitleSpans = document.querySelectorAll(".card-title span");
const cardDescSpans = document.querySelectorAll(".card-description span");
const mediaIcons = document.querySelectorAll(".card-mediaIcons a i");

const renderCard = () => {
  //Remove the skeleton loading effect
  cardImages.forEach((cardImage) => {
    cardImage.classList.remove("loading");
  });
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove("loading");
  });
  cardDescriptions.forEach((cardDescription) => {
    cardDescription.classList.remove("loading");
  });
  cardMediaIcons.forEach((cardMediaIcon) => {
    cardMediaIcon.classList.remove("loading");
  });

  //Show the hidden html elements
  cardImgs.forEach((cardImg) => {
    cardImg.style.visibility = "visible";
  });
  cardTitleSpans.forEach((cardTitleSpan) => {
    cardTitleSpan.style.visibility = "visible";
  });
  cardDescSpans.forEach((cardDescSpan) => {
    cardDescSpan.style.visibility = "visible";
  });
  mediaIcons.forEach((mediaIcon) => {
    mediaIcon.style.visibility = "visible";
  });
}

//Execute renderCard on setTimeout
setTimeout(() => {
  renderCard();
}, 1000);

//Execute renderCard after the page loaded
//window.addEventListener("load", () => {
  //renderCard();
//});

  /*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    /** ETAPE POUR CONNECTER EMAILJS AU FORMULAIRE DE CONTACT
    * 1. https://www.emailjs.com - Sign In our Sign Up
    * 2. "Email Services" => "Add New Service" => "Gmail" for example 
    * 3. "Connect Account" => "Create Service" => Copy the "Service ID"
    * 4. "Email Templates" => "Create New Template" 
    * Subject *
        New message from {{user_name}}
        Content *
            Names: {{user_name}}

            Email: {{user_email}}

            Subject: {{user_subject}}

            Message: {{user_message}}

            Best wishes,
            EmailJS team
    * => "Settings" => copy "Template ID
    * 5. "Integration" => "Copy the Form ID" in html page
    * 6. "API KEYS" => "Account" => "Create Key" => "Copy the Public Key"
    * 7. serviceID - templateID - #form - publicKey
    */
    emailjs.sendForm('', '', '#contact-form', '')
        .then(() => {
            // Affiche le message de réussite d'envoi du message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Supprime le message après cinq secondes
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Efface les champs de saisie après l'envoi du message
            contactForm.reset()
        }, () => {
            // Affiche un message d'erreur d'envoi du message en cas de problème avec le service
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)