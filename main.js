document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.github.com/users/osmarbaia';

    async function fetchGitHubData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Preenche os dados da página
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.profile-name').textContent = data.name || 'Nome não disponível';
            document.querySelector('.profile-username').textContent = '@'+data.login;
            document.querySelector('.num-repositorios').textContent = data.public_repos;
            document.querySelector('.num-seguidores').textContent = data.followers;
            document.querySelector('.num-seguindo').textContent = data.following;
            const link = document.querySelector('.profile-link').href = data.html_url;

        } 
        catch (error) {
            console.error('Erro ao buscar dados do GitHub:', error);
        }
    }

    fetchGitHubData();
});
