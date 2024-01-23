const title = document.querySelector('.title')
const btn = document.querySelector('.btn')
const keyText = document.getElementById('key')
const keys = ['s', '6', 'v', 'm', 'q', 'p', 'g', '/', 'x'];

let currentKeyIndex = 0

function showKey(key){
    keyText.textContent = `Key: ${key}`;
}

document.addEventListener('keydown', function(e){
    if (e.key === keys[currentKeyIndex]){
        currentKeyIndex++
        if(currentKeyIndex === keys.length){
            title.textContent = "You won!"
            btn.style.display = 'block'
        }
        else {
            showKey(keys[currentKeyIndex]);
        }
    }
    else {
        new PNotify({
            title: 'Error!',
            text: 'Wrong key! Try again.',
            type: 'error',
            delay: 1500,
        })
    }
})

document.addEventListener('keypress', function(e){
    e.preventDefault();
});


btn.addEventListener('click', function(){
    currentKeyIndex = 0
    showKey(keys[currentKeyIndex])
    btn.style.display = 'none'
    title.textContent = 'Press the correct key'
})
