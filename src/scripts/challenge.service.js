const apiURL = 'http://localhost:8762/challenge/';
const verifyURL = 'http://localhost:8762/verify/';

import { authHeader} from "@/scripts/auth.service";

//returns a list of all challenges
export async function getChallenges() {

    const results = await fetch(apiURL, {method: 'get', headers: new Headers(authHeader())});
    const value = results.json();
    return value;
}

export async function getChallenge(id) {
    const results = await fetch(apiURL+id, {method: 'get', headers: new Headers(authHeader())});
    const value = results.json();
    return value;
}

export async function verify(data) {
    console.log(authHeader().Authorization);
    const result = await fetch(verifyURL, {method:'post', headers: {'Content-Type': 'application/json','Authorization':authHeader().Authorization},body: JSON.stringify(data)});
    const value = result.text();
    return value;
}

export function createChallenge(params) {
    console.log("Posting");
    var xhr = new XMLHttpRequest();
    xhr.open("POST",apiURL,false);
    xhr.setRequestHeader("Content-type",'application/json; charset=UTF-8');
    xhr.setRequestHeader('Authorization', authHeader().Authorization);
    xhr.send(JSON.stringify(params))
}

export function updateChallenge(id, data) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT",apiURL+id,false);
    xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');
    xhr.setRequestHeader('Authorization', authHeader().Authorization);
    xhr.send(JSON.stringify(data));
}

export function deleteChallenge(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiURL+id,false);
    xhr.setRequestHeader('Authorization', authHeader().Authorization);
    xhr.send();
}

