if (localStorage.length > 100){}else{
    window.addEventListener('load', () => {
           let main = document.querySelector('main')
           let body = document.querySelector('body')

           let textBtn = document.querySelector('#textBtn')
           let tInput = document.querySelector('#textInput')
           let mainBtn = document.querySelector('#mainBtn')
           let showBlock = document.querySelector('#show')
           let tA = document.querySelector('#textArea')

           let errorBlock = document.createElement('div')
           errorBlock.classList.add('errorBlock')

           let counter = true
           // creating block

           let ID = 0
           //loading data
           for (let i = 0; i < localStorage.length; i++) {
               let t = JSON.parse(localStorage.getItem(i))
               if (t == null || t == 'null') {} else {
                   creating(t.value, t.com)
               }
           }

           mainBtn.addEventListener('click', countFunc)

           function countFunc() {
               if (counter == true) {
                   showBlock.style.display = "block"
                   showBlock.style.border = "1px solid green"
                   body.style.background = "rgba(0, 0, 0, 0.2)"
                   main.style.display = "none"
               } else {
                   showBlock.style.display = "none"
                   main.style.display = "block"
                   body.style.background = ""
               }
               counter = !counter
           }

           textBtn.addEventListener('click', (e) => {
               if (tInput.value == '') {} else {
                   if (tInput.value.length < 14){
                       creating(tInput.value, tA.value)
                       tInput.style.border = '1px solid green'
                       errorBlock.innerText = "Block was appended"
                       errorBlock.style.background = 'lightgreen'
                       errorBlock.style.border = '1px solid green'

                       body.append(errorBlock)
                       setTimeout(()=>{
                           tInput.style.border = ''
                           body.removeChild(errorBlock)
                       }, 2000)
                   }else{
                       tInput.style.border = '1px solid red'
                       errorBlock.innerText = "Error length"
                       errorBlock.style.background = '#df7861'
                       errorBlock.style.border = '1px solid firebrick'

                       body.append(errorBlock)
                       setTimeout(()=>{
                           tInput.style.border = ''
                           body.removeChild(errorBlock)
                       }, 2000)
                   }
               }
               tInput.value = ''
               tA.value = ''
           })

           function creating(t, tA) {
               let what = document.createElement('div')
               what.innerText = 'Do'
               what.classList.add('what')

               let block = document.createElement('div')
               block.classList.add('block')

               let textArea = document.createElement('div')
               textArea.innerText = tA
               textArea.classList.add('textArea')

               let btn = document.createElement('button')
               btn.classList.add('btn')
               btn.innerText = 'Done'

               let op = document.createElement('div')
               op.classList.add('op')

               let btnp = document.createElement('button')
               btnp.classList.add('btnp')
               btnp.innerText = 'Delete'

               let text = document.createElement('div')
               text.innerText = t
               console.log(t, t.length)
               text.classList.add('value')

               op.addEventListener("click", () => {
                   if (counter == true) {
                       main.style.display = "none"
                       mainBtn.style.display = "none"
                   } else {
                       main.style.display = ""
                       mainBtn.style.display = ""
                   }
                   counter = !counter

                   let bl = document.createElement('div')
                   bl.classList.add('pushBlock')
                   let wh = document.createElement('div')
                   wh.innerText = 'Do'
                   wh.classList.add('whB')
                   let textT = document.createElement('input')
                   if (t.length > 16) {
                       alert('Error length')
                   } else {
                       textT.value = t
                   }
                   textT.classList.add('tB')
                   let comm = document.createElement('textarea')
                   comm.value = tA
                   comm.classList.add('commB')
                   let color = document.createElement('div')
                   color.classList.add('colorB')
                   let save = document.createElement('button')
                   save.innerText = 'save'
                   save.classList.add('saveB')
                   let tags = document.createElement('div')
                   tags.classList.add('tagsB')
                   let close = document.createElement('button')
                   close.classList.add('closeB')

                   close.addEventListener('click', () => {
                       if (counter == false) {
                           main.style.display = ""
                           mainBtn.style.display = ""
                           body.removeChild(bl)
                       }
                       counter = !counter
                   })

                   save.addEventListener('click', () => {
                       console.log(textT.innerText)
                       text.innerText = textT.value
                       console.log(textT.innerText)
                       textArea.innerText = comm.value

                       localStorage.clear()
                       let blocks = document.querySelectorAll('.block')
                       blocks.forEach((el, id) => {
                           localStorage.setItem(id, JSON.stringify({
                               value: el.childNodes[1].innerText,
                               com: el.childNodes[2].innerText
                           }))
                       })
                       if (counter == false) {
                           main.style.display = ""
                           mainBtn.style.display = ""
                           body.removeChild(bl)
                       }
                       counter = !counter
                   })

                   bl.append(wh, textT, comm, color, save, tags, close)
                   body.append(bl)

               })

               btn.addEventListener('click', () => {
                   if (text.style.textDecorationLine == 'line-through') {
                       text.style.textDecorationLine = 'none'
                   } else {
                       text.style.textDecorationLine = 'line-through'
                   }
               })
               localStorage.setItem(ID, JSON.stringify({
                   value: t,
                   com: tA
               }))
               ID++

               block.append(what, text, textArea, btn, btnp, op)
               btnp.addEventListener('click', () => {
                   main.removeChild(block)
                   localStorage.clear()
                   let blocks = document.querySelectorAll('.block')
                   blocks.forEach((el, id) => {
                       localStorage.setItem(id, JSON.stringify({
                           value: el.childNodes[1].innerText,
                           com: el.childNodes[2].innerText
                       }))
                   })
               })
               main.append(block)
           }
       })
}
