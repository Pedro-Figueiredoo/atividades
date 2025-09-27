document.addEventListener('DOMContentLoaded', () => {
    buscarUsuario('pedro-figueiredoo');
    document.getElementById('buscarBtn').addEventListener('click', () => {
        const usuario = document.getElementById('usuarioInput').value.trim();
        if (usuario) buscarUsuario(usuario);
    });
});

async function buscarUsuario(usuario) {
    const apiUrl = `https://api.github.com/users/${usuario}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Usuário não encontrado');
        const data = await response.json();
        document.querySelector('.profile-avatar').src = data.avatar_url;
        document.querySelector('.profile-name').textContent = data.name || data.login;
        document.querySelector('.profile-username').textContent = `@${data.login}`;
        document.querySelectorAll('.numbers-item')[0].lastChild.textContent = data.public_repos;
        document.querySelectorAll('.numbers-item')[1].lastChild.textContent = data.followers;
        document.querySelectorAll('.numbers-item')[2].lastChild.textContent = data.following;
        document.querySelector('.profile-link').href = data.html_url;
        document.querySelector('.profile-link').textContent = 'Ver no Github';
    } catch (error) {
        alert('Erro ao buscar dados do usuário: ' + error.message);
    }
}
