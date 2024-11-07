// scripts.js
document.getElementById('diary-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const entry = document.getElementById('diary-entry').value;
    const date = new Date().toISOString().split('T')[0];
    
    // Enviar a entrada para o backend (exemplo)
    fetch('/save-diary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, entry })
    }).then(response => {
        if (response.ok) {
            alert('Entrada salva com sucesso!');
        } else {
            alert('Erro ao salvar entrada.');
        }
    });
});

// Adicionar funcionalidades de calculadora
a// public/scripts.js
document.getElementById('diary-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const entry = document.getElementById('diary-entry').value;
    const date = new Date().toISOString().split('T')[0];
    
    fetch('/save-diary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, entry })
    }).then(response => {
        if (response.ok) {
            alert('Entrada salva com sucesso!');
            loadEntries();
        } else {
            alert('Erro ao salvar entrada.');
        }
    });
});

// Carregar as entradas ao carregar a página
window.onload = loadEntries;
// public/scripts.js

// Função para carregar as entradas
function loadEntries() {
    fetch('/get-diary')
        .then(response => response.json())
        .then(entries => {
            const entriesList = document.getElementById('entries-list');
            entriesList.innerHTML = '';
            entries.forEach(entry => {
                const listItem = document.createElement('li');
                listItem.textContent = `${entry.date}: ${entry.entry}`;
                entriesList.appendChild(listItem);
            });
        });
}

// Carregar as entradas ao carregar a página
window.onload = loadEntries;

document.getElementById('diary-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const entry = document.getElementById('diary-entry').value;
    const date = new Date().toISOString().split('T')[0];

    fetch('/save-diary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, entry })
    }).then(response => {
        if (response.ok) {
            alert('Entrada salva com sucesso!');
            loadEntries();
        } else {
            alert('Erro ao salvar entrada.');
        }
    });
});
