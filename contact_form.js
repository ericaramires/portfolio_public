document.addEventListener('DOMContentLoaded', () => {
  loadEmailJsLibrary();
  initializeContactForm();
});

/**
 * Carrega a biblioteca EmailJS de forma assíncrona.
 */
function loadEmailJsLibrary() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      if (!publicKey) {
          console.error('Chave pública do EmailJS não encontrada.');
          return;
      }
      emailjs.init(publicKey);
      console.log("EmailJS library loaded and initialized.");

  };
}

/**
 * Inicializa o formulário de contato e configura o evento de envio.
 */
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) {
    console.error('Formulário de contato não encontrado.');
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = getFormData();

    if (!formData) {
      console.error('Dados do formulário inválidos.');
      return;
    }

    handleFormSubmission(contactForm, submitButton, formData);
  });
}

/**
 * Obtém os dados do formulário.
 * @returns {Object|null} Os dados do formulário ou null se algum campo estiver vazio.
 */
function getFormData() {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return null;
  }

  return {
    name,
    email,
    message,
    to_email: 'ramireserica@gmail.com',
  };
}

/**
 * Lida com o envio do formulário.
 * @param {HTMLFormElement} form O formulário de contato.
 * @param {HTMLButtonElement} button O botão de envio.
 * @param {Object} formData Os dados do formulário.
 */
async function handleFormSubmission(form, button, formData) {
  setButtonState(button, 'loading', true);

  try {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    if (!serviceId || !templateId) {
      console.error('Service ID ou Template ID não encontrados.');
      setButtonState(button, 'error', false);
      return;
    }

    console.log('formData',formData)
    await emailjs.send(serviceId, templateId, formData);

    setButtonState(button, 'success', false);
    form.reset();
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    setButtonState(button, 'error', false);
  }
}

/**
 * Atualiza o estado do botão de envio.
 * @param {HTMLButtonElement} button O botão de envio.
 * @param {string} state O estado a ser aplicado ('loading', 'success', 'error').
 * @param {boolean} disable Indica se o botão deve ser desativado.
 */
function setButtonState(button, state, disable) {
  button.classList.remove('loading', 'success', 'error');
  button.classList.add(state);
  button.disabled = disable;

  if (state === 'success' || state === 'error') {
    setTimeout(() => {
      button.classList.remove(state);
      button.disabled = false;
    }, 2000);
  }
}
