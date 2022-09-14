import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });


const store = createStore({

    state:{

        user:null,
        isLogged:false,
        saltKey:"r1a2n3d4o!m-K0E9Y?",

    },

    mutations:{

        setUser(context,user){

            context.user = user;

        },

        setResetUser(context){

            context.user = null;

        },

        setLogged(context,situation){

            context.isLogged = situation;

        },

        setLogout(context, situation){

            context.isLogged = situation;

        }



    },

    getters:{

        _isAuthenticated(state){

            return state.isLogged !== false

        },

        _getUser(state){

            return state.user;

        },

        _getSaltKey(state){

            return state.saltKey;

        }
        

    },

    plugins: [createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
      })]

   



});




export default store
