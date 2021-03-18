const apiURL = 'http://localhost:8762/challenge/';

import { authHeader} from "@/scripts/auth.service";

//returns a list of all challenges
export async function getChallenges() {

    const results = await fetch(apiURL, {method: 'get', headers: new Headers(authHeader())});
    const value = results.json();
    return value;
}