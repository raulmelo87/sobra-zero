// Verifica se o formulário de doação está presente na página
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio do formulário padrão

        const foodName = document.getElementById('foodName').value;
        const description = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;
        const expirationDate = document.getElementById('expirationDate').value;
        const location = document.getElementById('location').value;
        const status = document.getElementById('status').value; // Captura o status inicial

        const donation = {
            foodName,
            description,
            quantity,
            expirationDate,
            location,
            status
        };

        // Recupera as doações existentes no Local Storage
        const donations = JSON.parse(localStorage.getItem('donations')) || [];

        // Adiciona a nova doação
        donations.push(donation);

        // Salva no Local Storage
        localStorage.setItem('donations', JSON.stringify(donations));

        alert('Doação registrada com sucesso!');
        donationForm.reset();
    });
}


// Função para cancelar doação e voltar para a página inicial
function cancelDonation() {
    if (confirm('Tem certeza que deseja cancelar?')) {
        window.location.href = 'index.html';
    }
}

