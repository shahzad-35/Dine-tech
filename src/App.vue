<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  mounted() {
    console.warn("reload");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 100px;
}

.register input,
.login input {
  display: block;
  width: 290px;
  height: 45px;
  margin: 0px auto 30px auto;
  border: 1px solid #b5b5b5;
  border-radius: 4px;
  padding: 0px 0px 0px 15px;
  box-sizing: border-box;
}

.register button,
.login button {
  width: 133px;
  background-color: #77a568;
  border: 1px solid skyblue;
  height: 46px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 10px;
}

.password-section {
  width: 290px;
  margin: 0px auto 0px auto;
  display: flex;
}

.password-eye-icon {
  padding: 10px 0px 0px 0px;
  /* text-align: right; */
  cursor: pointer;
  position: absolute;
}

.password-eye {
  background-color: white;
  width: 0px;
  height: 30px;
  display: block;
  border-radius: 4px;
  border: 1px solid #ffffff;
  padding-top: 3px;
  margin-left: 0px;
}
</style>