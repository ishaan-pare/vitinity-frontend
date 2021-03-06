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
                            regId: "",
                            isAdmion: ""
                        }
                    }
            });
    },
    getUsersCount: async ()=>{
        return await fetch('http://localhost:8000/api/user/numuser', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'get',
            credentials: 'include'
        })
            .then(res=>{
                if (res.status == 200) {
                    return res.json().then(data=>data);
                }
                else {
                    return {
                        message: {
                            msgBody: "UnAuthorized",
                            msgError: true
                        }
                    }
                }
            })
    },

    getAllAdmins: async ()=>{
        return await fetch('http://localhost:8000/api/user/admins', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'get',
            credentials: 'include'
        })
            .then(res=>{
                if (res.status == 200) {
                    return res.json().then(data=>data);
                }
                else {
                    return {
                        message: {
                            msgBody: "UnAuthorized",
                            msgError: true
                        }
                    }
                }
            })
    },
    getAllAuthUsers: async ()=>{
        return await fetch('http://localhost:8000/api/user/allauthusers', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'get',
            credentials: 'include'
        })
            .then(res=>{
                if (res.status == 200) {
                    return res.json().then(data=>data);
                }
                else {
                    return {
                        message: {
                            msgBody: "UnAuthorized",
                            msgError: true
                        }
                    }
                }
            })
    },

    addNewUser: async (user) => {
        return fetch('http://localhost:8000/api/user/newuser', {
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




}