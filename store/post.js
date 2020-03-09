import { resolve } from "url";

const posts = [
    {
        title: 'Post number 1',
        text: 'Привет это Текст 1 поста',
        date: new Date('10.03.2020'),
        views: 11,
        comments: [1,2], 
        _id: 'id1'
    }, {
        title: 'Post number 2',
        text: 'Привет это Текст 2 поста',
        date: new Date(),
        views: 22,
        comments: [3,4], 
        _id: 'id2'
    }, {
        title: 'Post number 3',
        text: 'Привет это Текст 3 поста',
        date: new Date(),
        views: 33,
        comments: [5,6], 
        _id: 'id3'
    }
]

export const state = () => ({

})

export const mutations = {

}

export const actions = {
    async fetchAdmin({}) {
        return await new Promise (resolve => {
            setTimeout(()=>{
                resolve(posts)
            }, 1000)
        })
    },
    async fetchAdminPostById({}, id) {
        return await new Promise (resolve => {
            setTimeout(()=>{
                //debugger
                resolve(posts.find(p => p._id == id))
            }, 1000)
        })
    },
    async remove({}, id) {
        console.log('Delete post # ' + id)
    },
    async update({}, {id, title, text}) {
        console.log('Post is update ', id, title, text)
    },
    async create({commit}, {title, text, image}) {

        try {
            const fd = new FormData()
            fd.append('title', title)
            fd.append('text', text)
            fd.append('image', image, image.name)
            return await new Promise (resolve => {
                setTimeout(()=>{
                    //debugger
                    resolve()
                }, 1000)
            })
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    }
}

export const getters = {

}