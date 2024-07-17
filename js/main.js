const mario = document.querySelector('.mario')
const pikachu = document.querySelector('.pikachu')
const rob = document.querySelector('.rob')

document.querySelector('#marioNext').addEventListener('click', marioNext)
document.querySelector('#pikachuNext').addEventListener('click', pikachuNext)
document.querySelector('#robNext').addEventListener('click', robNext)

function marioNext(){
    mario.classList.remove('hidden')
    pikachu.classList.add('hidden')
    rob.classList.add('hidden')
}

function pikachuNext(){
    pikachu.classList.remove('hidden')
    mario.classList.add('hidden')
    rob.classList.add('hidden')
}

function robNext(){
    rob.classList.remove('hidden')
    mario.classList.add('hidden')
    pikachu.classList.add('hidden')
}