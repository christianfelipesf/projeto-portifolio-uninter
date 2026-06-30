const form = document.getElementById('contactForm');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');

function showError(input, message) {
  const errorSpan = input.parentElement.querySelector('.error-msg');
  input.classList.remove('valid');
  input.classList.add('error');
  errorSpan.textContent = message;
}

function showSuccess(input) {
  const errorSpan = input.parentElement.querySelector('.error-msg');
  input.classList.remove('error');
  input.classList.add('valid');
  errorSpan.textContent = '';
}

function validateNome() {
  const value = nome.value.trim();
  if (value === '') {
    showError(nome, 'O nome é obrigatório.');
    return false;
  }
  if (value.length < 3) {
    showError(nome, 'O nome deve ter pelo menos 3 caracteres.');
    return false;
  }
  showSuccess(nome);
  return true;
}

function validateEmail() {
  const value = email.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === '') {
    showError(email, 'O e-mail é obrigatório.');
    return false;
  }
  if (!re.test(value)) {
    showError(email, 'Informe um e-mail válido.');
    return false;
  }
  showSuccess(email);
  return true;
}

function validateAssunto() {
  const value = assunto.value.trim();
  if (value === '') {
    showError(assunto, 'O assunto é obrigatório.');
    return false;
  }
  if (value.length < 5) {
    showError(assunto, 'O assunto deve ter pelo menos 5 caracteres.');
    return false;
  }
  showSuccess(assunto);
  return true;
}

function validateMensagem() {
  const value = mensagem.value.trim();
  if (value === '') {
    showError(mensagem, 'A mensagem é obrigatória.');
    return false;
  }
  if (value.length < 10) {
    showError(mensagem, 'A mensagem deve ter pelo menos 10 caracteres.');
    return false;
  }
  showSuccess(mensagem);
  return true;
}

nome.addEventListener('blur', validateNome);
email.addEventListener('blur', validateEmail);
assunto.addEventListener('blur', validateAssunto);
mensagem.addEventListener('blur', validateMensagem);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isNomeValid = validateNome();
  const isEmailValid = validateEmail();
  const isAssuntoValid = validateAssunto();
  const isMensagemValid = validateMensagem();

  if (isNomeValid && isEmailValid && isAssuntoValid && isMensagemValid) {
    alert('Mensagem enviada com sucesso!');
    form.reset();
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
      el.classList.remove('valid', 'error');
    });
  }
});
