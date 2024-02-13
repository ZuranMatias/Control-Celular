import { whatsappApiMessageGenerator } from '../contact/contactUrls'

function priceCardParser(title, price, children, whatsappMessage, remoteInstall) {
  if (!remoteInstall) {remoteInstall = false}
  return {
    title: title,
    price: price,
    children: children,
    whatsappMessage: whatsappApiMessageGenerator(whatsappMessage),
    remoteInstallVerified: remoteInstall
  }
}

function childrenParser(children) {
    if (!children) {
        return<>
        <li>Único Pago</li>
        <li>Acceso a todas las funciones</li> 
        <li>Posibilidad de renovar licencia posteriormente</li>
        </>
    }
    else {return children}
}

export const pricesList = [
  priceCardParser(
    'Prueba Gratis',
    0,
    childrenParser( <> 
    <li>2 Días libres de costo</li> <li>Acceso a todas las funciones</li> <li>Posibilidad de acreditar licencia</li> </>),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría probar el plazo gratis de 2 días.',
  ),
  priceCardParser(
    'Licencia 30 Días',
    100,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por 1 mes.',
  ),
  priceCardParser(
    'Licencia 90 Días',
    180,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por 90 días.',
  ),
  priceCardParser(
    'Licencia 182 Días',
    240,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por 182 Días.',
    true
  ),
  priceCardParser(
    'Licencia un Año',
    330,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por un año.',
    true
  ),
]
