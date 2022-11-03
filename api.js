const API_FETCH_ALL = "https://fronttest.ekookna.pl";
const API_POST = "http://fronttest.ekookna.pl/user";
const API_GET = "http://fronttest.ekookna.pl/user/";
const usersList = document.querySelector('.users-list');
const addUser = document.getElementById('add-user');
const delUser = document.getElementById('del-user');

let output = '';

const fetchUsers = (data) => {
    data.forEach(post => {
    output += `
    <tr data-id=${post.id}>
        <td>${post.first_name}</td>
        <td>${post.last_name}</td>
        <td>${post.postal_code}</td>
        <td>${post.strett}</td>
        <td>${post.city}</td>
        <td>${post.age}</td>
        <td><a class="btn btn-primary" href="#" id="edit">edit</a></td>
        <td><a class="btn btn-danger" href="#" id="delete">delete</a></td>
    </tr>
    `;
});
usersList.innerHTML = output;
};

fetch(API_FETCH_ALL)
    .then(res => res.json())
    .then(res => res.users)
    .then(data => fetchUsers(data))
    .catch(function (error) {
        console.error(error);
    })

usersList.addEventListener('click', (e) => {
    let delPressed = e.target.id === 'delete';
    let editPressed = e.target.id === 'edit';
    let id = e.target.parentElement.parentElement.dataset.id;

    if(delPressed){
        const delData = new FormData(delUser);
        fetch(`${API_GET}${id}`, {
            method: 'post',
            body: delData
        })
        .then(res => res.json())
        .then(() => location.reload())
    }

    if(editPressed){
        const parent = e.target.parentElement;
        let first = '';
        
        fetch(`${API_GET}${id}`)
        .then(res => res.json())
        .then(res => res.user)
        .then(res => {
            location.href = `
            edit.html?id=${e.target.parentElement.parentElement.dataset.id}&first_name=${res.first_name}&last_name=${res.last_name}&postal_code=${res.postal_code}&
            street=${res.street}&city=${res.city}&age=${res.age}&_method=PUT
            `;
        })
    }
})

addUser.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addUser);

    fetch(API_POST, {
        method: 'post',
        body: formData
    })
    .then(() => {
        window.location.reload();
    })
    .catch(function (error) {
        console.error(error);
    })
})
