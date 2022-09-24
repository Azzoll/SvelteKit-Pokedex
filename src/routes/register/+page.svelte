<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData } from './$types'

  export let form: ActionData 
</script>
<svelte:head>
    <title>SvelteKit PokeDex Register</title>
</svelte:head>

<div class="container">
  <div class="formLogin">
    <h1>REGISTER</h1>
    <form class="form" method="POST" use:enhance>
        <div class="text">
          <label class="label" for="username">Username</label>
          <input class="input" id="username" name="username" type="text" required/>
        </div>
        <div class="text">
          <label class="label" for="password">Password</label>
          <input class="input" id="password" name="password" type="password" required/>
        </div>
        {#if form?.user}
          <p class="userError">Username is taken.</p>
        {:else if form?.errorPass}
          <p class="passError">Password must be at least 6 characters.</p>
        {/if}
      
        <button class="btnSubmit" type="submit">Sign Up</button>
    </form>
    <a class="register" href="login">Already have an account? Login!</a>
  </div>
</div> 
<style>
  .container {
      margin: 0;
      padding: 0;
      overflow: hidden;
      height: 100vh;
      background: linear-gradient(99deg, rgba(2,0,36,1) 0%, rgba(199,195,194,1) 0%, rgba(80,82,83,1) 100%);
  }
  .formLogin {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      background: lightgray;
      border-radius: 20px;
  }
  .formLogin h1 {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: solid silver;
  
  }.formLogin .form {
      padding: 0 20px;
      box-sizing: border-box;
  }
  .formLogin .text {
      position: relative;
      border-bottom: solid silver;
      margin: 30px 0;
      margin-right: 12px;
  }
  .formLogin .input {
      width: 100%;
      padding: 0 5px;
      height: 40px;
      font-size: 16px;
      border: none;
  }
  .formLogin .label {
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      font-size: 20px;
  }
  .btnSubmit {
      width: 100%;
      height: 50px;
      border: solid black;
      border-radius: 20px;
      font-size: 18px;;
  }
  .btnSubmit:hover {
      background-color: rgb(211, 209, 209);
  }
  .register {
      text-decoration: none;
      margin: 20px;
      font-size: 15px;
      color: black;
  }
  .register:hover {
      border-bottom: solid black;
  }
  </style>
  
