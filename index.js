
const formm=document.querySelector("form");
const buttn=document.querySelector(".btn");
let users=document.querySelector("#users");
let msg=document.querySelector('.msg');
buttn.addEventListener('click', (e)=>{
    e.preventDefault();
    //storing data in object format
    let obj={ 
        nm:document.getElementById("nam").value,
        em:document.getElementById("mail").value,
        ph:document.getElementById("phone").value,
        dt:document.getElementById("date").value,
        tm:document.getElementById("time").value
    };
    const name=obj["nm"];
    const email=obj["em"];
    const phone=obj["ph"];

    if(name==''||email==''||phone==''){
        msg.classList.add('error');
        msg.innerHTML="Please fill the below 3";
        setTimeout(()=>msg.remove(), 3000);
    }
    else{

    let obj_string=JSON.stringify(obj);
    localStorage.setItem(email, obj_string);

    const li = document.createElement('li');
    li.className = 'list-group-item';
    let divv=document.createElement('button');
    divv.className="btn btn-danger btn-sm float-right delete";
    divv.appendChild(document.createTextNode("Del"));
        
        // Add text node with input values
        li.appendChild(document.createTextNode(name+" - "+email+" - "+phone));
        li.appendChild(divv);

        // Append to ul
        users.appendChild(li);
    
        // Clear fields
        formm.children[1].value = '';
        formm.children[3].value = '';
        formm.children[6].value = '';
    }
});

var itemList = document.getElementById('users');
// Delete event
itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        var temp=li.innerHTML;
        itemList.removeChild(li);
        var emailstr=temp.split(" - ");
        console.log(emailstr[1]);
        localStorage.removeItem(emailstr[1]);
    }
}