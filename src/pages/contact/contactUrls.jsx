export const gmailLink = "mailto:controlcelular.arg@gmail.com?Subject=Consulta%20sobre%Aplicación%20Elite"

export function whatsappApiMessageGenerator(message) {
    if (!message) {message = "Hola, me interesa el software ofrecido."}
    return `whatsapp://send?text=${message}&phone=5491140401176`
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
