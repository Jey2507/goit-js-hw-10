'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import close from "../img/closeicon.svg"
import okayIcon from "../img/okay.svg"

const form = document.querySelector('.form');
const input = document.querySelector('input[type="number"]')
const inputPromis = document.querySelectorAll('[name="state"]');

const fulfieldIzi = (delay) => {
    iziToast.show({
        message: `Fulfilled promise in ${delay}ms`,
        iconUrl: okayIcon,
        color: '#59a10d',
        messageColor: '#ffffff',
        titleColor: '#ffffff',
        theme: 'dark',
        timeout: 3000,
        position: 'topRight'
    } )
}

const rejectedIzi = (delay) => {
    iziToast.show({
        message: `Rejected promise in ${delay}ms`,
        iconUrl: close,
        color: '#ef4040',
        messageColor: '#ffffff',
        titleColor: '#ffffff',
        theme: 'dark',
        timeout: 3000,
        position: 'topRight'
    } )
}

const promisFun = (event) => {
    let delay = parseInt(input.value);
    event.preventDefault();

    const promisCheck = new Promise((res, rej) => {
            inputPromis.forEach((item) => {
            const statePro = item.value;
                if (statePro === "fulfilled" && item.checked) {
                    res(delay);
                 } else {
                     rej(delay);
                 }
            });
    });

    promisCheck
        .then(item => {
            setTimeout(() => {
            fulfieldIzi(item);
        },delay);
        })
        .catch(error => {
            setTimeout(() => {
            rejectedIzi(error);
        },delay);
        })
        input.value = '';
}

form.addEventListener('submit', promisFun)