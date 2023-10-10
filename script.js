const fs = require('fs'); // Módulo 'fs' para manipulação de arquivos

// Captura o formulário de registro de personagens
const formulario = document.getElementById('formulario');

// Captura a lista de planetas
const listaPlanetas = document.getElementById('lista-planetas');

// Adiciona um evento de envio ao formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura o nome inserido pelo usuário
    const nomePersonagem = document.getElementById('nome').value;

    // Cria um novo elemento de lista para o personagem
    const novoPersonagem = document.createElement('li');
    novoPersonagem.textContent = nomePersonagem;

    // Adiciona o personagem à lista de planetas
    listaPlanetas.appendChild(novoPersonagem);

    // Limpa o campo de nome após o registro
    document.getElementById('nome').value = '';

    // Obtém os personagens existentes do arquivo JSON
    const personagens = JSON.parse(fs.readFileSync('banco.json', 'utf8'));

    // Adiciona o novo personagem ao array de personagens
    personagens.push({ nome: nomePersonagem });

    // Escreve os personagens atualizados de volta no arquivo JSON
    fs.writeFileSync('banco.json', JSON.stringify(personagens, null, 2));
});