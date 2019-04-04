<template>
    <div class="thumbnail">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                <div class="text-xs-center lighten-5 pa-5">Dashboard goes here</div>
            </div>
        </div>
    </div>
</template>

<script>
    import GridLoader from 'vue-spinner/src/GridLoader.vue'

    export default {
        components: {
            GridLoader
        }
    }
</script>

<style>
    .message {
        color: white;
        text-align: center;
    }
</style>
