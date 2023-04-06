<template>
    <img class="logo" src="../assets/logo.jpg" alt="">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter Your Name" name="name" id="name">
        <input type="email" v-model="email" placeholder="Enter Your Email" name="email" id="email">
        <div class="password-section">
            <input v-bind:type="[showPassword ? 'text' : 'password']" class="form-control" placeholder="Password">
            <span class="password-eye" @click="showPassword = !showPassword">
                <font-awesome-icon class="password-eye-icon" :icon="['fasl', showPassword ? 'eye' : 'eye-slash']" />
            </span>
        </div>
        <!-- <i id="icon" class="far fa-eye"></i> -->
        <!-- <input id="password" v-bind:type="[showPassword ? 'text' : 'password']" placeholder="Password">
        <font-awesome-icon @click="showPassword = !showPassword" class="password-eye-icon"
            :icon="['fasl', showPassword ? 'eye' : 'eye-slash']" /> -->
        <button @click="signup"> Sign up</button>
        <p>
            Already have an account? <router-link to="/login">login</router-link>
        </p>
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

            let result = await axios.post("http://localhost:3000/users", {
                id: Date.now(),
                name: this.username,
                email: this.email,
                password: this.password,
            });
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'Home' })
            }
        }
    }
}
</script>