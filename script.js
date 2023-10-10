const fs = require('fs'); // Módulo 'fs' para manipulação de arquivos

// Função para criar um novo planeta
function criarNovoPlaneta() {
    // Crie seu código para gerar um novo planeta aleatório aqui
    const novoPlaneta = "Planeta " + (listaPlanetas.childElementCount + 1);

    // Adicione o novo planeta à lista de planetas
    const novoPlanetaElemento = document.createElement('li');
    novoPlanetaElemento.textContent = novoPlaneta;
    listaPlanetas.appendChild(novoPlanetaElemento);

    // Atualize a data e hora do metaverso (avançando 12 horas)
    atualizarHoraMetaverso();
}

// Função para avançar o tempo em 12 horas
function atualizarHoraMetaverso() {
    // Adicione aqui a lógica para atualizar a hora do metaverso
    // Você pode usar uma variável global para rastrear a hora atual
    // e incrementá-la em 12 horas a cada vez que um novo planeta é criado
}

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

    // Crie um novo planeta quando um personagem é registrado
    criarNovoPlaneta();
});