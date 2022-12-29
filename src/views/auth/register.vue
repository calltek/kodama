<template>
    <!--begin::Wrapper-->
    <div class="bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <Form
            id="kt_login_signup_form"
            class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            novalidate="novalidate"
            :validation-schema="registration"
            @submit="onSubmitRegister"
        >
            <!--begin::Heading-->
            <div class="mb-10 text-center">
                <!--begin::Title-->
                <h1 class="text-dark mb-3">Crea tu cuenta</h1>
                <!--end::Title-->

                <!--begin::Link-->
                <div class="text-gray-400 fw-bold fs-4">
                    ¿Ya tienes una cuenta?
                    <router-link
                        :to="{ name: 'login' }"
                        class="link-primary fw-bolder"
                    >
                        Inicia sesión
                    </router-link>
                </div>
                <!--end::Link-->
            </div>
            <!--end::Heading-->

            <!--begin::Input group-->
            <div class="row fv-row mb-7">
                <!--begin::Col-->
                <div class="col-xl-6">
                    <label class="form-label fw-bolder text-dark fs-6"
                        >First Name</label
                    >
                    <Field
                        class="form-control form-control-lg form-control-solid"
                        type="text"
                        placeholder=""
                        name="first_name"
                        autocomplete="off"
                    />
                    <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                            <ErrorMessage name="first_name" />
                        </div>
                    </div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-xl-6">
                    <label class="form-label fw-bolder text-dark fs-6"
                        >Last Name</label
                    >
                    <Field
                        class="form-control form-control-lg form-control-solid"
                        type="text"
                        placeholder=""
                        name="last_name"
                        autocomplete="off"
                    />
                    <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                            <ErrorMessage name="last_name" />
                        </div>
                    </div>
                </div>
                <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-7">
                <label class="form-label fw-bolder text-dark fs-6">Email</label>
                <Field
                    class="form-control form-control-lg form-control-solid"
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

            <!--begin::Input group-->
            <div class="mb-10 fv-row" data-kt-password-meter="true">
                <!--begin::Wrapper-->
                <div class="mb-1">
                    <!--begin::Label-->
                    <label class="form-label fw-bolder text-dark fs-6">
                        Password
                    </label>
                    <!--end::Label-->

                    <!--begin::Input wrapper-->
                    <div class="position-relative mb-3">
                        <Field
                            class="form-control form-control-lg form-control-solid"
                            type="password"
                            placeholder=""
                            name="password"
                            autocomplete="off"
                        />
                        <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                    </div>
                    <!--end::Input wrapper-->
                    <!--begin::Meter-->
                    <div
                        class="flex align-items-center mb-3"
                        data-kt-password-meter-control="highlight"
                    >
                        <div
                            class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                        ></div>
                        <div
                            class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                        ></div>
                        <div
                            class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
                        ></div>
                        <div
                            class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
                        ></div>
                    </div>
                    <!--end::Meter-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Hint-->
                <div class="text-muted">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                </div>
                <!--end::Hint-->
            </div>
            <!--end::Input group--->

            <!--begin::Input group-->
            <div class="fv-row mb-5">
                <label class="form-label fw-bolder text-dark fs-6"
                    >Confirm Password</label
                >
                <Field
                    class="form-control form-control-lg form-control-solid"
                    type="password"
                    placeholder=""
                    name="password_confirmation"
                    autocomplete="off"
                />
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="password_confirmation" />
                    </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <label class="form-check form-check-custom form-check-solid">
                    <Field
                        class="form-check-input"
                        type="checkbox"
                        name="toc"
                        value="1"
                    />
                    <span class="form-check-label fw-bold text-gray-700 fs-6">
                        I Agree &
                        <a href="#" class="ms-1 link-primary"
                            >Terms and conditions</a
                        >.
                    </span>
                </label>
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
                <button
                    id="kt_sign_up_submit"
                    ref="submitButton"
                    type="submit"
                    class="btn btn-lg btn-primary"
                >
                    <span class="indicator-label"> Submit </span>
                    <span class="indicator-progress">
                        Please wait...
                        <span
                            class="spinner-border spinner-border-sm align-middle ms-2"
                        ></span>
                    </span>
                </button>
            </div>
            <!--end::Actions-->
        </Form>
        <!--end::Form-->
    </div>
    <!--end::Wrapper-->
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted, nextTick } from 'vue'
    import { ErrorMessage, Field, Form } from 'vee-validate'
    import * as Yup from 'yup'
    import { PasswordMeterComponent } from '../../assets/ts/components'

    export default defineComponent({
        name: 'Register',
        components: {
            Field,
            Form,
            ErrorMessage
        },
        setup() {
            const submitButton = ref<HTMLButtonElement | null>(null)

            const registration = Yup.object().shape({
                first_name: Yup.string().required().label('Name'),
                last_name: Yup.string().required().label('Surname'),
                email: Yup.string().min(4).required().email().label('Email'),
                password: Yup.string().required().label('Password'),
                password_confirmation: Yup.string()
                    .required()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .label('Password Confirmation')
            })

            onMounted(() => {
                nextTick(() => {
                    PasswordMeterComponent.bootstrap()
                })
            })

            const onSubmitRegister = async () => {
                return true
            }

            return {
                registration,
                onSubmitRegister,
                submitButton
            }
        }
    })
</script>
