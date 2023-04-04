<template>
    <img class="logo" src="../assets/logo.jpg" alt="">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter Your Name" name="name" id="name">
        <input type="email" v-model="email" placeholder="Enter Your Email" name="email" id="email">
        <div class="password">
            <input type="password" v-model="password" placeholder="Enter Your Password" name="password" id="password">
            <i class="ft-solid ft-eye" id="eye"></i>
        </div>
        <button @click="signup"> Sign up</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            console.log('------', this.username, this.email);
            let result = await axios.post("http://localhost:3000/users", {
                id: Date.now(),
                name: this.username,
                email: this.email,
                password: this.password,
            });
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}

.register input {
    display: block;
    width: 250px;
    height: 35px;
    margin: 0px auto 30px auto;
    border: 1px solid skyblue;
    border-radius: 4px;
    padding: 0px 0px 0px 15px;
    box-sizing: border-box;
}

.register button {
    width: 250px;
    background-color: skyblue;
    border: 1px solid skyblue;
    height: 30px;
    cursor: pointer;
}
</style>