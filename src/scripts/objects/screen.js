const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =

        `<div class="info">
            <img src="${user.avatarUrl}" alt="avatar do usuario" />

            <div class="data">
                <h1>${user.name ?? 'Não possue nome de perfil'}</h1>
                <p>${user.bio ?? 'Não possue bio no perfil'}</p>
                <p>${user.followers} Followers</p>
                <p>${user.following} Following</p>
            </div>
        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += 
            
            `<li>
                <a href="${repo.html_url}" target="_blank">${repo.name}
                
                    <div class="info-repo">
                        <span class="info-repo-itens ">🍴${repo.forks}</span>
                        <span class="info-repo-itens ">⭐${repo.stargazers_count}</span>
                        <span class="info-repo-itens ">👀${repo.watchers_count}</span>
                        <span class="info-repo-itens ">💻${repo.language}</span>
                    </div>
                </a>
            </li>`
        )
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += 
            
            `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>
                    ${repositoriesItens}
                </ul>
            </div>`
        }

        let eventItens = ''
        user.events.forEach(event => {
            if (event.type === "PushEvent" || event.type === "CreateEvent"){
                if(event.type === "PushEvent"){
                    eventItens += 
                    `<li>
                        <p class="name-repo">${event.repo.name}: <span> = ${event.payload.commits[0].message}</span></p>
                        <br>
                    </li>`
                }

                if (event.type === "CreateEvent"){
                    eventItens += 
                    `<li>
                        <p class="name-repo">${event.repo.name}: <span> - Commit sem mensagem</span></p>
                        <br>
                    </li>`
                }
            }
        });

        this.userProfile.innerHTML +=
            `<div class="repositories section">
                <h2>Eventos</h2>
                <ul class="events">
                    ${eventItens}
                </ul>
            </div>`

    },
    renderNotFound(){
        this.userProfile.innerHTML = "Usuário não encontrado"
    },
}

export { screen }