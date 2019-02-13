module.exports = {
  historia2: function(nombre, lugar, edad){
    if (edad > 18){
      return `perfecto puedes ingresar ${edad} `
    }
    else if (edad < 10){
      return `no puedes ingresar`
    }

    return `no puedes ingresar`

  }
}
