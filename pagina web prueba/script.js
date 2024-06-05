document.getElementById('show-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.form-container').classList.add('flipped');
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.form-container').classList.remove('flipped');
});


function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        alert('Login exitoso');
        // redirigir usuario a su dashboard
    } else {
        alert('Email o contraseña incorrectos');
    }
}


function handleRegister(event) {
    event.preventDefault();
    
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser) {
        alert('El usuario ya existe');
    } else {
        localStorage.setItem(email, JSON.stringify({ password }));
        alert('Registro exitoso');
        document.querySelector('.form-container').classList.remove('flipped');
    }
}

document.querySelector('.login-box form').addEventListener('submit', handleLogin);
document.querySelector('.register-box form').addEventListener('submit', handleRegister);



const exercisePlans = {
    cardio: {
        title: "Plan de Cardio",
        description: "Este plan incluye ejercicios de alta intensidad para mejorar tu resistencia cardiovascular.",
        details: [
            "Calentamiento: 10 minutos de trote ligero",
            "Intervalos: 5x1 minuto de sprints con 2 minutos de descanso",
            "Enfriamiento: 5 minutos de caminata"
        ]
    },
    strength: {
        title: "Plan de Fuerza",
        description: "Entrenamiento de fuerza para aumentar la masa muscular y la resistencia.",
        details: [
            "Calentamiento: 5 minutos de estiramientos dinámicos",
            "Circuito: 3x10 repeticiones de sentadillas, press de banca, y peso muerto",
            "Enfriamiento: 5 minutos de estiramientos estáticos"
        ]
    },
    flexibility: {
        title: "Plan de Flexibilidad",
        description: "Ejercicios diseñados para mejorar la flexibilidad y reducir el riesgo de lesiones.",
        details: [
            "Calentamiento: 5 minutos de movilidad articular",
            "Estiramientos: 3x30 segundos de estiramientos de isquiotibiales, cuádriceps, y hombros",
            "Enfriamiento: 5 minutos de relajación y respiración profunda"
        ]
    },
    yoga: {
        title: "Plan de Yoga",
        description: "Este plan incluye posturas de yoga para mejorar la flexibilidad, la fuerza y la relajación.",
        details: [
            "Calentamiento: 5 minutos de respiración y estiramientos suaves",
            "Secuencia: 3x1 minuto de postura del perro boca abajo, postura de la cobra y postura del guerrero",
            "Enfriamiento: 5 minutos de relajación y meditación"
        ]
    },
    core: {
        title: "Plan de Core",
        description: "Ejercicios diseñados para fortalecer la musculatura abdominal y mejorar la estabilidad.",
        details: [
            "Calentamiento: 5 minutos de estiramientos dinámicos",
            "Circuito: 3x10 repeticiones de crunches, Russian twists, y plank",
            "Enfriamiento: 5 minutos de estiramientos estáticos"
        ]
    },
    agility: {
        title: "Plan de Agilidad",
        description: "Ejercicios diseñados para mejorar la velocidad, la agilidad y la coordinación.",
        details: [
            "Calentamiento: 5 minutos de movilidad articular",
            "Circuito: 3x10 repeticiones de shuttle runs, cone drills, y ladder drills",
            "Enfriamiento: 5 minutos de estiramientos dinámicos"
        ]
    },
    balance: {
        title: "Plan de Equilibrio",
        description: "Ejercicios diseñados para mejorar el equilibrio y la coordinación.",
        details: [
            "Calentamiento: 5 minutos de movilidad articular",
            "Circuito: 3x10 repeticiones de ejercicios de equilibrio en una pierna, con los ojos cerrados y en superficies inestables",
            "Enfriamiento: 5 minutos de estiramientos estáticos"
        ]
    }
};


function showPlanDetails(planType) {
    const plan = exercisePlans[planType];
    const planDetailsContainer = document.getElementById('plan-details');
    
    planDetailsContainer.innerHTML = `
        <h2>${plan.title}</h2>
        <p>${plan.description}</p>
        <ul>
            ${plan.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
    `;
    
    document.getElementById('plan-modal').style.display = 'block';
}


document.querySelectorAll('.exercise-plan').forEach(planBox => {
    planBox.addEventListener('click', function() {
        const planType = this.getAttribute('data-plan');
        showPlanDetails(planType);
    });
});


document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('plan-modal').style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('plan-modal')) {
        document.getElementById('plan-modal').style.display = 'none';
    }
});













document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('add-testimonial-form');
    const testimonialList = document.getElementById('testimonial-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const textarea = document.getElementById('testimonial-text');
        const newTestimonialText = textarea.value.trim();
        if (newTestimonialText) {
            const newTestimonial = document.createElement('div');
            newTestimonial.classList.add('testimonial');
            newTestimonial.dataset.user = 'yo';
            newTestimonial.innerHTML = `
                <p>${newTestimonialText} - Yo</p>
                <button class="delete-btn">Eliminar</button>
            `;
            testimonialList.appendChild(newTestimonial);
            textarea.value = '';
        }
    });

    testimonialList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const testimonial = event.target.closest('.testimonial');
            if (testimonial.dataset.user === 'yo') {
                testimonial.remove();
            } else {
                alert('Solo puedes eliminar tus propios testimonios.');
            }
        }
    });
});
