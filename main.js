let form = document.getElementById("form");

let data = []
// let text = document.getElementById("text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value =form.text.value
    


data = [...data, {id:Date.now(), text: value}];
// console.log(data.)
})
