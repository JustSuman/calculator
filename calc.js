function display(value) {
      document.getElementById("display").value += value
}
document.getElementById("clearButton").onclick = function () {
      let b = document.getElementById("display").value
      let a = b.slice(0, -1)
      document.getElementById("display").value = a

}


function result() {
      let a = document.getElementById("display").value
      document.getElementById("display").value = eval(a)
      document.getElementById("history").innerHTML += `${eval(a)}\n`
}