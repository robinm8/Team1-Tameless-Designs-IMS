<template>
    <div class="App">
        <app-header></app-header>
        <message-component></message-component>
        <main class="App__main">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex';
    import Header from './components/Header.vue';
    import MessageComponent from './components/common/MessageComponent.vue';
    export default {
        components: {
            AppHeader: Header,
            MessageComponent
        },
        methods: {
            ...mapActions(['listenToItemList']),
        },
    }
</script>

<style>
    #reset-store-panel {
        position: fixed;
        bottom: 0px;
        right: 0px;
    }

    .margin-left-sm {
        margin-left: 10px;
    }

    html,
    body {
        height: 100%;
    }

    .wrapper {
        min-height: 100%;
        margin-bottom: -50px;
        padding-bottom: 50px;
    }

    footer {
        height: 50px;
        color: #666;
        padding: 10px 0 10px 0;
        font-size: 85%;
    }

    footer a {
        color: #999;
    }

    footer a:hover {
        color: #efefef;
    }

    .inline-block {
        display: inline-block;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.5s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
