const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = `<img src="./media/aprovado.png" alt="emoji festejando"/>`; 
const imgReprovado = `<img src="./media/Reprovado.png" alt="emoji decepcionado"/>`; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>` // O comando += serve para concatenar, exemplo de que seria "linha + linha 'outro conteudo
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}`
    // Acima utilizamos um Operador Ternário, refere-se ao usar operador condicional que usa três operandos.
    // Ele é uma alternativa mais compacta à instrução if-else. '? = if' e ': = else'.
    linha += `</tr>`

    linhas += linha;

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});