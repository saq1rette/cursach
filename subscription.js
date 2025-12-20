document.addEventListener('DOMContentLoaded', function() {
    initSubscriptionForm();
    loadSavedSubscriptionData();
});
function initSubscriptionForm() {
    const subscriptionForm = document.getElementById('subscriptionForm');
    if (!subscriptionForm) return;
    const nameInput = document.getElementById('subName');
    const emailInput = document.getElementById('subEmail');
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            saveSubscriptionData();
        });
    }
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            saveSubscriptionData();
        });
    }
    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const gender = subscriptionForm.querySelector('input[name="gender"]:checked')?.value;
        if (!name || !email || !gender) {
            alert('Пожалуйста, заполните все поля формы');
            return;
        }
        if (!validateEmail(email)) {
            alert('Пожалуйста, введите корректный email адрес');
            return;
        }
        const subscriptionData = {
            name: name,
            email: email,
            gender: gender,
            subscriptionDate: new Date().toLocaleDateString('ru-RU'),
            timestamp: Date.now()
        };
        localStorage.setItem('userSubscription', JSON.stringify(subscriptionData));
        showSuccessModal(subscriptionData);
        subscriptionForm.reset();
    });
    const genderInputs = subscriptionForm.querySelectorAll('input[name="gender"]');
    genderInputs.forEach(input => {
        input.addEventListener('change', function() {
            saveSubscriptionData();
        });
    });
}
function saveSubscriptionData() {
    const name = document.getElementById('subName')?.value.trim();
    const email = document.getElementById('subEmail')?.value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const draftData = {
        name: name || '',
        email: email || '',
        gender: gender || ''
    };
    localStorage.setItem('subscriptionDraft', JSON.stringify(draftData));
}
function loadSavedSubscriptionData() {
    try {
        const draftData = localStorage.getItem('subscriptionDraft');
        if (draftData) {
            const { name, email, gender } = JSON.parse(draftData);
            
            const nameInput = document.getElementById('subName');
            const emailInput = document.getElementById('subEmail');
            
            if (nameInput && name) nameInput.value = name;
            if (emailInput && email) emailInput.value = email;
            
            if (gender) {
                const genderInput = document.querySelector(`input[name="gender"][value="${gender}"]`);
                if (genderInput) genderInput.checked = true;
            }
        }
        const subscriptionData = localStorage.getItem('userSubscription');
        if (subscriptionData) {
            const data = JSON.parse(subscriptionData);
            console.log(`Добро пожаловать обратно, ${data.name}!`);
        }
    } catch (error) {
        console.warn('Не удалось загрузить сохраненные данные подписки');
    }
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function showSuccessModal(subscriptionData) {
    const existingModal = document.querySelector('.subscription-modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    const overlay = document.createElement('div');
    overlay.className = 'subscription-modal-overlay';
    const modal = document.createElement('div');
    modal.className = 'subscription-modal';
    const closeButton = document.createElement('button');
    closeButton.className = 'subscription-modal-close';
    closeButton.innerHTML = '×';
    closeButton.setAttribute('aria-label', 'Закрыть');
    const content = document.createElement('div');
    content.className = 'subscription-modal-content';
    const title = document.createElement('h3');
    title.className = 'subscription-modal-title';
    title.textContent = '🎉 Спасибо за подписку!';
    const text = document.createElement('p');
    text.className = 'subscription-modal-text';
    text.innerHTML = `
        Дорогой(ая) <strong>${subscriptionData.name}</strong>, спасибо что вы подписались на нашу рассылку на этом сайте по тематике "Григорий Распутин", нам очень это важно!
        <div class="subscription-details">
            <p class="subscription-details-title">Ваши данные для рассылки:</p>
            <ul class="subscription-details-list">
                <li><strong>Имя:</strong> ${subscriptionData.name}</li>
                <li><strong>, Email:</strong> ${subscriptionData.email}</li>
                <li><strong>, Пол:</strong> ${subscriptionData.gender === 'male' ? 'Мужской' : 'Женский'}</li>
                <li><strong>, Дата подписки:</strong> ${subscriptionData.subscriptionDate}</li>
            </ul>
        </div>
        Теперь вы будете получать самые свежие материалы о Григорие Распутине!
    `;  
    const actionButton = document.createElement('button');
    actionButton.className = 'subscription-modal-button';
    actionButton.textContent = 'Закрыть';
    content.appendChild(title);
    content.appendChild(text);
    modal.appendChild(closeButton);
    modal.appendChild(content);
    modal.appendChild(actionButton);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
    function closeModal() {
        overlay.classList.remove('active');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 300);
    }
    closeButton.addEventListener('click', closeModal);
    actionButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function escapeHandler(event) {
        if (event.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}
window.addEventListener('beforeunload', saveSubscriptionData);