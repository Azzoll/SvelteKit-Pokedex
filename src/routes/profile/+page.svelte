<script lang="ts">
    import { page } from '$app/stores'
    export let data: any
</script>
<svelte:head>
    <title>SvelteKit Pokedex Profile</title>
</svelte:head>



<div class="container">
    <div class="userInfoContainer">
        <div class="title">
            <h1>PROFILE</h1>
        </div>
        <div class="message">
            <p>Welcome {$page.data.user}!</p>
        </div>
        <div class="userInfo">
            <p><strong>Username:</strong> {$page.data.user}</p>
            <p><strong>Member since:</strong> {data.createAT}</p>
        </div>
        <a href="/logout"><div class="logout">Logout</div></a>
    </div>
</div>

<style>
    a {
        text-decoration: none;
        color: black;
    }
    .container {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100vh;
    }
    .userInfoContainer {
        border: solid lightgray;
        border-radius: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        height: 70vh;
        width: 750px;
    }
    .title {
        font-size: 35px;
    }
    .message {
        font-size: 25px;
    }
    .userInfo {
        text-align: left;
        margin-left: 50px;
        margin-bottom: 70px;
    }
    .logout {
        font-size: 25px;
        margin: 40px;
        margin-top: 150px;
        border: solid black;
        border-radius: 15px;
        padding: 25px;
        background-color: rgb(240, 83, 83);
    }
    .logout:hover {
        background-color: rgb(235, 45, 45);
    }
</style>