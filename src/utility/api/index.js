import axios from 'axios'

const DEFAULT_HEADER = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Content-Type': 'application/json'
}

const API_URL = 'https://api.hardmakers.com/api/v1/'

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  mode: 'cors',
  header: DEFAULT_HEADER
})

export const GetTest = (idCourse, idMaterial) => API.get(`course/${idCourse}/material/${idMaterial}/tests`)
export const PostTest = (idCourse, idMaterial, body) => API.post(`course/${idCourse}/material/${idMaterial}/tests`, body)

