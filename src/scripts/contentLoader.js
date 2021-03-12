import { authHeader } from "@/scripts/auth.service";

const apiURL = 'http://localhost:8762/content';

//everyone
export async function getPage(path) {
    const results = await fetch(apiURL+path);
    const value = results.json();
    return value;
}

//admin only
export function createPage(params) {
    console.log("Posting");
    var xhr = new XMLHttpRequest();
    xhr.open("POST",apiURL,false);
    xhr.setRequestHeader("Content-type",'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(params))
}

//admin only
export function updatePage(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT",apiURL+"/"+data.path,false);
    xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');
    xhr.setRequestHeader('Authorization', authHeader().Authorization);
    xhr.send(JSON.stringify(data));
}

//admin only
export function deletePage(path) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiURL+path,false);
    xhr.setRequestHeader('Authorization', authHeader().Authorization);
    xhr.send();
}