import axios from 'axios';

export function getAPI(url){
  return axios.get(url)
}

export function postAPI(url,body) {
  return axios.post(url,body)
}
