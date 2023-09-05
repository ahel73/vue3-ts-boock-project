// Интерфейс HttpRequestParamsInterface позволит нам передать параметры в методы HttpClient.
// К ним относятся маршрут API (url),
// данные в случае запросов POST или PUT(payload),
// и флаг, указывающий, нужно ли для выполнения запроса токен аутентификации.

/**
* @name HttpRequestParamsInterface
* @description
* Параметры для запросов GET/POST/PUT в HttpClient
*/
export interface HttpRequestParamsInterface<T> {
    url: string
    requiresToken: boolean
    payload?: T 
}