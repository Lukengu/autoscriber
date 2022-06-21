import axios from "axios"
export default {
    search({commit}, param){
        return new Promise((resolve, reject) => {
            commit('REQUEST_SENT')
            axios.get(`http://localhost:3000/${param.keyword}`)
            .then(resp => {

                commit('REQUEST_SUCCESS', { response: resp.data })
                resolve(resp.data)

            })
            .catch(err => {
                commit('REQUEST_ERROR')
                reject(err)
              })
        });
    }
}