<template>
    <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <Form
            id="kt_login_signin_form"
            class="form w-100"
            :validation-schema="loginSchema"
            @submit="onSubmitLogin"
        >
            <div class="text-center mb-10">
                <h1 class="text-dark mb-3">Iniciar Sesión</h1>

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

            <div class="fv-row mb-10">
                <label class="form-label fs-6 fw-bolder text-dark">Email</label>

                <Field
                    class="form-control form-control-lg form-control-solid"
                    type="text"
                    name="email"
                    autocomplete="off"
                    autofocus
                    tabindex="1"
                />

                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>

            <div class="fv-row mb-10">
                <div class="d-flex flex-stack mb-2">
                    <label class="form-label fw-bolder text-dark fs-6 mb-0">
                        Contraseña
                    </label>

                    <router-link
                        :to="{ name: 'forgotPassword' }"
                        class="link-primary fs-6 fw-bolder"
                        tabindex="3"
                    >
                        ¿Olvidaste tu contraseña?
                    </router-link>
                </div>

                <Field
                    class="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autocomplete="off"
                    tabindex="2"
                />

                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="password" />
                    </div>
                </div>
            </div>

            <div class="text-center">
                <k-button :loading="loading" icon="right-from-bracket" block>
                    Acceder
                </k-button>
            </div>
        </Form>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { ErrorMessage, Field, Form } from 'vee-validate'
    import { useAuth } from '../../store'
    import { signupEnabled } from '../../helpers/config'
    import { notify } from '../../plugins'

    import { useRouter } from 'vue-router'
    import * as Yup from 'yup'

    export default defineComponent({
        name: 'Login',
        components: {
            Field,
            Form,
            ErrorMessage
        },
        setup() {
            const auth = useAuth()
            const router = useRouter()

            const submitButton = ref<HTMLButtonElement | null>(null)
            const loading = ref<boolean | string>(false)

            // Create form validation object
            const loginSchema = Yup.object().shape({
                email: Yup.string().email().required().label('Email'),
                password: Yup.string().min(4).required().label('Password')
            })

            const onSubmitLogin = async (params: any) => {
                loading.value = 'Iniciando Sesión...'

                auth.login(params)
                    .then(() => {
                        notify.success('Sesión iniciada 😁')
                        router.push({ name: 'dashboard' })
                    })
                    .catch((error: any) => {
                        notify.error('Usuario o contraseña incorrectos 😣')
                    })
                    .finally(() => {
                        loading.value = false
                    })
            }

            return {
                loading,
                onSubmitLogin,
                loginSchema,
                submitButton,
                signupEnabled
            }
        }
    })
</script>
