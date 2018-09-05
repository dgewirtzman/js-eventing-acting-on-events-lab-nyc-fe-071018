// var dodger = document.getElementById('dodger')
// var game = document.getElementById('game')


// function moveDodgerLeft() {
//   var leftNumbers = dodger.style.left.replace('px', '')
//   var left = parseInt(leftNumbers, 10)
 
//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`
//   }
// }

// document.addEventListener('keydown', function(e) {
//   if (e.which === 37) {
//     moveDodgerLeft()
//   }
// })

// function moveDodgerRight() {
//   var rightNumber = dodger.style.left.replace('px', '')
//   var right = parseInt(rightNumber, 10)
//   if (right < (game.offsetWidth - dodger.offsetWidth)) {
//     dodger.style.left = `${right + 1}px`
//   }
// }

// document.addEventListener('keydown', function(event) {
//   if (event.which === 39) {
//     moveDodgerRight()
//   }
// })

const element = document.getElementById('dodger')

document.addEventListener('keydown', (event) => {
    if (event.which === 37) {
      let previousLeft = element.style.left
      let previousLeftNumber = parseInt(previousLeft.replace('px', ''), 10)
      if (previousLeftNumber > 0) {
        let newLeftNumber = (previousLeftNumber - 15) + 'px'
        element.style.left = newLeftNumber
        console.log(newLeftNumber)
      }
    }
    })
    
function moveDodgerRight() {
  if (event.which === 39) {
    let previousRight = element.style.left
    let previousRightNumber = parseInt(previousRight.replace('px', ''), 10)
    if (previousRightNumber < 360) {
      let newRightNumber = (previousRightNumber + 15) + 'px'
      element.style.left = newRightNumber
      console.log(newRightNumber)
      }
  }
}

// moveDodgerRight()

document.addEventListener('keydown', (event) => {
  if (event.which === 39) {
    moveDodgerRight()
  }
})