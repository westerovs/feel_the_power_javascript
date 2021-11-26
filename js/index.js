import { createTemplateItem } from './view/itemView.js'
import { render, rotateBetweenItems } from './utils/utils.js'

class animateWheel {
  constructor() {
    this.wheelPartOne = document.querySelector('.wheel__part--one')
    this.wheelPartTwo = document.querySelector('.wheel__part--two')
    this.wheelPartThree = document.querySelector('.wheel__part--three')
  
    this.CountWheelParts = {
      first: 18,
      second: 25,
      third: 30,
    }
  }
  
  init() {
    this.renderItems()
    
    rotateBetweenItems('.wheel__part--one', 20)
    rotateBetweenItems('.wheel__part--two', 15)
    rotateBetweenItems('.wheel__part--three', 12)
    
    const text = ' FEEL THE POWER    JAVASCRIPT '.split('')
    const textLength = text.length
    
    // createColorBox = () => {
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
  
  renderItems = () => {
    for (let i = 0; i < this.CountWheelParts.first; i++) {
      render(this.wheelPartOne, createTemplateItem())
    }
    for (let i = 0; i < this.CountWheelParts.second; i++) {
      render(this.wheelPartTwo, createTemplateItem())
    }
    for (let i = 0; i < this.CountWheelParts.third; i++) {
      render(this.wheelPartThree, createTemplateItem())
    }
  }
  
  createStepOne = () => {
  
  }
  
  createStepTwo = () => {
  
  }
  
  createStepThree = () => {
  
  }
}

new animateWheel().init()


// const this.wheelPartOne = document.querySelector('.wheel__part--one')
// const this.wheelPartTwo = document.querySelector('.wheel__part--two')
// const this.wheelPartThree = document.querySelector('.wheel__part--three')

// for (let i = 0; i < 18; i++) {
//   render(this.wheelPartOne, createTemplateItem())
// }
// for (let i = 0; i < 25; i++) {
//   render(this.wheelPartTwo, createTemplateItem())
// }
// for (let i = 0; i < 30; i++) {
//   render(this.wheelPartThree, createTemplateItem())
// }
//
// rotateBetweenItems('.wheel__part--one', 20)
// rotateBetweenItems('.wheel__part--two', 15)
// rotateBetweenItems('.wheel__part--three', 12)
//
// const text = ' FEEL THE POWER    JAVASCRIPT '.split('')
// const textLength = text.length
//
// const createColorBox = () => {
//   const parts = document.querySelectorAll('.wheel__item')
//   const partsItems = document.querySelectorAll('.wheel__item-inner')
//
//   for (let i = 0; i <= partsItems.length - 1; i++) {
//     setTimeout(() => {
//
//       for (let j = 0; j < parts.length; j++) {
//         parts[i].style.outline = '1px solid red'
//       }
//
//       if (i >= partsItems.length - 1) {
//         for (let k = i; k >= 0; k--) {
//           setTimeout(() => {
//             console.warn(k)
//             parts[k].style.outline = '1px solid white'
//
//             partsItems[k].style.backgroundImage = 'linear-gradient(140deg, white, rgba(110, 110, 110, 0.5)'
//             partsItems[k].style.borderRadius = '0%'
//           }, 100 * k)
//         }
//       }
//
//       if (i < textLength) {
//           partsItems[i].innerHTML = text[i]
//       }
//
//       partsItems[i].style.backgroundImage = 'linear-gradient(140deg, red, rgba(0, 0, 0, 0.5)'
//       partsItems[i].style.borderRadius = '50%'
//       partsItems[i].style.opacity = '1'
//     }, 100 * i)
//   }
//
// }
//
// createColorBox()
