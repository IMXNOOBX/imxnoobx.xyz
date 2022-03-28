# :material-help-network-outline: Handling Errors

Some info about handling errors!

## 404 Not Found

??? note "404 Not Found Error Code"
    The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to <a href="https://en.wikipedia.org/wiki/Link_rot">link rot</a>.

### What Does It Mean in This API

* In case the error is when making the request to info endpoints (user/server) [^1], It will be commonly because the user/server (the requested information) does not exist or can not be found


## 406 Not Acceptable
??? note "406 Not Acceptable Error Code"
    The HyperText Transfer Protocol (HTTP) 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers, and that the server is unwilling to supply a default representation.

### What Does It Mean in This API

* This error will be generated when the server is not able to accept the request content type. Simply put, it's a spelling error.


## 500 Internal Server Error
??? note "500 Internal Server Error Error Code"
    The HyperText Transfer Protocol (HTTP) 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.

    This error response is a generic "catch-all" response. Usually, this indicates the server cannot find a better 5xx error code to response. Sometimes, server administrators log error responses like the 500 status code with more details about the request to prevent the error from happening again in the future.

### What Does It Mean in This API

* Its broken or that endpoint is down for a couple of reasons

[^1]: This only affets endponts to where you ask for information