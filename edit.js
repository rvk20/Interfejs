const API_PUT = "http://fronttest.ekookna.pl/user/";
const editUser = document.getElementById('edit-user');

let params = new URLSearchParams(location.search);
document.getElementById('first_name').value = params.get('first_name');
document.getElementById('last_name').value = params.get('last_name');
document.getElementById('postal_code').value = params.get('postal_code');
document.getElementById('street').value = params.get('street');
document.getElementById('city').value = params.get('city');
document.getElementById('age').value = params.get('age');
document.getElementById('_method').value = params.get('_method');

editUser.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(editUser);
    
    fetch(`${API_PUT}${params.get('id')}`, {
        method: 'post',
        body: formData
    })
    .then(() => {
        location.href = `index.html`;
    })
    .catch(function (error) {
        console.error(error);
    })
})