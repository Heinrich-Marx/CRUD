import { v4 as uuid4  } from "uuid";
import {IUser} from "../Model/Types";

const getBody = (str:string):IUser => {
  return  Object.assign(JSON.parse(str), {id:uuid4()})
}

export {getBody}