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