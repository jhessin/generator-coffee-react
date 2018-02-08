import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { h } from '@jhessin/react-hyperscript-helpers'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render h(App),
  document.getElementById 'root'
registerServiceWorker()
