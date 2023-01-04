function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (formAno.value.lenght == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fgen = document.getElementsByName('radgen')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fgen[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancamenino.jpg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovemhomen.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomen.jpg')
            } else {
                img.setAttribute('src', 'idosohomen.jpg')
            }
        } else if (fgen[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancamenina.jpg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultamulher.jpg')
            } else {
                img.setAttribute('src', 'idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}