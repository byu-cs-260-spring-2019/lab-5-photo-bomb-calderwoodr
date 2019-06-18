<template>
<div>
  <div v-if="user" class="header">
  <div class="container">
    
    
    <div>
      <h2>Welcome {{user.email}}!</h2>
    </div>
    <div class="button">
      <p><button @click="logout" class="pure-button pure-button-primary">Logout</button></p>
    </div>
    <br>
    <br>
    
    <div class="update">
      <h2>Upload a favorite Quote!</h2>
      <div class="form"> 
        <input v-model="quote" placeholder="Quote">
        <input v-model="author" placeholder="Author">
      </div>
      <!-- <button @click="postQuote">Post Quote</button> -->
    </div>
  </div>
  </div>
  <div v-else>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'mypage',
  // data: function () {
  //   return {
  //   quote: "",
  //   author: "",
  // };
  // },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
   created() {
    this.$store.dispatch("getUser");
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    async postQuote() {
        try {
          let resp = await axios.post('/api/post', 
          {
            quote: this.quote,
            author: this.author
          });
          console.log("after axios", resp);
        } catch (error) {
          console.log(error);
        }
    }
  }
}
</script>

<style scoped>
.pure-button {
  margin: 0px 20px;
}

.update {
  margin: 2rem;
  min-width: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;

}
.header {
  display: flex;
}

.header .button {
  margin-left: 50px;
  order: 2;
}
</style>