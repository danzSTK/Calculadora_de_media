const form = document.getElementById('formulario');
const imgAprovado = '<img src="./images/images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/images/reprovado.png" alt="Emoji Triste" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Qual a média em sua escola?"));

var linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        var linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha   
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

function atualizaMedia(){
    const media = calculaMediaFinal();
    document.getElementById('media-final').innerHTML = media;
    document.getElementById('resultado-final').innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;
    
    
    
}

function calculaMediaFinal(){
    var somaDasNotas = 0;

    for(var i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length;


}