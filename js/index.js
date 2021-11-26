// расстояние между словами
// offsetBetweenParts = (value) => {
//     const parts = document.querySelectorAll('.wheel__part')
//
//     let deg = 50
//
//     for (const part of parts) {
//         part.style.transform = `translate(${ deg }px)`
//         deg += value
//     }
// }
// // offsetBetweenParts(50)

const render = (container, template, place = 'beforeend') => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template)
  }
}

// расстояние между буквами
const rotateBetweenItems = (parent, value, startDeg = 0) => {
  const letters = document.querySelectorAll(`${ parent } .wheel__item`)
  
  let deg = startDeg
  
  for (let letter of letters) {
    letter.style.transform = `rotate(${ deg }deg)`
    deg += value
  }
}

// -------------------------
const createTemplateItem = () => {
  return `
    <div class="wheel__item">
      <div class="wheel__item-inner"></div>
    </div>
    `
}

const wheelPartOne = document.querySelector('.wheel__part--one')
const wheelPartTwo = document.querySelector('.wheel__part--two')
const wheelPartThree = document.querySelector('.wheel__part--three')

for (let i = 0; i < 18; i++) {
  render(wheelPartOne, createTemplateItem())
}
for (let i = 0; i < 25; i++) {
  render(wheelPartTwo, createTemplateItem())
}
for (let i = 0; i < 30; i++) {
  render(wheelPartThree, createTemplateItem())
}

rotateBetweenItems('.wheel__part--one', 20)
rotateBetweenItems('.wheel__part--two', 15)
rotateBetweenItems('.wheel__part--three', 12)

const text = ' FEEL THE POWER    JAVASCRIPT '.split('')
const textLength = text.length

const createColorBox = () => {
  const parts = document.querySelectorAll('.wheel__item')
  const partsItems = document.querySelectorAll('.wheel__item-inner')
  
  for (let i = 0; i <= partsItems.length - 1; i++) {
    setTimeout(() => {
  
      for (let j = 0; j < parts.length; j++) {
        parts[i].style.outline = '1px solid red'
      }
  
      if (i >= partsItems.length - 1) {
        for (let k = i; k >= 0; k--) {
          setTimeout(() => {
            console.warn(k)
            parts[k].style.outline = '1px solid white'
  
            partsItems[k].style.backgroundImage = 'linear-gradient(140deg, white, rgba(110, 110, 110, 0.5)'
            partsItems[k].style.borderRadius = '0%'
          }, 100 * k)
        }
      }
      
      if (i < textLength) {
          partsItems[i].innerHTML = text[i]
      }
      
      partsItems[i].style.backgroundImage = 'linear-gradient(140deg, red, rgba(0, 0, 0, 0.5)'
      partsItems[i].style.borderRadius = '50%'
      partsItems[i].style.opacity = '1'
    }, 100 * i)
  }
  
}

createColorBox()
