document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagemElementoSucesso = document.getElementById('mensagemSucesso');
    const mensagemElementoErro = document.getElementById('mensagemErro');

    if (campoB > campoA) {
        mensagemElementoSucesso.innerHTML = 'Formulário válido! Campo B é maior que Campo A.';
        mensagemElementoErro.innerHTML = ''; // Limpa a mensagem de erro
    } else {
        mensagemElementoErro.innerHTML = 'Formulário inválido! Campo B deve ser maior que Campo A.';
        mensagemElementoSucesso.innerHTML = ''; // Limpa a mensagem de sucesso
    }

    // Limpa a mensagem após 3 segundos (opcional)
    setTimeout(() => {
        mensagemElementoSucesso.innerHTML = '';
        mensagemElementoErro.innerHTML = '';
    }, 3000);
});