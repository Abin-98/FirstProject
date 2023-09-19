
const inputs=document.querySelectorAll("input");
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
    const date=obj["dt"];
    const time=obj["tm"];

    if(name==''||email==''||phone==''){
        msg.classList.add('error');
        msg.innerHTML="Please fill the below 3";
        setTimeout(()=>msg.remove(), 3000);
    }
    else{

    //let obj_string=JSON.stringify(obj);
    //localStorage.setItem(email, obj_string);
    axios.post("https://crudcrud.com/api/b1b90e0b12a6479bbee9dd43d97aa21a/appointmentData", obj )
    .then((res)=> {
        const li = document.createElement('li');
    li.className = 'list-group-item';
    let divv=document.createElement('button');
    divv.className="btn btn-danger btn-sm float-right delete";
    divv.appendChild(document.createTextNode("Del"));
    let edit=document.createElement('button');
    edit.className="btn btn-success btn-sm float-right edit";
    edit.appendChild(document.createTextNode("Edit"));
    }) 
    axios.get("https://crudcrud.com/api/b1b90e0b12a6479bbee9dd43d97aa21a/appointmentData")
    .then((res) =>{       
        const childElem=document.createElement("li")
        // Add text node with input values
        childElem.appendChild(document.createTextNode(name+" - "+email+" - "+phone+" - "+date+" - "+time+" - "));
        childElem.id=res.data._id;
        childElem.appendChild(divv);
        childElem.appendChild(edit);

        // Append to ul
        users.appendChild(childElem);

        // Clear fields
        inputs.forEach(element => {
            element.value="";
        });
    })
    .catch((err)=> { console.log(err)} )
    }
});

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/b1b90e0b12a6479bbee9dd43d97aa21a/appointmentData")
    .then((res) =>{
        for(var i=0;i<res.data.length;i++){
                const childElem=document.createElement("li")
                childElem.id=res.data[i]._id;
                childElem.textContent=res.data[i].nm+ " - "+ res.data[i].em+" - "+res.data[i].ph+" - "+res.data[i].dt+" - "+res.data[i].tm+" - "
                users.appendChild(childElem)
                const li = document.createElement('li');
                childElem.className = 'list-group-item';
    let divv=document.createElement('button');
    divv.className="btn btn-danger btn-sm float-right delete";
    divv.appendChild(document.createTextNode("Del"));
    let edit=document.createElement('button');
    edit.className="btn btn-success btn-sm float-right edit";
    edit.appendChild(document.createTextNode("Edit"));
        
        // Add text node with input values
        childElem.appendChild(divv);
        childElem.appendChild(edit);
        }
    }).catch((error)=>{
        console.log(error)
    })
})

var itemList = document.getElementById('users');
// Delete event
itemList.addEventListener('click', removeOrEdit);

function removeOrEdit(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        var temp=li.textContent;
        
        var userid=temp.split(" - ");
        axios
        .delete(`https://crudcrud.com/api/b1b90e0b12a6479bbee9dd43d97aa21a/appointmentData/${li.id}`)
        .then((res)=>
        { 
            itemList.removeChild(li);
        })
        .catch(err=> console.error(err))
        
    }
    else if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        var temp=li.innerHTML;
        var each=temp.split(" - ");
        axios
        .delete(`https://crudcrud.com/api/b1b90e0b12a6479bbee9dd43d97aa21a/appointmentData/${li.id}`)
        .then((res)=>
        { 
            itemList.removeChild(li);
        })
        .catch(err=> console.error(err))
        var i=0;
        inputs.forEach(element => {
            element.value=each[i];
            i++;
        });
    }
}