<template>
    <nav class="navbar navbar-inverse" role="navigation" v-cloak>
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Tameless Designs Inventory</router-link>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <router-link to="/login" tag="li" v-if="!isLoggedIn"><a>Login</a></router-link>
                <li v-if="isLoggedIn" class="li-pointer"><a @click="logout">Logout {{ userEmail }}</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['isLoggedIn', 'currentUser']),
            userEmail() {
                if (this.isLoggedIn) {
                    return this.currentUser.displayName ? this.currentUser.displayName : this.currentUser.phoneNumber
                } else {
                    return ''
                }
            }
        },
        methods: {
            ...mapActions(['logout'])
        }
    }
</script>

<style scoped lange="sass">
    [v-cloak] {
        display: none;
    }

    .navbar {
        position: inherit;
        border-radius: 0;
    }

    .navbar-btn a {
        color: white;
    }

    .li-pointer {
        cursor: pointer;
    }

    .li-pointer:hover {
        cursor: pointer;
    }
</style>
