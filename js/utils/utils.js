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

export {
  render,
  rotateBetweenItems,
}
