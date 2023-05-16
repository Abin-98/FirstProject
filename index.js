
const form=document.querySelector("form")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('was-validated');

    //storing data in object format

    let obj={ 
    nm:e.target.name.value,
    em:e.target.email.value,
    ph:e.target.phone.value,
    dt:e.target.date.value,
    tm:e.target.time.value
    }
    let name=obj["nm"];
    let obj_string=JSON.stringify(obj);
    localStorage.setItem(name, obj_string);
})


/*const ul=document.querySelector('.items');
ul.firstElementChild.textContent="HELLO";
ul.firstElementChild.style.color='red';
ul.children[1].style.color='yellow'; */