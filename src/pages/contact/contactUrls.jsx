export const gmailLink = "mailto:controlcelular.arg@gmail.com?Subject=Consulta%20sobre%Aplicación%20Elite"

export function whatsappApiMessageGenerator(message) {
    function original(msg) {return `whatsapp://send?text=${msg}&phone=5491140401176`}
    function wame(msg) {return `https://wa.me/5491140401176/?text=${msg}`}

    if (!message) {message = "Hola, estoy interesado en el período de prueba gratis de 2 días de Elite."}
    return wame(message)
}

export function addTextBeforePhone(originalString, additionalText) {
    const phoneIndex = originalString.indexOf("&phone=");
    const modifiedString = originalString.slice(0, phoneIndex) + additionalText + originalString.slice(phoneIndex);
    
    return modifiedString;
}

export const whatsappLink = whatsappApiMessageGenerator()
export const whatsappTrialLink = whatsappApiMessageGenerator("Hola, me interesa el software ofrecido. Me gustaría probar el período de prueba gratis de 2 días.")

//whatsapp://send?text=Tu mensaje!&phone=573
//"https://api.whatsapp.com/send?phone=5491140401176&amp;text=Hola, me interesa el software ofrecido."
//whatsapp://send?text=Hola, me interesa el software ofrecido.!&phone=5491140401176

//export const gmailLink = "mailto:linceinvestigacion@gmail.com?Subject=Consulta%20sobre%Aplicación%20Elite"
