function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg' 
        document.body.style.background = '#e6b974'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg' 
        document.body.style.background = '#7d93ab'
    } else {
        img.src = 'noite.jpg' 
        document.body.style.background = '#5f696a'
    }
}

