let btnAvatar = document.querySelector('#btn-avatar');
let panelAc = document.querySelector('#account-panel');

btnAvatar.onclick = function () {
    if (panelAc.classList.contains('d-none')) {

        panelAc.classList.add('absolute')
        panelAc.classList.remove('d-none')

    } else {
        panelAc.classList.add('d-none')
        panelAc.classList.remove('absoulte')
    }
}