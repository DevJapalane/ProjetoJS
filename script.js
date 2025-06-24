const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = `<img src="./media/aprovado.png" alt="emoji festejando"/>`; 
const imgReprovado = `<img src="./media/reprovado.png" alt="emoji decepcionado"/>`; 
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'; 
const notaMinima = parseFloat(prompt('Digite a nota mínima para aprovação'));

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));


        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>` // O comando += serve para concatenar, exemplo de que seria "linha + linha 'outro conteudo
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}`
        // Acima utilizamos um Operador Ternário, refere-se ao usar operador condicional que usa três operandos.
        // Ele é uma alternativa mais compacta à instrução if-else. '? = if' e ': = else'.
        linha += `</tr>`

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
      let somaDasNotas = 0;
    
    for (let i=0; i < notas.length; i++){
        somaDasNotas += notas[i]; // Laço para calcular a média
    }

    return somaDasNotas / notas.length;
}