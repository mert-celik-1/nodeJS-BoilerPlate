import logger, { logError } from "../utils/logger.mjs";

export const errorHandler = (err, req, res, next) => {
  //console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Sunucu hatası",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  logError(err, req, res, next);
};

// Unhandled Exception Handler
export const uncaughtException = () => {
  process.on("uncaughtException", (error, origin) => {
    const correlationId =
      origin && origin.req ? origin.req.correlationId : "unknown";
    logger.error(`Unhandled Exception: ${error.message}`, {
      correlationId,
      stack: error.stack,
    });
    process.exit(1);
  });
};

export const promiseException = () => {
  process.on("unhandledRejection", (reason, promise) => {
    const correlationId =
      promise && promise.req ? promise.req.correlationId : "unknown";
    logger.error(
      `Unhandled Rejection at: ${promise}, reason: ${reason.message}`,
      { correlationId }
    );

    // Optionally, log the full stack trace of the reason
    // logger.error(`Unhandled Rejection stack trace: ${reason.stack}`);

    process.exit(1);
  });
};
