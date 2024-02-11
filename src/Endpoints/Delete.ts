import {IncomingMessage, ServerResponse} from "http";
import {uuidMatch} from "../Utils/UuidMatch";
import {userService} from "../Service/UserService";

const deleteUserById = (res: ServerResponse<IncomingMessage>, req: IncomingMessage) => {
  const id = uuidMatch(req.url)
  if (!id) {
    res.writeHead(400)

    return res.end(JSON.stringify("User id is not valid"))
  }

  const currentUser = userService.findUserById(id[0])

  if (!currentUser) {
    res.writeHead(404)

    return res.end(JSON.stringify("User doesn't exist"))
  }

  userService.deleteUserById(id[0])

  res.writeHead(204)

  return res.end("User has been deleted")
}

export {deleteUserById}