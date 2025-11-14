const progress = () => {
    let progCont = document.querySelector('.course__progress')
    let lebel = progCont.querySelector('.course__number')
    let progressLine = progCont.querySelector('progress')

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomMax = getRandomInt(350000, 600000)
    lebel.innerHTML = randomMax;
    console.log(lebel)
    function startProgress(speed, step) {
        let value = 0;
        clearInterval(progressLine.interval); // Останавливаем предыдущий

        progressLine.interval = setInterval(() => {
            value += step;
            progressLine.value = value;

            if (value >= randomMax) {
                clearInterval(progressLine.interval);
                progressLine.value = randomMax;
            }
        }, speed);
    }

    startProgress(1, 1500)


}

progress()