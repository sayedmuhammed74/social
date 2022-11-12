let hearts = document.querySelectorAll('.fa-heart')


hearts.forEach(e => {
    e.onclick = function() {
        if(e.classList.contains('fa-regular')){
            e.style.color = "red";
            e.classList.remove('fa-regular')
            e.classList.add('fa-solid')
            console.log('regular')
        } else {
            e.style.color = "black";
            e.classList.add('fa-regular')
            e.classList.remove('fa-solid')
            console.log('solid')
        }
    }
});