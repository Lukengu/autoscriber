import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default createStore({
  state(){
    return {
        state(){
          return {
              response: [],
              loading: true,
          };
      },  
    };
},
getters,
mutations,
actions
 
})
