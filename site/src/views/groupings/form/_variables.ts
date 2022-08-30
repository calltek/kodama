import { Ref, ref } from 'vue'

export const step: Ref<number> = ref(1)
export const name: Ref<string> = ref('')
export const dates: Ref<Date[] | null> = ref(null)

export const lines: Ref<any[]> = ref([])
export const loading: Ref<boolean> = ref(false)
