# Handling Errors

Some info about handling errors!

## Error Code 404 Not Found

The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to [link rot](https://en.wikipedia.org/wiki/Link_rot).

### What Does It Mean in This API

* In case the error is when making the request to user/server endpoints, It will be commonly because the user does not exist or has not been found


## Error Code 500 Internal Server Error

The HyperText Transfer Protocol (HTTP) 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.

This error response is a generic "catch-all" response. Usually, this indicates the server cannot find a better 5xx error code to response. Sometimes, server administrators log error responses like the 500 status code with more details about the request to prevent the error from happening again in the future.

### What Does It Mean in This API

* Its broken or that endpoint is down for a couple of reasons