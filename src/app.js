// import {default as newDefault} from './script';  // file downloaded from daftacademy repository url: https://github.com/daftcode/daftacademy-frontend_levelup-spring2019/blob/master/prace_domowe/lekcja_1/script.js#L3
import './scss/style.scss'


// newDefault()
const bar = document.querySelector('.main__icon');
bar.addEventListener('click',()=>{
    document.querySelector('.main__nav').classList.toggle('main__nav--mobile');
})  
