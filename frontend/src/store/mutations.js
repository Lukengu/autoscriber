export default {
    REQUEST_SENT(state) {
        state.status = 'loading'
    },
    REQUEST_SUCCESS(state, payload) {
        state.status = 'success'
        state.response = payload.response
        state.loading = payload.response.length === 0;
    },
    REQUEST_ERROR(state) {
        state.status = 'error'
        state.loading = false
    },
    
   
}
