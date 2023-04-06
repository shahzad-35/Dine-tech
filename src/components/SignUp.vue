<template>
    <img class="logo" src="../assets/logo.jpg" alt="">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter Your Name" name="name" id="name">
        <input type="email" v-model="email" placeholder="Enter Your Email" name="email" id="email">
        <!-- <div class="password-section">
            <input v-bind:type="[showPassword ? 'text' : 'password']" class="form-control" placeholder="Password">
            <span class="password-eye" @click="showPassword = !showPassword">
                <font-awesome-icon class="password-eye-icon" :icon="['fasl', showPassword ? 'eye' : 'eye-slash']" />
            </span>
        </div> -->
        <!-- <i id="icon" class="far fa-eye"></i> -->
        <font-awesome-icon @click="showPassword = !showPassword" class="password-eye-icon" :icon="['fasl', showPassword ? 'eye' : 'eye-slash']" />
        <input id="password" v-bind:type="[showPassword ? 'text' : 'password']" placeholder="Password">
        <button @click="signup"> Sign up</button>
    </div>
</template>

<script>
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

library.add(faEyeSlash);
library.add(faEye);

export default {
    name: 'SignUp',
    data() {
        return {
            showPassword: false,
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            console.log('------', this.username, this.email, this.password);
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
    border: 1px solid #b5b5b5;
    border-radius: 4px;
    padding: 0px 0px 0px 15px;
    box-sizing: border-box;
}

.register button {
    width: 133px;
    background-color: #77a568;
    border: 1px solid skyblue;
    height: 46px;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 10px;
}

.password-section {
    width: 250px;
    margin: 0px auto 0px auto;
    display: flex;
}

.password-eye-icon {
    padding: 8px 0px 0px 96px;
    text-align: right;
    cursor: pointer;
    position: absolute;
}

.password-eye {
    background-color: gainsboro;
    width: 26px;
    height: 36px;
    display: block;
    border-radius: 4px;
    border: 1px solid #b5b5b5;
    padding-top: 3px;
    margin-left: 0px;
}
</style>