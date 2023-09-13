import  { HttpClient, HttpRequestParamsInterface } from '../../http-client'
import { ItemsApiClientUrlsInterface } from './ItemsApiClientUrls.interface'
import { ItemsApiClientInterface } from './ItemsApiClient.interface'
import { ItemInterface } from '@/models/items/Item.interface';

/**
* @Name ItemsApiClientModel
* @description
* Реализует интерфейс ItemsApiClientInterface
*/
export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface
  
  constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls
  }

  fetchItems(): Promise<ItemInterface[]> {
    const getParameters: HttpRequestParamsInterface<undefined> = {
      url: this.urls.fetchItems,
      requiresToken: false
    }
    return HttpClient.get<ItemInterface[], undefined>(getParameters)
  }
}