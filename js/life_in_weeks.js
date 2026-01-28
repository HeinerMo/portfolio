let input = document.getElementById('date');
const weeks = 3650;
loadDefault();

input.addEventListener('input', function () {
    loadWithDate();
});


function loadDefault() {
    const weeksContainer = document.getElementById('weeks');
    weeksContainer.innerHTML = '';

    for (let i = 1; i < weeks; i++) {
        const currentWeek = document.createElement('div');
        currentWeek.classList.add('week');
        currentWeek.classList.add('toLive');
        weeksContainer.appendChild(currentWeek);
    }
}

function loadWithDate() {
    let selectedDate = new Date(input.value);
    const weeksContainer = document.getElementById('weeks');
    weeksContainer.innerHTML = '';

    if (selectedDate.getTime() < Date.now()) {
        
        const weeksLived = weeksBetween(selectedDate, Date.now())
    console.log(weeksLived)


        for (let i = 1; i < weeks; i++) {
            const currentWeek = document.createElement('div');
            currentWeek.classList.add('week');
            currentWeek.classList.add(i<=weeksLived?'lived':'toLive');
            weeksContainer.appendChild(currentWeek);
        }
    } else {
        loadDefault();
    }
}

function weeksBetween(dateFrom, dateTo) {
    return Math.round((dateTo - dateFrom) / (7 * 24 * 60 * 60 * 1000));
}