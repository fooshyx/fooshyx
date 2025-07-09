document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('contact-modal');
    const btn = document.getElementById('contact-btn');
    const span = document.getElementsByClassName('close')[0];
    const verificationCode = document.getElementById('verification-code');
    const verificationInput = document.getElementById('verification-input');
    const verifyBtn = document.getElementById('verify-btn');
    const verificationStep = document.getElementById('verification-step');
    const emailReveal = document.getElementById('email-reveal');

    let currentCode = '';

    function generateRandomCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    btn.onclick = function () {
        currentCode = generateRandomCode();
        verificationCode.textContent = currentCode;
        verificationInput.value = '';
        verificationStep.style.display = 'block';
        emailReveal.style.display = 'none';
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    verifyBtn.onclick = function () {
        if (verificationInput.value === currentCode) {
            verificationStep.style.display = 'none';
            emailReveal.style.display = 'block';
        } else {
            alert('Incorrect code. Please try again.');
            verificationInput.value = '';
        }
    }

    verificationInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            verifyBtn.click();
        }
    });
});