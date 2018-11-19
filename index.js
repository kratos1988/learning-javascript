let onLoadFunction = () => {
    console.log("I'm inside onLoadFunction()!!!")
    let items = document.querySelectorAll('[data-name]');
    for (let item of items) {
        item.addEventListener('click', () => {
            console.log("I'm inside anonymous function!!!")
            let targetElemName = '.' + item.dataset.name;
            let targetElem = document.querySelector(targetElemName);
            targetElem.click();
        })
    }
}

window.onload = onLoadFunction;