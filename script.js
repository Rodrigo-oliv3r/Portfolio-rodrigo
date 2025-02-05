// Botões da pagina inicial
function clicarSobre(){
    if (bio.style.display == 'none'){
        bio.style.display = 'block'
        corsobre.style.backgroundImage = 'linear-gradient(to bottom, rgb(247, 247, 188), rgba(133, 248, 242, 0.692))'
        corsobre.style.color = 'block'
        
    }else{
        bio.style.display = 'none'
        corsobre.style = 'reset'
    }
}

function clicarProjetos(){
    if (pro_conteudo.style.display == 'none'){
        pro_conteudo.style.display = 'block'
        corprojetos.style.backgroundImage = 'linear-gradient(to bottom, rgb(247, 247, 188), rgba(133, 248, 242, 0.692))'
        corprojetos.style.color = 'block'
        
    }else{
        pro_conteudo.style.display = 'none'
        corprojetos.style = 'reset'
    }
}

function clicarRedes(){
    if (redes_sociais.style.display == 'none'){
        redes_sociais.style.display = 'flex'
        corredes.style.backgroundImage = 'linear-gradient(to bottom, rgb(247, 247, 188), rgba(133, 248, 242, 0.692))'
        corredes.style.color = 'block'
        
    }else{
        redes_sociais.style.display = 'none'
        corredes.style = 'reset'
    }
}

// Botões de rede sociais
// Facebook
function facebookEntrar()  {
    estilo_face.style.display = 'block'
}
function facebookSair(){
    estilo_face.style.display = 'none'
}

// Instagram
function instagramEntrar() {
    estilo_insta.style.display = 'block'
}
function instagramSair(){
    estilo_insta.style.display = 'none'
}

// Whatsapp
function whatsappEntrar(){
    estilo_whats.style.display = 'block'
}
function whatsappSair(){
    estilo_whats.style.display = 'none'
}

// Github
function githubEntrar(){
    estilo_git.style.display = 'block'
}
function githubSair(){
    estilo_git.style.display = 'none'
}

// Linkedin
function linkedinEntrar(){
    estilo_lk.style.display = 'block'
}
function linkedinSair(){
    estilo_lk.style.display = 'none'
}

