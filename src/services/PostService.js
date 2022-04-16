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
                    return res.json().then(data => data);
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
    },

    deletePost: async (id) => {
        return fetch("http://localhost:8000/api/post/" + id, {
            method: "delete",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include'
        }).then(res => {
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
    },
    upVote: async (id)=>{
        return fetch("http://localhost:8000/api/post/upvote/"+id,{
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res=>{
            if (res.status !==500) {
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
    downVote: async (id)=>{
        return fetch("http://localhost:8000/api/post/downvote/"+id,{
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res=>{
            if (res.status !==500) {
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
    getNotices: async ()=>{
        return await fetch('http://localhost:8000/api/post/getallnotices', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "get",
            credentials: 'include'
        })
            .then(res => {
                if (res.status !== 401) {
                    return res.json().then(data => data);
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

    getNoticesCount: async ()=>{
        return await fetch('http://localhost:8000/api/post/numnotice', {
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
    getPostsCount: async ()=>{
        return await fetch('http://localhost:8000/api/post/numpost', {
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

    uploadNotice: async (notice) => {
        return fetch('http://localhost:8000/api/post/notice', {
            method: "post",
            body: JSON.stringify(notice),
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
    },



}