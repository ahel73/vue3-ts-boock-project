import Vuex from 'vuex'
import { RootStoreInterface } from './RootStore.interface'
/**
* @name RootStoreModel
* @description
* Расширяет тип хранилища Vuex созданным интерфейсом RootStoreInterface.
*/
export class RootStoreModel<S> extends Vuex.Store<RootStoreInterface> {
}