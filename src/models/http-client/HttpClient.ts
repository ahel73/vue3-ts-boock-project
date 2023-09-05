import { HttpClientInterface } from './HttpClient.interface'
import { HttpClientModel } from './HttpClient.model'

// Экспортируем экземпляр HttpClientModel.
export const HttpClient: HttpClientInterface = new HttpClientModel()