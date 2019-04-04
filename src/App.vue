<template>
    <div>
        <app-header></app-header>
        <message-component></message-component>
        <div class="container">

            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>

                </div>
            </div>
        </div>
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
            appHeader: Header,
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
</style>
