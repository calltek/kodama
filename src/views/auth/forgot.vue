<template>
    <!--begin::Wrapper-->
    <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <Form
            id="kt_login_password_reset_form"
            class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            :validation-schema="forgotPassword"
            @submit="onSubmitForgotPassword"
        >
            <!--begin::Heading-->
            <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-dark mb-3">¿Olvidaste tu contraseña?</h1>
                <!--end::Title-->

                <!--begin::Link-->
                <div class="text-gray-400 fw-bold fs-4">
                    Introduce tu email para resetear tu clave
                </div>
                <!--end::Link-->
            </div>
            <!--begin::Heading-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <label class="form-label fw-bolder text-gray-900 fs-6"
                    >Email</label
                >
                <Field
                    class="form-control form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autocomplete="off"
                />
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="flex flex-wrap justify-content-center pb-lg-0">
                <button
                    id="kt_password_reset_submit"
                    ref="submitButton"
                    type="submit"
                    class="btn btn-lg btn-primary fw-bolder me-4"
                >
                    <span class="indicator-label"> Enviar </span>
                    <span class="indicator-progress">
                        Please wait...
                        <span
                            class="spinner-border spinner-border-sm align-middle ms-2"
                        ></span>
                    </span>
                </button>

                <router-link
                    :to="{ name: 'login' }"
                    class="btn btn-lg btn-light-primary fw-bolder"
                    >Cancelar</router-link
                >
            </div>
            <!--end::Actions-->
        </Form>
        <!--end::Form-->
    </div>
    <!--end::Wrapper-->
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { ErrorMessage, Field, Form } from 'vee-validate'
    import * as Yup from 'yup'
    import Swal from 'sweetalert2'

    export default defineComponent({
        name: 'ForgotPassword',
        components: {
            Field,
            Form,
            ErrorMessage
        },
        setup() {
            const submitButton = ref<HTMLButtonElement | null>(null)

            //Create form validation object
            const forgotPassword = Yup.object().shape({
                email: Yup.string().email().required().label('Email')
            })

            //Form submit function
            const onSubmitForgotPassword = async () => {
                return true
            }

            return {
                onSubmitForgotPassword,
                forgotPassword,
                submitButton
            }
        }
    })
</script>
