
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

function redeStyle(){
    estilo.style.display = 'block'
}
