'use strict';

let newGame = true;

const instruction = document.getElementById('instruction');
// const score = document.getElementById('score');
const buttons = [...document.getElementById('square').getElementsByTagName('button')];
// const points = document.getElementById('points');
// const record = document.getElementById('record');
// const recordPoints = document.getElementById('recordPoints');
const pointsConteiner = document.getElementById('pointsConteiner');
// Убрать в другой файл

buttons.forEach((elem)=>{
    elem.addEventListener('click',(event)=>{
        if(newGame === true){
            event.currentTarget.textContent = '●';

            instruction.classList.add('hidden');
            pointsConteiner.classList.remove('hidden');

            newGame = false;
        }
    })
})

