/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// let t=0
// bar.style.width=0
// const barAnimation = setInterval(()=>{
//     bar.style.width=t+'%'
//     t++>=72 && clearInterval(barAnimation)
// },10)

//const getRandom = (min, max) => Math.floor(Math.random()*(max-min)+min);
//console.log(getRandom(10, 50));

function getRandom(min, max)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = Math.floor(Math.random()*(max-min)+min);
        
    // 결과 출력
    resultElement.innerText = number;
  }