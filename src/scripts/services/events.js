import { baseUrl, evetnsQuantity } from '../variables.js';

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${evetnsQuantity}`)
    
    return await response.json()
}

export { getEvents }