import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://milkybooth-json-default-rtdb.firebaseio.com/'
});

export default instance;