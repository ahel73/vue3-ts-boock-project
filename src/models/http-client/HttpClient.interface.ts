import { HttpRequestParamsInterface } from './HttpRequestParams.interface'
/**
* @Name HttpClientInterface
* @description
* Интерфейс для обёртки HttpClient.
*/
export interface HttpClientInterface {
    get<T, D>(parameters: HttpRequestParamsInterface<D>): Promise<T>
    post<T, D>(parameters: HttpRequestParamsInterface<D>): Promise<T>
}