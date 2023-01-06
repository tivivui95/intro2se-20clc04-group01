import Connections from "../../constants/Connections";

export async function GetAllEx() {
    try {
        const response = await fetch(Connections.serverURL + '/ex/');
        const data = await response.json();
        return data
    } catch (error) {
        return { "status": "err", "error": error }
    } 
}

export async function SearchEx(searchString){
    try {
        const response = await fetch(Connections.serverURL + '/ex/search/'+ searchString);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        return { "status": "err", "error": error }
    } 
}

export async function GetAllSeries() {
    try {
        const response = await fetch(Connections.serverURL + '/series/');
        const data = await response.json();
        return data
    } catch (error) {
        return { "status": "err", "error": error }
    } 
}


export async function GetEx(id = 1) {
    try {
        const response = await fetch(Connections.serverURL + '/ex/' + String(id));
        const data = await response.json();
        return data
    } catch (error) {
        return { "status": "err", "error": error }
    } 
}

export async function GetSeries(id = 1) {
    try {
        const response = await fetch(Connections.serverURL + '/series/' + String(id));
        const data = await response.json();
        return data
    } catch (error) {
        return { "status": "err", "error": error }
    } 
}

export async function LoginAPI(username, password) {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": username,
        "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
        
        const response = await fetch(Connections.serverURL + "/auth/login", requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        return { "status": "err", "error": error }
    } 
}