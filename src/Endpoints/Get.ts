import {IncomingMessage, ServerResponse} from "http";
import {userService} from "../Service/UserService";
import {uuidMatch} from "../Utils/UuidMatch";

const getAllUsers = (res: ServerResponse<IncomingMessage>) => {
  res.writeHead(200)

  return res.end(JSON.stringify(userService.findAllUsers()))
}

const getUserById = (res: ServerResponse<IncomingMessage>, req: IncomingMessage) => {
  const id = uuidMatch(req.url)
  if (!id) {
    res.writeHead(400)

    return res.end(JSON.stringify("User id is not valid"))
  }

  const currentUser = userService.findUserById(id[0])

  if (!currentUser) {
    res.writeHead(404)

    return  res.end(JSON.stringify("User doesn't exist"))
  }

  res.writeHead(200)

  return res.end(JSON.stringify(currentUser))
}

export {getAllUsers, getUserById}