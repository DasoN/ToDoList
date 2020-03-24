let obj = {
    name: 'Vadim',
    com: "akakakak a a k aakaa"
}

localStorage.setItem(0, JSON.stringify(obj))

let m = JSON.parse(localStorage.getItem(0))
console.log(m.name)