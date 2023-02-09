<script>
import axios from 'axios';
/*new Vue({
  el: 'form',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      response: '',
      success: '',
      activeClass: 'active'
    }
  },
  methods: {
    submitForm() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        name: this.name,
        email: this.email,
        message: this.message
      }).then(response => {
         console.log(response);
         //this.response = response.data
        /!*this.success = 'Data saved successfully';
        this.response = JSON.stringify(response, null, 2)*!/
      }).catch(error => {
        console.log(error)
        //this.response = 'Error: ' + error.response.status
      })
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
})*/

export default {
  name: 'form',
  data(){
    return{
      form: {
        name: '',
        email: '',
        gender: '',
        refer: '',
        profession: [],
        message: '',
        satisfaction: '5',
        interested: [],
        terms: false
      }
    }
  },
  methods:{
    submitForm(){
      axios.post('/form', this.form)
          .then((res) => {
            //Perform Success Action
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
            // error.response.status Check status code
          }).finally(() => {
        //Perform action in always
      });
    }
  }
}
</script>

<template>

  <h1>Form!</h1>
  <form @submit.prevent="submitForm">
    <p>Navn: {{ name }}</p>
    <input type="text" v-model="name" placeholder="Name" required/>

    <p>E-postadresse: {{ email }}</p>
    <input type="email" v-model="email" placeholder="E-postadresse" required/>
    <p>Melding: {{ message }}</p>
    <textarea v-model="message" required></textarea>
    <button type="submit">Send</button>
  </form>

</template>