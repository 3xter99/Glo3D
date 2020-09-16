'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import changePhoto from "./modules/changePhoto";
import inputNumbers from "./modules/inputNumber";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";


countTimer('20 september 2020');

//  _________анимация меню____
toggleMenu()

//  3) _________Popup_________-
togglePopUp()

// 4) _______Табы________-
tabs()

//    5)_________слайдер_________
slider()

//    Смена фото у команды
changePhoto()

//    Запрет ввода букв
inputNumbers()

//    Калькулятор
calc(100)

//отправка формы
sendForm('form1')
sendForm('form2')
sendForm('form3', 'white')

