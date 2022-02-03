function calcular(n1, n2) {
  n1 = perseFloat(document.getElementById("n1").value)
  n2 = perseFloat(document.getElementById("n2").value)

  selector = document.getElementById("selector").value
  switch (selector) {
    case '+':
      calculo = (n1 + n2)
      document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
      break

    case '-':
      calculo = (n1 - n2)
      document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`
      break

    case '/':
      calculo = (n1 / n2);
      if (Number.isNaN) {
        document.getElementById("resultado").innerHTML = `Insira um divisivel valido`
      } else {
        document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} / ${n2} é = ${calculo}`
        break
      }
  }
}