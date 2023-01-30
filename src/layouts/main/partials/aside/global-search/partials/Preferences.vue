<template>
    <form data-kt-search-element="preferences" class="pt-1 d-none">
        <!--begin::Heading-->
        <h3 class="fw-bold text-gray-900 mb-7">Search Preferences</h3>
        <!--end::Heading-->

        <!--begin::Input group-->
        <div class="pb-4 border-bottom">
            <label
                class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
                <span
                    class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2"
                >
                    Projects
                </span>

                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    checked="true"
                />
            </label>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="py-4 border-bottom">
            <label
                class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
                <span
                    class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2"
                >
                    Targets
                </span>
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    checked="true"
                />
            </label>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="py-4 border-bottom">
            <label
                class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
                <span
                    class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2"
                >
                    Affiliate Programs
                </span>
                <input class="form-check-input" type="checkbox" value="1" />
            </label>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="py-4 border-bottom">
            <label
                class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
                <span
                    class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2"
                >
                    Referrals
                </span>
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    checked="true"
                />
            </label>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="py-4 border-bottom">
            <label
                class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
                <span
                    class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2"
                >
                    Users
                </span>
                <input class="form-check-input" type="checkbox" value="1" />
            </label>
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->
        <div class="flex justify-content-end pt-7">
            <div class="btn btn-sm btn-white fw-bolder btn-primary me-2">
                Cancel
            </div>
            <button class="btn btn-sm fw-bolder btn-primary">
                Save Changes
            </button>
        </div>
        <!--end::Actions-->
    </form>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'SearchPreferences',
        components: {}
    })
</script>
