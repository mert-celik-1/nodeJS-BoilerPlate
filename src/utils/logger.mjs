import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

export const createLoggerWithCorrelationId = (correlationId) => {
  return winston.createLogger({
      level: 'info',
      format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json(),
          winston.format.printf(info => {
              return `${info.timestamp} [${correlationId}] ${info.level}: ${info.message}`;
          })
      ),
      transports: [
          new winston.transports.Console(),
          new winston.transports.File({ filename: 'logs/app.log' })
      ]
  });
};

export const logEntry = (req, res, next) => {
    logger.info(`Entering ${req.method} ${req.correlationId}`, { params: req.body });
    next();
  };
  
  export const logExit = (req, res, next) => {
    res.on('finish', () => {
      logger.info(`Exiting ${req.method} ${req.correlationId}`, { statusCode: res.statusCode });
    });
    next();
  };
  
  export const logError = (error, req, res, next) => {
    logger.error(`Error in ${req.method} ${req.correlationId}: ${error.message}`, { stack: error.stack });
    next(error); // Pass error to Express error handler
  };

  
export default logger