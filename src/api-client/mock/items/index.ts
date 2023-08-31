import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items';

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json'
}
// создание объекта ItemsApiClient с URL-адресом, возвращающий статические фиктивные\
// данные в формате JSON.
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// экспортирование только что созданного экземпляра
export default itemsApiClient