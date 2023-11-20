import { Outfit } from "./outfit"
import { Users } from "./users"

export class Comments{
  idComments: number= 0
  titleComment: string = ""
  descriptionComment: string = ""
  dateComment: Date= new Date(Date.now())
  score: string = ""
  outfit: Outfit = new Outfit()
  users: Users = new Users()
}
