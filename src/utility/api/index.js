const DEFAULT_HEADER = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  };
  const API_URL = 'http://104.236.24.221:8000/api/v1/';

  const API = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    mode: 'cors',
    header: DEFAULT_HEADER,
  });


export const GetTest = (id_course, id_material) => API.get(`course/${id_course}/material/${id_material}`)
export const PostTest = (id_course, id_material, body) => API.post(`course/${id_course}/material/${id_material}`, body)



