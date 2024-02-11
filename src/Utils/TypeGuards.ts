import {IUser} from "../Model/Types";
import {IncomingMessage} from "http";

const isUsername = (candidate: any)=> "username" in candidate &&  typeof candidate.username === "string"
const isAge = (candidate: any) => "age" in candidate &&  typeof candidate.age === "number"
const isHobbies = (candidate: any) => "hobbies" in candidate
  &&  Array.isArray(candidate.hobbies)
  &&  (candidate.hobbies.length > 0 ? typeof candidate.hobbies[0] === "string" : true)

const isUser = (candidate: any): candidate is IUser => {
  return  isUsername(candidate)
    && isAge(candidate)
    && isHobbies(candidate)
}

const isUserById = (req: IncomingMessage) => req.url && req.url.match(/\/api\/users\/*/)

export {isUser, isUserById}