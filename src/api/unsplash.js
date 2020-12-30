import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID zqcAiix-ndsc09tnaVcnDG4A-x-wIAGB5o7XKHTe17w'
    }
});