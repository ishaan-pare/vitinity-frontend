export default {
    getPosts: async () => {
        return await fetch('http://localhost:8000/api/post/getall', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "get",
            credentials: 'include'
        })
            .then(res => {
                if (res.status !== 401) {
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

    uploadPost: async (post) => {
        return fetch('http://localhost:8000/api/post/upload', {
            method: "post",
            body: JSON.stringify(post),
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include'
        })
            .then(res => {
                if (res.status !== 401) {
                    return res.json().then(data => data);
                }
                else {
                    return {
                        message: {
                            msgBody: "Unauthorized",
                            msgError: true
                        }
                    }

                }

            })
    }
}