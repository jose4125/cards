import App from './app/index';

const _XHR = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest

XMLHttpRequest = _XHR

export default App;
