import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://milkybooth-json-default-rtdb.firebaseio.com/'
});

export default instance;


// const requestData = {
//     orderData: formData
// }
// axios.post('/form.json', requestData)
//     .then(response => {
//         this.props.history.push('/');
//     })
//     .catch((err) => { console.log(err); });