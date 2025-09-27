document.getElementById('buscar').addEventListener('click', function() {
    var cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('Digite um CEP válido com 8 dígitos.');
        return;
    }
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                var data = JSON.parse(xhttp.responseText);
                if (data.erro) {
                    alert('CEP não encontrado.');
                    limparCampos();
                } else {
                    document.getElementById('logradouro').value = data.logradouro || '';
                    document.getElementById('bairro').value = data.bairro || '';
                    document.getElementById('cidade').value = data.localidade || '';
                    document.getElementById('uf').value = data.uf || '';
                }
            } else {
                alert('Erro ao buscar o CEP.');
                limparCampos();
            }
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
});

function limparCampos() {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}
