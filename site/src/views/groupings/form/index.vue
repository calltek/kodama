<template>
    <k-layout
        title="Listado de agrupaciones"
        :icon="['fad', 'fa-pallet-boxes']"
        :breads="[{ text: 'Agrupaciones', route: { name: 'groupingList' } }]"
    >
        <div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column h-100">
            <div class="d-flex flex-column flex-lg-row-auto bg-white rounded-3 shadow-sm">
                <div class="d-flex flex-column justify-content-between h-100">
                    <div class="d-flex flex-row-fluid flex-column p-10 pt-lg-20">
                        <k-logo side class="mb-10 mb-lg-20 me-auto" :height="60"></k-logo>

                        <div class="stepper-nav">
                            <div
                                class="stepper-item cursor-pointer"
                                :class="{ current: step === 1 }"
                                data-kt-stepper-element="nav"
                                @click="setStep(1)"
                            >
                                <div class="stepper-line w-40px"></div>
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="stepper-check fas fa-check"></i><span class="stepper-number">1</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Nombre</h3>
                                    <div class="stepper-desc fw-bold">Da un nombre a la agrupación</div>
                                </div>
                            </div>
                            <div
                                class="stepper-item cursor-pointer"
                                data-kt-stepper-element="nav"
                                :class="{ current: step === 2 }"
                                @click="setStep(2)"
                            >
                                <div class="stepper-line w-40px"></div>
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="stepper-check fas fa-check"></i><span class="stepper-number">2</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Fechas</h3>
                                    <div class="stepper-desc fw-bold">Rango de fechas de los pedidos</div>
                                </div>
                            </div>
                            <div
                                class="stepper-item cursor-pointer"
                                data-kt-stepper-element="nav"
                                :class="{ current: step === 3 }"
                                @click="setStep(3)"
                            >
                                <div class="stepper-line w-40px"></div>
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="stepper-check fas fa-check"></i><span class="stepper-number">3</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Tiendas</h3>
                                    <div class="stepper-desc fw-bold">Selecciona las tiendas implicadas</div>
                                </div>
                            </div>
                            <div
                                class="stepper-item cursor-pointer"
                                data-kt-stepper-element="nav"
                                :class="{ current: step === 4 }"
                                @click="setStep(4)"
                            >
                                <div class="stepper-line w-40px"></div>
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="stepper-check fas fa-check"></i><span class="stepper-number">4</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Productos</h3>
                                    <div class="stepper-desc fw-bold">Selecciona los productos necesarios</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px"
                        style="background-image: url('media/illustrations/sketchy-1/16.png')"
                    ></div>
                </div>
            </div>

            <div class="d-flex flex-column flex-lg-row-fluid">
                <div class="d-flex flex-center flex-column flex-column-fluid">
                    <form id="kt_create_account_form" class="my-auto px-10 px-lg-15 w-100">
                        <step-1-name v-if="step === 1" v-model="name" />
                        <step-2-dates v-if="step === 2" v-model="dates" />
                        <step-3-shops v-if="step === 3" />
                        <step-4-orders v-if="step === 4" v-model:selected="lines" :dates="dates" />

                        <div class="d-flex flex-stack pt-15 w-xxl-700px mx-auto">
                            <div class="mr-2">
                                <k-button :disabled="step <= 1" @click="decreaseStep">
                                    <k-icon :icon="['fas', 'chevron-left']" class="me-2"></k-icon>

                                    Atrás
                                </k-button>
                            </div>
                            <div v-if="step <= 3">
                                <k-button v-if="step === 1" :disabled="!validateStep1" @click="increaseStep">
                                    Continuar
                                    <k-icon :icon="['fas', 'chevron-right']" class="ms-2"></k-icon>
                                </k-button>
                                <k-button v-if="step === 2" :disabled="!validateStep2" @click="increaseStep">
                                    Continuar
                                    <k-icon :icon="['fas', 'chevron-right']" class="ms-2"></k-icon>
                                </k-button>
                                <k-button v-if="step === 3" :disabled="!validateStep3" @click="increaseStep">
                                    Continuar
                                    <k-icon :icon="['fas', 'chevron-right']" class="ms-2"></k-icon>
                                </k-button>
                            </div>
                            <div v-else>
                                <k-button
                                    :disabled="!validateStep4"
                                    color="success"
                                    icon="circle-plus"
                                    @click="addGrouping"
                                >
                                    Añadir
                                </k-button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </k-layout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import Step1Name from './steps/1-name.vue'
    import Step2Dates from './steps/2-dates.vue'
    import Step3Shops from './steps/3-shops.vue'
    import Step4Orders from './steps/4-orders.vue'

    import {
        setStep,
        increaseStep,
        decreaseStep,
        validateStep1,
        validateStep2,
        validateStep3,
        validateStep4,
        addGrouping,
    } from './_actions'

    import { step, name, dates, lines } from './_variables'

    export default defineComponent({
        name: 'GroupingForm',
        components: {
            Step1Name,
            Step2Dates,
            Step3Shops,
            Step4Orders,
        },
        setup() {
            return {
                name,
                step,
                dates,
                lines,
                setStep,
                increaseStep,
                decreaseStep,
                validateStep1,
                validateStep2,
                validateStep3,
                validateStep4,
                addGrouping,
            }
        },
    })
</script>

<style scoped></style>
