import { debounce } from 'es-toolkit'

performance.mark('start')
console.log('imported', debounce())
performance.measure('total', 'start')
