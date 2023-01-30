<template>
    <div
        id="k-login"
        class="max-w-full bg-white drop-shadow-xl rounded-2xl p-10 p-lg-15 mx-auto"
    >
        <div class="text-center mb-10">
            <h1 class="text-gray-900 mb-3 text-3xl uppercase font-bold">
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

        <div class="fv-row mb-4">
            <k-input-text
                type="text"
                placeholder="jhon@doe.com"
                label="Email / Usuario"
                tabindex="1"
                autofocus
            />

            <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                    <ErrorMessage name="email" />
                </div>
            </div>
        </div>

        <div class="fv-row mb-10">
            <k-input-text
                type="password"
                name="password"
                label="Contraseña"
                tabindex="2"
            />

            <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                    <ErrorMessage name="password" />
                </div>
            </div>
        </div>

        <div class="text-center">
            <k-button
                :loading="loading"
                icon="right-from-bracket"
                class="w-full mb-4"
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
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'

    import { useAuth, useConfig } from '@/store'
    import { signupEnabled } from '@/helpers/config'

    import { useRouter } from 'vue-router'

    export default defineComponent({
        name: 'Login',

        setup() {
            const auth = useAuth()
            const router = useRouter()
            const config = useConfig()

            const submitButton = ref<HTMLButtonElement | null>(null)
            const loading = ref<boolean | string>(false)

            const onSubmitLogin = async (params: any) => {
                loading.value = 'Iniciando Sesión...'

                auth.login(params)
                    .then(() => {
                        const homepage = config.get('homepage')
                        //notify.success('Sesión iniciada 😁')
                        router.push({ name: homepage })
                    })
                    .catch((error: any) => {
                        console.error(error)
                        //notify.error('Usuario o contraseña incorrectos 😣')
                    })
                    .finally(() => {
                        loading.value = false
                    })
            }

            return {
                loading,
                onSubmitLogin,
                // loginSchema,
                submitButton,
                signupEnabled
            }
        }
    })
</script>

<style>
    #k-login {
        width: 420px;
    }
</style>
