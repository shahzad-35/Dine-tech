<template>
    <img class="logo" src="../assets/logo.jpg" alt="">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" placeholder="Enter Your Name" name="name" id="id">
        <input type="email" placeholder="Enter Your Email" name="email" id="email">
        <div class="password">
            <input type="password" placeholder="Enter Your Password" name="password" id="password">
            <i class="ft-solid ft-eye" id="eye"></i>
        </div>
        <button> Sign up</button>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
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