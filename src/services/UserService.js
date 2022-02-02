import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/auth';

class UserService {
  login(loginRequest) {
    return axios.post(`${baseUrl}/singin`, loginRequest);
  }

  register(signUpRequest) {
    return axios.post(`${baseUrl}/signup`, signUpRequest);
  }
  test(){
    return axios.get(`${baseUrl}/all`);
  }
}
export default new UserService();