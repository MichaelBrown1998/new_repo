const baseUrl = "http://localhost:8080";
const apiUrl = `${baseUrl}/api/todo`;
// minutes * seconds * millisecond
const refreshInterval = 10 * 60 * 1000;

const service = {

    jwt: "",
    role: "",
    timeout: 0,

    getAll: async function () {
        const response = await fetch(apiUrl);
        if (response.status === 200) {
            return response.json();
        }
        return Promise.reject("get all ToDos failed");
    },

    remove: async function (todo) {
        const response = await fetch(`${apiUrl}/${todo.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + this.jwt
            }
        });
        if (response.status === 204) {
            return Promise.resolve();
        }
        return Promise.reject("delete failed");
    },

    add: async function (todo) {
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + this.jwt
            },
            body: JSON.stringify(todo)
        };

        const response = await fetch(apiUrl, init);
        if (response.status === 201) {
            return response.json();
        }
        return Promise.reject("ToDo was not created.");
    },

    update: async function (todo) {
        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + this.jwt
            },
            body: JSON.stringify(todo)
        };

        const response = await fetch(`${apiUrl}/${todo.id}`, init);
        if (response.status === 204) {
            return Promise.resolve();
        }
        return Promise.reject("ToDo was not updated.");
    },

    login: async function (credentials) {

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        };

        const response = await fetch(`${baseUrl}/authenticate`, init);
        if (response.status !== 200) {
            throw new Error("Authentication failed.");
        }

        const json = await response.json();
        this.parseJwt(json["jwt_token"]);
    },

    logout: function () {
        this.jwt = "";
        this.role = "";
        clearTimeout(this.timeout);
    },

    refreshToken: async function () {
        const init = {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + this.jwt
            }
        };

        const response = await fetch(`${baseUrl}/refresh_token`, init);
        if (response.status !== 200) {
            throw new Error("Automatic token refresh failed.");
        }

        const json = await response.json();
        this.parseJwt(json["jwt_token"]);
    },

    parseJwt: function (jwt) {
        this.jwt = jwt;
        const segments = jwt.split(".");
        const json = JSON.parse(atob(segments[1]));
        this.role = json.authorities;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.refreshToken(), refreshInterval);

        console.log(this);
    },

    clear: function () {
        clearTimeout(this.timeout);
    }
};

export default service;