const httpStatusCodes = [
    { code: 200, message: "OK - Request successful" },
    { code: 201, message: "Created - Resource successfully created" },
    { code: 202, message: "Accepted - Request accepted for processing" },
    { code: 204, message: "No Content - Successful with no response body" },

    { code: 400, message: "Bad Request - Client error, invalid syntax" },
    { code: 401, message: "Unauthorized - Authentication required" },
    { code: 403, message: "Forbidden - You do not have access rights" },
    { code: 404, message: "Not Found - Resource not found" },
    { code: 409, message: "Conflict - Request conflicts with current state" },

    { code: 500, message: "Internal Server Error - Something went wrong" },
    { code: 502, message: "Bad Gateway - Invalid response from upstream server" },
    { code: 503, message: "Service Unavailable - Server is temporarily down" },
    { code: 504, message: "Gateway Timeout - Upstream server failed to respond" }
];