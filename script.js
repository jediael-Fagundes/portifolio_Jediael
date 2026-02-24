const form = document.getElementById('contactForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

nomeInput.addEventListener('blur', () => {
    const errorElement = document.getElementById('nomeError');
    if (nomeInput.value.trim().length < 3) {
        showError(nomeInput, errorElement, 'Nome deve ter pelo menos 3 caracteres');
    } else {
        clearError(nomeInput, errorElement);
    }
});

emailInput.addEventListener('blur', () => {
    const errorElement = document.getElementById('emailError');
    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, errorElement, 'E-mail inválido');
    } else {
        clearError(emailInput, errorElement);
    }
});

mensagemInput.addEventListener('blur', () => {
    const errorElement = document.getElementById('mensagemError');
    if (mensagemInput.value.trim().length < 10) {
        showError(mensagemInput, errorElement, 'Mensagem deve ter pelo menos 10 caracteres');
    } else {
        clearError(mensagemInput, errorElement);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (nomeInput.value.trim().length < 3) {
        showError(nomeInput, document.getElementById('nomeError'), 'Nome deve ter pelo menos 3 caracteres');
        isValid = false;
    } else {
        clearError(nomeInput, document.getElementById('nomeError'));
    }

    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, document.getElementById('emailError'), 'E-mail inválido');
        isValid = false;
    } else {
        clearError(emailInput, document.getElementById('emailError'));
    }

    if (mensagemInput.value.trim().length < 10) {
        showError(mensagemInput, document.getElementById('mensagemError'), 'Mensagem deve ter pelo menos 10 caracteres');
        isValid = false;
    } else {
        clearError(mensagemInput, document.getElementById('mensagemError'));
    }

    if (isValid) {
        nomeInput.value = '';
        emailInput.value = '';
        mensagemInput.value = '';

        form.style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';

        setTimeout(() => {
            form.style.display = 'block';
            document.getElementById('successMsg').style.display = 'none';
        }, 3000);
    }
});
