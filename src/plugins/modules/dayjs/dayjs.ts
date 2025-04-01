import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import isBetween from 'dayjs/plugin/isBetween'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'

// Locales
import 'dayjs/locale/es'

dayjs.extend(relativeTime)
dayjs.extend(isBetween)
dayjs.extend(localizedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(utc)

dayjs.locale('es')

export default dayjs
