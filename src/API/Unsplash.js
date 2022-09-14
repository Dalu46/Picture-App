import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID bA_hafEaroZXEGrkJRQ2J16QFfOvUybnWsK8EOQViPg'
    }
})