import axios from "axios";

const serverUrl = "https://place_here_your_server_path";

const headers = () => ({
    "access-token":
        typeof localStorage !== "undefined"
            ? localStorage.getItem("access-token")
            : "",
    "token-type":
        typeof localStorage !== "undefined"
            ? localStorage.getItem("token-type")
            : "",
    client:
        typeof localStorage !== "undefined" ? localStorage.getItem("client") : "",
    expiry:
        typeof localStorage !== "undefined" ? localStorage.getItem("expiry") : "",
    uid: typeof localStorage !== "undefined" ? localStorage.getItem("uid") : "",
    "Content-Type": "application/json",
});

const axiosClient = () => {
    const instance = axios.create({
        responseType: "JSON",
        baseURL: serverUrl,
        headers: headers(),
    });

    return instance
}

export { axiosClient, headers, serverUrl };
