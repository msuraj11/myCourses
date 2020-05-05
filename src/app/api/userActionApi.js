import axios from 'axios';

// class UserActionApi {
//     static loginUser(userData) {
//         return new Promise((resolve, reject) => {
//             axios.post('http://localhost:3001/users/rest/login', userData).then(function (response) {
//                 resolve(response);
//                 console.log('///////////////////////////////////////');
//                 console.log(response)
//             }).catch(function (error) {
//                 reject({ status: error.response.status, message: error.message });
//             });
//         })
//     }

 
// }

// export default UserActionApi;


export const loginUsers=(userData) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/users/rest/login', userData).then(function (response) {
                resolve(response);
                console.log('///////////////////////////////////////');
                console.log(response)
            }).catch(function (error) {
                reject({ status: error.response.status, message: error.message });
            });
        })
    }

 


