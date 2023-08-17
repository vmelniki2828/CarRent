import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://649c1e0a0480757192377b6a.mockapi.io',
});

export async function getAllCars(){
    const {data} = await instance.get('/cars');
    return data;
}