import { Users } from "./users"

export class Suscription{
  idSuscription: number = 0
  amount: number = 0
  paymentDate: Date = new Date(Date.now())
  state: string = ""
  startSuscription: Date = new Date(Date.now())
  users: Users = new Users()
}
