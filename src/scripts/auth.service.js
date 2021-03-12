import axios from "axios";

const API_URL = 'http://localhost:8762/auth/';

class AuthService {

    login(user){
        return axios.post(API_URL+'signin', {
            username: user.username,
            password: user.password
        }).then(response => {
            if(response.data.accessToken){
                localStorage.setItem('user',JSON.stringify(response.data));
            }
            return response.data;
        })
    }

    logout(){
        //TODO implement logout request to backend to remove the token
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL+'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();

export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if(user&&user.accessToken){
        return { Authorization: 'Bearer  ' + user.accessToken};
    }else {
        return {};
    }
}