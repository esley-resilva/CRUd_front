const apiBaseUrl = 'http://localhost:3000/api/clientes';

async function createCliente() {
    const nome = document.getElementById('nome').value;
    const nomeGato = document.getElementById('nomeGato').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    const response = await fetch(apiBaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, nomeGato, dataNascimento })
    });

    if (response.ok) {
        alert('Cliente criado com sucesso!');
        loadClientes();
    } else {
        alert('Erro ao criar cliente.');
    }
}

async function loadClientes() {
    const response = await fetch(apiBaseUrl);
    const clientes = await response.json();
    const clientesDiv = document.getElementById('clientes');
    clientesDiv.innerHTML = '';

    clientes.forEach(cliente => {
        const clienteDiv = document.createElement('div');
        clienteDiv.textContent = `Nome: ${cliente.nome}, Nome do Gato: ${cliente.nomeGato}, Data de Nascimento: ${new Date(cliente.dataNascimento).toLocaleDateString()}`;
        clientesDiv.appendChild(clienteDiv);
    });
}

async function searchClientes() {
    const searchValue = document.getElementById('search').value;
    const response = await fetch(`${apiBaseUrl}/search?nome=${searchValue}`);
    const clientes = await response.json();
    const clientesDiv = document.getElementById('clientes');
    clientesDiv.innerHTML = '';

    clientes.forEach(cliente => {
        const clienteDiv = document.createElement('div');
        clienteDiv.textContent = `Nome: ${cliente.nome}, Nome do Gato: ${cliente.nomeGato}, Data de Nascimento: ${new Date(cliente.dataNascimento).toLocaleDateString()}`;
        clientesDiv.appendChild(clienteDiv);
    });
}

// Carrega a lista de clientes ao carregar a página
window.onload = loadClientes;
