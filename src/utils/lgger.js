import  Logger from "simple-node-logger";

const options = {
    logFilePath: "api.fastmula.log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss.SSS",
}

const eventLogger = Logger.createSimpleFileLogger(options)

const errorLogger = (payload) => {
    return eventLogger.error(payload)
}

const infoLogger = (payload) => {
    return eventLogger.info(payload)
}


export {errorLogger, infoLogger}