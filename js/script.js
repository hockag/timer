// class CountdownTimer {
//     constructor(duration) {
//         this.duration = duration * 60 * 1000;
//         this.intervalId = null;
//         this.start();
//     }
//
//     start() {
//         const targetTime = Date.now() + this.duration;
//         this.updateTimer(targetTime);
//
//         this.intervalId = setInterval(() => {
//             this.updateTimer(targetTime);
//         }, 60000);
//     }
//
//     updateTimer(targetTime) {
//         const currentTime = Date.now();
//         const timeLeft = targetTime - currentTime;
//
//         if (timeLeft <= 0) {
//             clearInterval(this.intervalId);
//             console.log('Час вийшов!');
//             return;
//         }
//
//         const minutesLeft = Math.floor(timeLeft / (1000 * 60));
//         console.log(`Залишилось: ${minutesLeft} хвилин`);
//
//         if (minutesLeft <= 30) {
//             console.log('Залишилось менше половини часу!');
//         }
//     }
// }
//
// new CountdownTimer(1);


//2


class CountdownTimer {
    constructor(duration) {
        this.duration = duration * 1000;
        this.intervalId = null;
        this.start();
    }

    start() {
        const targetTime = Date.now() + this.duration;
        this.updateTimer(targetTime);

        this.intervalId = setInterval(() => {
            this.updateTimer(targetTime);
        }, 1);
    }

    updateTimer(targetTime) {
        const currentTime = Date.now();
        const timeLeft = targetTime - currentTime;
        const secondsLeft = (timeLeft / 1000).toFixed(2);

        document.getElementById('time').textContent = secondsLeft;

        if (timeLeft <= 0) {
            clearInterval(this.intervalId);
            document.getElementById('time').textContent = '0.00';
            document.getElementById('restart').disabled = false;
            return;
        }

        if (timeLeft <= 10000) {
            document.getElementById('animation').style.display = 'block';
        } else {
            document.getElementById('animation').style.display = 'none';
        }
    }
}

document.getElementById('restart').addEventListener('click', () => {
    new CountdownTimer(30);
    document.getElementById('restart').disabled = true;
});

new CountdownTimer(30);
