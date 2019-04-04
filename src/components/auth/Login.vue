<template>
    <div class="thumbnail">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                <div id="firebaseui-auth-container"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapActions,
    } from 'vuex'

    import firebaseui from 'firebaseui'
    import firebase from 'firebase'

    export default {
        data() {
            return {
                email: '',
                password: '',
                isLoading: false
            }
        },
        // Now handled by "isLoggedIn" routing logic
        //
        // beforeRouteLeave(to, from, next) {
        //     // this.authUI.delete(); // Now handled by "isLoggedIn" routing logic
        //     next();
        // },
        mounted() {
            var uiConfig = {
                'signInSuccessUrl': '/',
                'callbacks': {
                    'signInSuccess': function(user, credential, redirectUrl) {
                        console.log(redirectUrl);

                        return true;
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
                    this.clearMessage()

                    this.$router.push({
                        name: 'mainpage'
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
