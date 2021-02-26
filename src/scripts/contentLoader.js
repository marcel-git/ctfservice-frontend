var apiURL = "http://localhost:8081/api/content";

export async function getPage(path) {
    const results = await fetch(apiURL+path);
    const value = results.json();
    return value;
}

export function createPage(params) {
    console.log("Posting");
    var xhr = new XMLHttpRequest();
    xhr.open("POST",apiURL,true);
    xhr.setRequestHeader("Content-type",'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(params))
}