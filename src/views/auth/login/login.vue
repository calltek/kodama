<template>
    <k-card id="k-login">
        <div class="p-1 sm:p-5 select-none">
            <div class="text-center mb-10">
                <h1 class="mb-3 sm:text-3xl text-2xl uppercase font-bold">
                    Iniciar Sesión
                </h1>

                <div v-if="signupEnabled" class="text-gray-400 fw-bold fs-4">
                    ¿Nuevo aquí?
                    <router-link
                        :to="{ name: 'register' }"
                        class="link-primary fw-bolder"
                    >
                        Regístrate
                    </router-link>
                </div>
            </div>

            <form @submit.prevent="submitLogin">
                <div class="mb-4">
                    <k-input
                        v-model="state.username"
                        type="text"
                        placeholder=""
                        label="Email / Usuario"
                        tabindex="1"
                        :errors="v$.username.$errors"
                    />
                </div>

                <div class="mb-10">
                    <k-input
                        v-model="state.password"
                        type="password"
                        name="password"
                        label="Contraseña"
                        tabindex="2"
                        :errors="v$.password.$errors"
                    />
                </div>

                <div class="text-center">
                    <k-button
                        :loading="loading"
                        icon="right-from-bracket"
                        class="w-full mb-4"
                        :disabled="!isValidForm"
                        type="submit"
                    >
                        Acceder
                    </k-button>

                    <router-link
                        :to="{ name: 'forgotPassword' }"
                        class="text-sm"
                        tabindex="3"
                    >
                        ¿Olvidaste tu contraseña?
                    </router-link>
                </div>
            </form>
        </div>
    </k-card>
</template>

<script lang="ts">
    import { computed, defineComponent, inject, reactive, ref } from 'vue'
    import { required } from '@vuelidate/validators'
    import useVuelidate from '@vuelidate/core'
    import { useRouter } from 'vue-router'

    import { KodamaParams } from '@/config'
    import { homepage } from '@/helpers/config'

    export default defineComponent({
        name: 'Login',

        setup() {
            const auth = inject('$auth') as KodamaParams['auth']

            const router = useRouter()

            const signupEnabled = false
            const loading = ref(false)

            const state = reactive({
                username: '',
                password: ''
            })

            const rules = {
                password: { required },
                username: { required }
            }

            const v$ = useVuelidate(rules, state)

            const isValidForm = computed(() => {
                return !v$.value.$invalid
            })

            const submitLogin = async (params: any) => {
                if (isValidForm.value) {
                    loading.value = true

                    auth.login(state.username, state.password)
                        .then(() => {
                            // router.push(homepage.value)
                            window.location.reload()
                        })
                        .finally(() => {
                            loading.value = false
                        })
                }
            }

            return {
                loading,
                submitLogin,
                // loginSchema,
                signupEnabled,
                state,
                v$,
                isValidForm
            }
        }
    })
</script>

<style>
    #k-login {
        @apply w-full sm:w-96;
    }
</style>
