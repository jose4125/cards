import { api } from '../config/config';
import request from 'superagent';


export const sendLoginForm = (data, headers) => {
  //return axios.post(api.curLogin, data, headers);

  let formdata = new FormData();
  formdata.append('principal', 'francisco.licea@gmail.com')
  formdata.append('password', 'password')
  return request
    .post(api.curLogin)
    .field('principal', 'francisco.licea@gmail.com')
    .field('password', 'password')
    .end(function(err, httpResponse){
      if(err) {
        console.log('err', err)
      }else {
        console.log('httpResponse', httpResponse)
        return httpResponse;
      }
    })
};
