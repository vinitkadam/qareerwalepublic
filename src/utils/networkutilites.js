// The axios wrapper

import axios from 'axios';


class Service {
  constructor() {
    let service = null;
    service = axios.create({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error.code) {
      case 401:
        console.log(error);
        console.log('401: Something went wrong');
        break;
      case 409: 
        console.log(error);
        //alert(error.response.message);
        console.log('409: Something went wrong');
        break;
      case 404:
        console.log('404: Something went wrong!');
        break;
      case 500:
        console.log('500: Something went wrong!');
        break;
      default:
        console.log(error);
        break;
    }
  }
  
  get(path, options) {
    return this.service.get(path, {
      ...options,
    })
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
  }

  patch(path, options) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      ...options
    })
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
  }

  post(path, options) {
    return this.service.request({
      method: 'POST',
      url: path,
      ...options
    })
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
  }

  delete(path, options){
    return this.service.request({
      method: 'DELETE',
      url: path,
      ...options
    })
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
  }
}

export default new Service;
