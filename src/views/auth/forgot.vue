<template>
    <k-card id="k-forgot">
        <div class="p-1 sm:p-5 select-none">
            <div class="text-center mb-10">
                <h1 class="mb-3 sm:text-2xl text-xl uppercase font-bold">
                    ¿Olvidaste tu clave?
                </h1>
            </div>

            <div class="mb-4">
                <k-input
                    v-model="state.email"
                    type="email"
                    placeholder="jhon@doe.com"
                    label="Email"
                    tabindex="1"
                    :errors="v$.email.$silentErrors"
                />

                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>

            <div class="text-center">
                <k-button
                    :loading="loading"
                    icon="right-from-bracket"
                    class="w-full mb-4"
                    :disabled="!isValidForm"
                    @click="submitForgot"
                >
                    Acceder
                </k-button>

                <router-link
                    :to="{ name: 'login' }"
                    class="text-sm text-gray-400"
                >
                    Ya me acuerdo de mi clave
                </router-link>
            </div>
        </div>
    </k-card>
</template>

<script lang="ts">
    import { computed, defineComponent, inject, reactive, ref } from 'vue'
    import { required, email } from '@vuelidate/validators'
    import useVuelidate from '@vuelidate/core'
    import { KodamaParams } from '@/config'

    export default defineComponent({
        name: 'ForgotPassword',

        setup() {
            const auth = inject('$auth') as KodamaParams['auth']
            const loading = ref(false)

            const state = reactive({
                email: ''
            })

            const rules = {
                email: { email, required }
            }

            const v$ = useVuelidate(rules, state)

            const isValidForm = computed(() => {
                return !v$.value.$invalid
            })

            const submitForgot = async () => {
                if (isValidForm.value) {
                    loading.value = true

                    auth.forgot(state.email).finally(() => {
                        loading.value = false
                    })
                }
            }

            return {
                loading,
                state,
                v$,
                isValidForm,
                submitForgot
            }
        }
    })
</script>

<style>
    #k-forgot {
        @apply w-full sm:w-96;
    }
</style>
