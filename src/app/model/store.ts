import { Catalog } from "./catalog"

export class Store{
  idStore: number = 0
  nameStore: string = ""
  addressStore: string = ""
  telephoneStore: string = ""
  postalCode: string = ""
  paymentMethod: string = ""
  latitude: string = ""
  longitude: string = ""
  catalog: Catalog = new Catalog()
}
