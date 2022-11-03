console.log('test');
const API_FETCH_ALL = "https://fronttest.ekookna.pl";
const API_POST = "http://fronttest.ekookna.pl/user";
const usersList = document.querySelector('.users-list');
//const addUserForm = document.querySelector('.add-user');
/*const firstValue = document.getElementById('first_name');
const lastValue = document.getElementById('last_name');
const postalValue = document.getElementById('postal_code');
const streetValue = document.getElementById('street');
const cityValue = document.getElementById('city');
const ageValue = document.getElementById('age');*/
const addUser = document.getElementById('add-user');

let output = '';

const fetchUsers = (data) => {
    data.forEach(post => {
    output += `
    <tr>
        <td>${post.first_name}</td>
        <td>${post.last_name}</td>
        <td>${post.postal_code}</td>
        <td>${post.strett}</td>
        <td>${post.city}</td>
        <td>${post.age}</td>
        <td><a href="">edit</a></td>
        <td><a href="">delete</a></td>
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

addUser.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addUser);
    console.log(formData);

    /*    first_name: firstValue.value,
        last_name: lastValue.value,
        postal_cone: postalValue.value,
        street: streetValue.value,
        city: cityValue.value,
        age: ageValue.value*/
    

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
