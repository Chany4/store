<template>
  <div id="parent">
      <form @submit.prevent="formSubmit" class="signup-form">
          <h1>SignUp Form hehe</h1>
          <label>Email:</label>
          <input type="email" required v-model="email">
          <label>Password:</label>
          <input type="password" required v-model="password">
          <label>Role:</label>
          <select v-model="role">
              <option value="developer">Developer</option>
              <option value="designer">Web Designer</option>
              <option value="">Select a role</option>
          </select>
          <label>Languages:</label>
          <div class="language-input">
              <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage()">
              <button type="button" @click="addLanguage">Add Language</button>
          </div>
          <div class="language-list">
              <div v-for="(lang, index) in languages" :key="index" class="language-item">
                  <span>{{ index + 1 }}: {{ lang }}</span>
                  <button type="button" @click="deleteLang(index)">Delete</button>
              </div>
          </div>
          <div class="terms">
              <input type="checkbox" v-model="terms" required>
              <label>Accept Terms and Conditions</label>
          </div>
          <button type="submit">Submit</button>
      </form>
  </div>
</template>
<script>
export default {
  data() {
      return {
          email: '',
          password: '',
          role: '',
          terms: false,
          languages: [],
          currentLanguage: '',
      };
  },
  methods: {
      formSubmit() {
          console.log('Form submitted');
          this.email = '';
          this.password = '';
          this.terms = false;
          this.currentLanguage = '';
          this.role = '';
          this.languages = [];
      },
      addLanguage() {
          if (this.currentLanguage.trim() !== '') {
              this.languages.push(this.currentLanguage.trim());
              this.currentLanguage = '';
          }
      },
      deleteLang(index) {
          this.languages.splice(index, 1);
      },
      keyfinder(event) {
          console.log('Key pressed', event.key);
      }
  }
};
</script>
<style scoped>
.signup-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 5px solid pink;
  border-radius: 5px;
  background-color: pink;
}
.signup-form h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
.signup-form label {
  display: block;
  margin-bottom: 5px;
}
.signup-form input[type="email"],
.signup-form input[type="password"],
.signup-form select,
.signup-form input[type="text"] {
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.signup-form select {
  width: 100%;
}
.signup-form .language-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.signup-form .language-input input[type="text"] {
  flex: 1;
}
.signup-form .language-input button {
  margin-left: 10px;
}
.signup-form .language-list {
  margin-bottom: 10px;
}
.signup-form .language-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #E9E9E9;
  margin-bottom: 5px;
  border-radius: 4px;
}
.signup-form .terms {
  margin-bottom: 10px;
}
.signup-form button[type="submit"],
.signup-form button[type="button"] {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.signup-form button[type="submit"]:hover,
.signup-form button[type="button"]:hover {
  background-color: #0056B3;
}
.signup-form input[type="checkbox"] {
  margin-right: 5px;
  vertical-align: middle;
}
</style>
