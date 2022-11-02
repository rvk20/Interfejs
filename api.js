console.log('test');
const API_FETCH_ALL = "https://fronttest.ekookna.pl/";
const usersList = document.querySelector('.users-list');
let output = '';

fetch(API_FETCH_ALL)
    .then(res => res.json())
    .then(res => res.users)
    .then(data => {
        data.forEach(post => {
            console.log(post.first_name);
            output += `
            <tr>
                <td>${post.first_name}</td>
                <td>${post.last_name}</td>
                <td>${post.postal_code}</td>
                <td>${post.strett}</td>
                <td>${post.city}</td>
                <td>${post.age}</td>
            </tr>
            `;
        });
        usersList.innerHTML = output;
    })
    .catch(function (error) {
        console.error(error);
    })


   // .then(fet => console.log(fet))
   // .catch(error => console.log('ERROR'));
  