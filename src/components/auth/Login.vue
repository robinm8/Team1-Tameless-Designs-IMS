<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="thumbnail">
                    <div class="row">
                        <div v-if="isSuccess" class="pa-5 text-xs-center">
                            <v-progress-circular :size="250" color="blue" indeterminate></v-progress-circular>
                        </div>
                        <div v-else class="pa-5 col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                            <div id="firebaseui-auth-container"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    import firebaseui from 'firebaseui'
    import firebase from 'firebase'

    export default {
        computed: {
            ...mapGetters(['isLoggedIn', 'currentUser']),
        },
        data() {
            return {
                email: '',
                password: '',
                isLoading: false,
                isSuccess: false
            }
        },
        beforeRouteLeave(to, from, next) {
            if (this.isLoggedIn) {
                this.isSuccess = true
                this.authUI.delete();
            }

            setTimeout(function() {
                next();
            }, 500);

        },
        mounted() {
            var uiConfig = {
                'signInSuccessUrl': '',
                'callbacks': {
                    'signInSuccess': function(user, credential, redirectUrl) {
                        console.log(redirectUrl);

                        this.isSuccess = true

                        return false; // Disable signInSucess redirect
                    }
                },
                'signInOptions': [{
                        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                        requireDisplayName: true,
                        authMethod: 'https://accounts.google.com',
                        clientId: '616553946370-l2ipht9a479a45oqs57rrt9lmpg610fp.apps.googleusercontent.com'
                    },
                    {
                        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        requireDisplayName: true,
                        whitelistedCountries: ['US'],
                        recaptchaParameters: {
                            size: 'invisible'
                        }
                    },
                    {
                        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        requireDisplayName: true
                    }
                ],
                'credentialHelper': firebaseui.auth.CredentialHelper.GOOGLE_YOLO
            };
            if (!this.authUI) {
                this.authUI = new firebaseui.auth.AuthUI(firebase.auth());
            }
            this.authUI.start('#firebaseui-auth-container', uiConfig);
        },
        methods: {
            ...mapActions(['addMessage', 'clearMessage', 'loginWithEmail']),
            loginWithEmailLocal() {

                this.isLoading = true

                let data = {
                    email: this.email,
                    password: this.password
                }

                this.loginWithEmail(data).then(() => {
                    this.isSuccess = true

                    this.$router.push({
                        path: '/'
                    })
                }).catch((error) => {
                    let message_obj = {
                        message: error.message,
                        messageClass: 'danger',
                        autoClose: true
                    }

                    this.addMessage(message_obj)
                }).then(() => {
                    this.isLoading = false
                })
            }
        }
    }
</script>
