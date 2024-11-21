// Carrega dados do Local Storage
function carregarAlimentos() {
    const alimentos = JSON.parse(localStorage.getItem('donations')) || [];

    const tabelaBody = document.querySelector('#alimentos-table tbody');
    const mensagemSemDados = document.querySelector('#no-data-message');

    if (alimentos.length === 0) {
        mensagemSemDados.style.display = 'block';
        return;
    }

    mensagemSemDados.style.display = 'none';

    alimentos.forEach((alimento, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${alimento.foodName}</td>
            <td>${alimento.description}</td>
            <td>${alimento.quantity}</td>
            <td>${alimento.expirationDate}</td>
            <td>${alimento.location}</td>
            <td>
                <select class="status-select" data-index="${index}">
                    <option value="disponível" ${alimento.status === 'disponível' ? 'selected' : ''}>Disponível</option>
                    <option value="reservado" ${alimento.status === 'reservado' ? 'selected' : ''}>Reservado</option>
                    <option value="entregue" ${alimento.status === 'entregue' ? 'selected' : ''}>Entregue</option>
                </select>
            </td>
        `;

        tabelaBody.appendChild(row);
    });

    // Adiciona evento de mudança de status
    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', function () {
            const index = this.dataset.index;
            alimentos[index].status = this.value;
            localStorage.setItem('donations', JSON.stringify(alimentos));
        });
    });
}


// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', carregarAlimentos);
