import pAny from 'p-any'

performance.mark('start')
await pAny([new Promise(resolve => setTimeout(resolve))])
performance.measure('total', 'start')