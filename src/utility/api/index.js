const DEFAULT_HEADER = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Content-Type': 'application/json'
}

const API_URL = 'http://104.236.24.221:8000/api/v1/'

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  mode: 'cors',
  header: DEFAULT_HEADER
})

export const GetTest = (idCourse, idMaterial) => API.get(`course/${idCourse}/material/${idMaterial}`)
export const PostTest = (idCourse, idMaterial, body) => API.post(`course/${idCourse}/material/${idMaterial}`, body)

