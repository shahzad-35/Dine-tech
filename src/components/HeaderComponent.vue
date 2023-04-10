<template>
    <div class="nav-bar">
        <a href="/">Home</a>
        <a href="/add-resturnat">Add Resturant</a>
        <a href="/update-resturnat">Update Resturant</a>
        <a href="/logout">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>
<style>
.nav-bar {
    background-color: rgb(0, 0, 0);
    overflow: hidden;
}

.nav-bar a {
    float: left;
    text-align: center;
    font-size: 18px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    padding: 10px 14px;
    margin-right: 6px;
}

.nav-bar a:hover {
    background-color: rgb(236, 231, 225);
}
</style>