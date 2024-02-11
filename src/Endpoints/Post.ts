import { IncomingMessage, ServerResponse } from "http"
import {getBody} from "../Utils/GetBody";
import {isUser} from "../Utils/TypeGuards";
import {userService} from "../Service/UserService";

const createUser = (res: ServerResponse, req: IncomingMessage) => {
  req.setEncoding('utf-8')
  let body = ""
  req.on("data", (chunk) => {
    body += chunk
  })

  req.on("end" ,() => {
    const newUser = getBody(body)
    if (isUser(newUser)) {
      userService.createNewUser(newUser)

      res.writeHead(201)

      return res.end(JSON.stringify(newUser))
    }

    res.writeHead(400)

    return res.end(JSON.stringify("body doesn't contain required fields"))

  })
}

export {createUser}