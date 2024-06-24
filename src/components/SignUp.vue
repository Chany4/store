<template lang>
  <div id="parent">
    <form @submit.prevent= "formSubmit">
      <h1>Sign up from hehe</h1>
      <!-- Using v-model to save data in properties -->
      <label>Email: </label>
      <input type="email" required v-model="email">
      <label>Password</label>
      <input type="password" required v-model="password">

      <label>Role: </label>
      <!-- select box -->
      <select v-model="role">
      <!-- default option -->
       <option value="developer">Web Developer</option>
       <option value="designer">Web Designer</option>
       <option value="">Select a role : </option>
      </select>
      <label>Language</label>
      <!-- stuff must be added -->
      <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage">
      <button type="submit">submit</button>
      <div v-for="lang,index in languages" :key="index+1">
        <p id="para" @click="deleteLang(lang)">
          {{index+1}}:{{ lang }}
        </p>
      </div>
      <div class="terms">
        <!-- isn't it insane? you can use v-model on a checkbox and when checked, it can register a boolean value as true -->
         <input type="checkbox" required v-model="terms">
         <label>Accept terms and Conditions</label>
      </div>
      <h4>People wanted in your team:</h4>
      <div>
        <input type="checkbox" value="Shawn" v-model="names">
        <label>Mario</label>
      </div>
      <div>
        <input type="checkbox" value="Dean" v-model="names">
        <label>Dean</label>
      </div>
      <div>
        <input type="checkbox" value="Luigi" v-model="names">
        <label>Luigi</label>
      </div>

      </form>

      <div>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms: {{ terms }}</p>
        <p>People: {{ names }}</p>
        <p>Current language: {{ currentLanguage }}</p>
        <p>languages: {{ languages }}</p>
      </div>

      <!-- showing stored information in data function -->
  </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms:false,
            names: [],
            currentLanguage: '',
            language: ['something','nothing']
        }
    },
    methods: {
            keyfinder(event) {
              console.log(event);
            },
            deleteLang(event) {
              this.languages = this.languages.filter(item=> item != lang)
            },
            formSubmit(){
                console.log('The page has refreshed');
                this.email = '',
                this.password = '',
                this.terms = false,
                this.currentLanguage = '',
                this.role = ''
            }
     }
}
</script>
<style>

</style>
