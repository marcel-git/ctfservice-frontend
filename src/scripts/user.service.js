
const apiURL = 'http://localhost:8762/user/';

import { authHeader} from "@/scripts/auth.service";

export async function getUser() {

    const results = await fetch(apiURL, {method: 'get', headers: new Headers(authHeader())});
    const value = results.json();
    return value;
}