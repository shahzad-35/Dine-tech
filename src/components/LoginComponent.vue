<template>
    <img class="logo" src="../assets/logo.jpg" alt="">
    <h1>Log-in Page</h1>
    <div class="login">
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
        <button>Login</button>
        <p>
           New user? <router-link to="/sign-up">signup</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent'
}
</script>