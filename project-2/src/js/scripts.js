let body = document.querySelector('#body');
let btnAvatar = document.querySelector('#btn-avatar');
let panelAc = document.querySelector('#account-panel');
let List = document.querySelector('#List');
let dashboard = document.querySelector('#dashboard');
let btnClose = document.querySelector('#btn-close');

// panel Account

btnAvatar.onclick = function () {
    if (panelAc.classList.contains('d-none')) {
        panelAc.classList.add('absolute')
        panelAc.classList.remove('d-none')
    } else {
        panelAc.classList.add('d-none')
        panelAc.classList.remove('absoulte')
    }
}

// sidebar

List.onclick = function () {
    dashboard.classList.add('d-absolute')
    dashboard.classList.remove('-translate-x-full')
    body.classList.add('overflow-hidden')
}

btnClose.onclick = function () {
    let x = window.matchMedia("(max-width: 768px)")
    if (x.matches) {
        dashboard.classList.add('-translate-x-full')
        
        body.classList.remove('overflow-hidden')
    }
}
