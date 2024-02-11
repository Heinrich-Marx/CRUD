import * as process from "process";
import * as dotenv from "dotenv"
import {createServer} from "http";
import {createUser} from "./Endpoints/Post";
import {getAllUsers, getUserById} from "./Endpoints/Get";
import {isUserById} from "./Utils/TypeGuards";
import {updateUser} from "./Endpoints/Put";
import {deleteUserById} from "./Endpoints/Delete";
import {invalidEndpoint} from "./Endpoints/Invalid";

dotenv.config()

const PORT = Number(process.env.PORT ?? 4000)

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    return getAllUsers(res)
  }

  if (isUserById(req) && req.method === "GET") {
    return getUserById(res,req)
  }

  if (req.url === "/api/users" && req.method === "POST") {
    return  createUser(res, req)
  }

  if (isUserById(req) && req.method === "PUT") {
    return updateUser(res, req)
  }

  if (isUserById(req) && req.method === "DELETE") {
   return deleteUserById(res,req)
  }

  return invalidEndpoint(res)
})

server.listen(PORT, () => console.log("Server"))

export {server}
