document.getElementById('form-deposito').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome-beneficiario').value.trim();
    const conta = document.getElementById('numero-da-conta').value.trim();
    const valor = parseFloat(document.getElementById('valor').value);
    const mensagem = document.getElementById('mensagem');
    let erros = [];

    // Validação do nome: pelo menos 2 palavras
    if (nome.split(' ').filter(w => w.length > 0).length < 2) {
        erros.push('O nome do beneficiário deve conter pelo menos 2 palavras.');
    }
    // Validação da conta: pelo menos 4 dígitos
    if (!/^\d{4,}$/.test(conta)) {
        erros.push('O número da conta deve ter pelo menos 4 dígitos.');
    }
    // Validação do valor: maior que 0
    if (isNaN(valor) || valor <= 0) {
        erros.push('O valor do depósito deve ser maior que 0.');
    }

    if (erros.length > 0) {
        mensagem.className = 'mensagem erro';
        mensagem.textContent = erros.join(' ');
    } else {
        mensagem.className = 'mensagem sucesso';
        mensagem.textContent = `Depósito de R$ ${valor.toFixed(2)} realizado para o cliente ${nome} (Conta: ${conta}) com sucesso!`;
    }
});
