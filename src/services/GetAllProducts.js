import http from "./HttpService";

export function getAllProducts () {
    return http.get()
}