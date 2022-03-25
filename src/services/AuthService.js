export default {
    login: async (user) => {
        return fetch('http://localhost:8000/api/user/login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        }).then(async res => {
            if (res.status !== 401)
                return res.json().then(data => data)
            else
                return {
                    isAuthenticated: false,
                    user: {
                        username: "",
                        regId: "",
                    }
                }
        });
    },

    register: async (user) => {
        return fetch('http://localhost:8000/api/user/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then(data => data);
    },
    logout: async () => {
        return fetch('http://localhost:8000/api/user/logout', {
            method: "get",
            credentials: 'include'
        })
            .then(res=>res.json())
            .then(data => data);
    },
    isAuthenticated: async () => {
        return fetch('http://localhost:8000/api/user/authenticated', {
            method: "get",
            credentials: 'include'
        })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data=>data);
                else
                    return {
                        isAuthenticated: false,
                        user: {
                            id: "",
                            username: "",
                            regId: ""
                        }
                    }
            });
    }

}