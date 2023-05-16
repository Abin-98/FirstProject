
const form=document.querySelector("form")
form.addEventListener('submit', (e) => {

    if(!form.checkValidity()){
        e.preventDefault();
    }
    form.classList.add('was-validated')
    let nm=e.target.name.value;
    let em=e.target.email.value;
    let ph=e.target.phone.value;
    let dt=e.target.date.value;
    let tm=e.target.time.value;

    localStorage.setItem("name", nm);
    localStorage.setItem("email", em);
    localStorage.setItem("phone", ph);
    localStorage.setItem("date", dt);
    localStorage.setItem("time", tm);
})


/*const ul=document.querySelector('.items');
ul.firstElementChild.textContent="HELLO";
ul.firstElementChild.style.color='red';
ul.children[1].style.color='yellow'; */