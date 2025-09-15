const API_URL = 'http://localhost:3000/users';

const usersListLi = document.getElementById('users');
let usersList = []

console.log(usersList);



const nombreInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const roleInput = document.getElementById('role')
const addUserBtn = document.getElementById('add')

async function loadUsers() {
    usersList = [];
    let response = await fetch(API_URL, { method: "GET" });
    response = await response.json();
    console.log(response);
    
    usersListLi.innerHTML = '';
    
    for (let user of response) {
      renderUser(user);
        usersList.push(user);
    }
  
}
function renderUser(user) {

    const li = document.createElement('li')
    li.innerHTML = `
    <p>Name: ${ user.name} Role:  ${user.role} email: ${ user.email }</p>
    `
    const promoteBtn = document.createElement('button')
    promoteBtn.textContent = "promote"
    promoteBtn.id = user.id;
    promoteBtn.onclick = ()=> promote(user.id)

    const demoteBtn = document.createElement('button')
    demoteBtn.textContent = "demote"
    demoteBtn.id = user.id ;
    demoteBtn.onclick = ()=> demote(user.id)

    const deleteBtn = document.createElement('button')
    deleteBtn.id = user.id;
    deleteBtn.innerText = 'detele';
    deleteBtn.onclick = ()=> deleteUser(user.id)


    li.appendChild(promoteBtn)
    li.appendChild(demoteBtn)
    li.appendChild(deleteBtn)

    usersListLi.appendChild(li)

    
}
async function promote(userId) {
    for (const user of usersList) {
        if (userId === user.id) {
            if (user.role !== 'Admin') {
                const roleActual = user.role;
                let roleNuevo;
                if (roleActual === 'Viewer') {
                    roleNuevo = 'Editor'
                }else{
                    roleNuevo = 'Admin'
                }
                await fetch(API_URL + "/" + user.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: roleNuevo})
    });
            }
        }
        
    }
    loadUsers()
}
async function demote(userId) {
    for (const user of usersList) {
        if (userId === user.id) {
            if (user.role !== 'Viewer') {
                const roleActual = user.role;
                let roleNuevo;
                if (roleActual === 'Admin') {
                    roleNuevo = 'Editor'
                }else{
                    roleNuevo = 'Viewer'
                }
                await fetch(API_URL + "/" + user.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: roleNuevo})
    });
            }
        }
        
    }
    loadUsers()
}
async function deleteUser(userId) {
    await fetch(API_URL + "/" + userId, {
      method: "DELETE"
    });
    loadUsers()
}



addUserBtn.addEventListener('click',async ()=>
{
    if (!nombreInput.value || !emailInput.value) return
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        "id": (usersList.length + 1).toString(),
        "name": nombreInput.value,
        "email": emailInput.value,
        "role": roleInput.value
      })
    });
    nombreInput.value = '';
    emailInput.value = '';
    roleInput.value = '';
})





loadUsers()