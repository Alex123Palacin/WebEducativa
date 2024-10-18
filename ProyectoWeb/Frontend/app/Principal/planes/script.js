document.getElementById('personalBtn').addEventListener('click', function() {
    // Mostrar planes personales y ocultar planes de duo y team
    document.querySelectorAll('.personal-plan').forEach(function(plan) {
        plan.style.display = 'block';
    });
    document.querySelectorAll('.duo-plan').forEach(function(plan) {
        plan.style.display = 'none';
    });
    document.querySelectorAll('.team-plan').forEach(function(plan) {
        plan.style.display = 'none';
    });
    
    // Cambiar estilo activo
    this.classList.add('active');
    document.getElementById('duoBtn').classList.remove('active');
    document.getElementById('teamBtn').classList.remove('active');
});

document.getElementById('duoBtn').addEventListener('click', function() {
    // Mostrar planes duo y ocultar planes personales y de team
    document.querySelectorAll('.duo-plan').forEach(function(plan) {
        plan.style.display = 'block';
    });
    document.querySelectorAll('.personal-plan').forEach(function(plan) {
        plan.style.display = 'none';
    });
    document.querySelectorAll('.team-plan').forEach(function(plan) {
        plan.style.display = 'none';
    });
    
    // Cambiar estilo activo
    this.classList.add('active');
    document.getElementById('personalBtn').classList.remove('active');
    document.getElementById('teamBtn').classList.remove('active');
});

document.getElementById('teamBtn').addEventListener('click', function() {
    // Mostrar planes team y ocultar planes personales y de duo
    document.querySelectorAll('.team-plan').forEach(function(plan) {
        plan.style.display = 'block';
    });
    document.querySelectorAll('.personal-plan').forEach(function(plan) {
        plan.style.display = 'none';
    });
    document.querySelectorAll('.duo-plan').forEach(function(plan) {
        plan.style.display = 'none';
    });
    
    // Cambiar estilo activo
    this.classList.add('active');
    document.getElementById('personalBtn').classList.remove('active');
    document.getElementById('duoBtn').classList.remove('active');
});
