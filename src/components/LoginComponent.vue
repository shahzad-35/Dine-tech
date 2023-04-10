<template>
    <img class="logo" src="../assets/logo.jpg" alt="">
    <h1>Log-in Page</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Your Email" name="email" id="email">
        <div class="password-section">
            <input v-bind:type="[showPassword ? 'text' : 'password']" v-model="password" class="form-control"
                placeholder="Password">
            <span class="password-eye" @click="showPassword = !showPassword">
                <font-awesome-icon class="password-eye-icon" :icon="['fasl', showPassword ? 'eye' : 'eye-slash']" />
            </span>
        </div>
        <!-- <i id="icon" class="far fa-eye"></i> -->
        <!-- <input id="password" v-bind:type="[showPassword ? 'text' : 'password']" placeholder="Password">
        <font-awesome-icon @click="showPassword = !showPassword" class="password-eye-icon"
            :icon="['fasl', showPassword ? 'eye' : 'eye-slash']" /> -->
        <button @click="login">Login</button>
        <p>
            New user? <router-link to="/sign-up">signup</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginComponent',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    mounted() {
        const auth = localStorage.getItem('auth');
        if (auth) {
            this.$router.push({ name: 'Home' })
        }
    },
    methods: {
        async login() {
            const result = await axios.get(
                `http://localhost:3000?email=${this.email}&password=${this.password}`
            );
            if (result.status == 200) {
                localStorage.setItem('auth', true)
                this.$router.push({ name: 'Home' })
            }
        }
    }
}
</script>