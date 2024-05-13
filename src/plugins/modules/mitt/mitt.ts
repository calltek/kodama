import mitt, { Emitter, EventType } from 'mitt'
const emitter: Emitter<Record<EventType, any>> = mitt()

export default emitter
