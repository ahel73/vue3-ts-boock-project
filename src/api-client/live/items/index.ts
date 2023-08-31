import {
    ItemsApiClientUrlsInterface,
    ItemsApiClientInterface,
    ItemsApiClientModel
} from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
    fetchItems: '/static/data/items.json'
}

// Создаём экземпляр ItemsApiClient с url, который возвращает фиктивные данные из статического JSON-файла.
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// Экспортируем объект.
export default itemsApiClient