const regexForUuid = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/

const uuidMatch = (str?: string) => str?.match(regexForUuid)

export {uuidMatch}