function retrieveRepos() {
    const user = 'GabrielVictalvino'
    const container = document.getElementById("gallery")

    axios.get(`https://api.github.com/users/${user}/repos`).then((result) =>{
        let { data } = result

        data.forEach(element => {
            container.insertAdjacentHTML("beforeend", `
            <div class="post">
                <img src="https://github.com/${user}/${element.name}/blob/main/foto.png?raw=true" alt="imagens" class="postImage">
                <a href="${element.html_url}" class="postLink">${element.name}</a>
            </div>
            `)
        });
    })
}

function showHome(){
    document.getElementById("gallery").style.display = 'none';    
    document.getElementById("profile").style.display = 'grid';    

}

function showAbout(){
    document.getElementById("gallery").style.display = 'grid';    
    document.getElementById("profile").style.display = 'none';    
}