import { v4 as uuidv4 } from 'uuid';

const correlationIdMiddleware = (req, res, next) => {
    // Check if correlationId is already provided in headers
    let correlationId = req.headers['x-correlation-id'] || uuidv4();
    req.correlationId = correlationId;
    res.setHeader('X-Correlation-ID', correlationId);
    next();
};

export default correlationIdMiddleware;
