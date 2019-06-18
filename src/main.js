import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script>


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.config.productionTip = false;


var firebaseConfig = {
  apiKey: "AIzaSyCZPRR996ktUKnJ41R57nEY70PTq-6bfZo",
    authDomain: "creativeprojects-63395.firebaseapp.com",
    databaseURL: "https://creativeprojects-63395.firebaseio.com",
    projectId: "creativeprojects-63395",
    storageBucket: "creativeprojects-63395.appspot.com",
    messagingSenderId: "1036588919012",
    appId: "1:1036588919012:web:0c1a54ed97f8973f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});