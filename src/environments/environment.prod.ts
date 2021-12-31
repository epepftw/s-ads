import { endpoints } from "./endpoints"

export const environment = {
  production: false,
  base_uri: 'http://localhost:5000/api/',
  cloud_api: 'http://localhost:3000/api',
  
  
  save_uploaded_file: '/media/saveuploadedmediainfo',

  get: endpoints.get,
  post: endpoints.post
};