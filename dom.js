function colorButton() {
    let div1 = document.getElementById("1"); let div2 = document.getElementById("3"); let div3 = document.getElementById("2")
    div1.style.backgroundColor = "red"; div2.style.backgroundColor = "blue"; div3.style.backgroundColor = "yellow"
}

function idOfTheDiv1() {
    console.log("Hi from div 1")
}

function idOfTheDiv2() {
    console.log("Hi from div 2")
}

let outerDiv = document.getElementById("outer")
function outerCall() { outerDiv.addEventListener('click', event => {
    event.preventDefault(); document.getElementById("outputtext").innerHTML = event.target.getAttribute('id')
    console.log(event.target.getAttribute('id'))
})}