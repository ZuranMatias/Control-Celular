import { whatsappApiMessageGenerator } from '../contact/contactUrls'

function priceCardParser(title, price, children, whatsappMessage) {
  return {
    title: title,
    price: price,
    children: children,
    whatsappMessage: whatsappApiMessageGenerator(whatsappMessage),
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
    'Licencia 15 Días',
    50,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por 15 días.',
  ),
  priceCardParser(
    'Licencia 1 Mes',
    75,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por 1 mes.',
  ),
  priceCardParser(
    'Licencia 3 Meses',
    145,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por 3 meses.',
  ),
  priceCardParser(
    'Licencia 6 Meses',
    240,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por 6 meses.',
  ),
  priceCardParser(
    'Licencia un Año',
    300,
    childrenParser(),
    'Hola. Me interesa el producto de monitoreo celular y me gustaría adquirir la licencia por un año.',
  ),
]
