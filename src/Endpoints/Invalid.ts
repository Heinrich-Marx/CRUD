import {IncomingMessage, ServerResponse} from "http";

const invalidEndpoint = (res: ServerResponse<IncomingMessage>) => {
  res.writeHead(404)

  return res.end("Invalid endpoint")
}

export {invalidEndpoint}