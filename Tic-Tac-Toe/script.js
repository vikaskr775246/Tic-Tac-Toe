const restart = document.getElementById('restart');
const msgBox = document.getElementById('msgbox');
const btns = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const msg = document.querySelector('#msg');
const StartNew = document.querySelector('#startnew');
StartNew.onclick = () => startNew();
restart.onclick = () => {
    btns.forEach(btn => {
        btn.innerText = '';
        btn.disabled = false;
        document.body.style.background = 'rgb(16, 172, 132)';
    });
};
let winningPattern = [
    [0, 1, 2,],
    [0, 3, 6,],
    [0, 4, 8,],
    [3, 4, 5,],
    [6, 7, 8,],
    [1, 4, 7,],
    [2, 5, 8,],
    [2, 4, 6,],
];
let val, num = 0;
btns.forEach((btn, idx) => {
    btn.onclick = function (e) {
        val++
        if (val % 2 == 0) {
            val = false;
            this.innerText = 'X';
            this.disabled = true;
        } else {
            val = true;
            this.innerText = 'O';
            this.disabled = true;
        };
        console.log(val);
        num++
        console.log(num);
        if (btns.length == num) {
            drowfun();
            console.log('drow');
        } else winnerchacker();
    }
});
function winnerchacker() {
    let [elm1, elm2, elm3] = [];
    for (const i of winningPattern) {
        [elm1, elm2, elm3] = [
            btns[i[0]].innerText,
            btns[i[1]].innerText,
            btns[i[2]].innerText,
        ];
        if (elm1 !== '' && elm2 !== '' && elm3 !== '') {
            if (elm1 == elm2 && elm2 == elm3) {
                winfunction(elm1);
            };
        }
    };
}
const winfunction = (wintxt) => {
    num = 0;
    disabledfun();
    container.classList.add('hide');
    msgBox.innerText = `winner is ${wintxt}`;
}
const disabledfun = () => {
    btns.forEach(btn => btn.disabled = true);
    msg.classList.remove('hide');
};
const startNew = () => {
    btns.forEach(btn => {
        btn.disabled = false;
        btn.innerHTML = '';
    });
    msg.classList.add('hide');
    container.classList.remove('hide');
}
const drowfun = () => {
    num = 0
    msgBox.innerHTML = 'match is drow'
    disabledfun();
    container.classList.add('hide');
};