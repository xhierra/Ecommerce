<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album">
            </figure>
            <div class="card-body">
                <h2 class="card-title">Connect with Sam's Store</h2>

                <Input
                    :option="{
                        label: 'Email / Username',
                        placeholder: 'Enter your email / username',
                        type: 'email',
                    }"
                    v-model="credential.email"
                />

                <Input
                    :option="{
                        label: 'Password',
                        placeholder: 'Enter your password',
                        type: 'password',
                    }"
                    v-model="credential.password"
                />

                <div class="form-control mt-6">
                    <button class="btn btn-primary" @click="login">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import Vue from 'vue';
import Input from '@/components/Input/TextField.vue';
import { mapActions } from 'vuex';
export default Vue.extend({
    
    // middleware: 'authenticated',

    components:{
        Input
    },
    layout: 'plain',
    data(){
        return {
            credential:{
                email: '',
                password: ''
            }
        }
    },
    methods: {

        ...mapActions([
            'loginEmailAuth',
            'registerEmailAuth'
        ]),

        async login(){

            const login:{
                title: string,
                message: string ,
                status: string
            } = await this.loginEmailAuth(this.credential);

            this.$notify({
                title: login.title,
                text: login.message,
                type: login.status ? 'success' : 'error',
            });
        }
    }
})
</script>