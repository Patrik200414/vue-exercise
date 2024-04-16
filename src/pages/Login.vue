<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="emailInput">Email address: </label>
            <input type="email" class="form-control" id="emailInput" placeholder="Enter address" required v-model="email">
        </div>
        <div class="form-group">
            <label for="passwordInput">Password: </label>
            <input type="password" class="form-control" id="passwordInput" placeholder="Password" required v-model="password">
        </div>
        <button class="btn btn-primary">Login</button>
    </form>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.email);
            console.log(this.password);
        }
    }
}
</script>