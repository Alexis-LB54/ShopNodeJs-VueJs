<template>
  <h1>Register</h1>
  <form @submit.prevent="handleSubmit">
    <label for="username">username</label>
    <input type="text" name="username" id="username" v-model="user.username" />
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      v-model="user.password"
    />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="user.email" />
    <label for="image">Avatar</label>
    <input
      type="file"
      name="image"
      id="image"
      accept="image/"
      @change="onFileChange"
      ref="image"
    />
    <input type="submit" value="Register" />
  </form>
  <p v-if="response !== ''">
    {{ response }} <router-link to="/login">Log in to your account</router-link>
  </p>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      response: "",
    };
  },
  mounted() {
    sessionStorage.clear();
  },
  methods: {
    onFileChange: function () {
      const image = this.$refs.image.files[0];
      this.user.image = image;
    },
    handleSubmit: async function () {
      JSON.stringify(this.user.image);
      let formData = new FormData();
      formData.append("username", this.user.username);
      formData.append("email", this.user.email);
      formData.append("password", this.user.password);
      formData.append("image", this.user.image);
      let res = await fetch("http://localhost:96/inscription", {
        method: "POST",
        body: formData,
      })
        .then((r) => r.json())
        .catch((e) => console.log(e));
      console.log(res);
      if (res.error) {
        this.response = res.message;
        return;
      }
      this.response = "Registered successfully !";
    },
  },
};
</script>
<style scoped>
</style>