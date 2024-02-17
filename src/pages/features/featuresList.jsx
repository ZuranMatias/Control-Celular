import { faChrome, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import {
  faGift,
  faComputer,
  faKeyboard,
  faMessage,
  faCamera,
  faPhone,
  faLock,
  faVideoCamera,
  faLocationDot,
  faMicrophone,
  faCircle,
  faCircleInfo,
  faUser,
  faSdCard,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

//  { icon: faKeyboard, text: "", desc: "" },

export const featuresList = [
  {
    icon: faUser,
    text: 'Contactos del Dispositivo',
    desc: 'Acceso a todos los contactos con nombre y número telefónico',
  },
  {
    icon: faInfoCircle,
    text: 'Panel de información en vivo',
    desc: 'Acceso rápido a las funciones de captura de pantalla, micrófono en vivo y ubicación instantánea todo en un mismo lugar',
  },
  {
    icon: faWhatsapp,
    text: 'Actividad de Whatsapp',
    desc: 'Permite interceptar mensajes, fotos y videos además de grabar llamadas.',
  },
  {
    icon: faMessage,
    text: 'Mensajes de texto',
    desc:
      'Captura mensajes de Texto y Emails enviados y recibidos. Aplicable para line, twitter, faccebook, skype, tinder y telegram.',
  },
  {
    icon: faLocationDot,
    text: 'Posición Geográfica del Dispositivo',
    desc: 'Sepa la posición exacta del dispositivo en tiempo real con posibilidad de consultar una ruta hacia el dispositivo o geo Fence.',
  },
  {
    icon: faSdCard,
    text: 'Acceso a tarjeta de memoria',
    desc: 'Lector de tarjeta SD accesible desde la aplicación',
  },
  {
    icon: faVideoCamera,
    text: 'Grabacion Remota de Videos',
    desc:
      'Inicie una grabación en la cámara frontal o trasera en cualquier momento.',
  },
  {
    icon: faKeyboard,
    text: 'Historial de teclado',
    desc:
      'Acceso a un keylogger y portapapeles del dispositivo.',
  },
  {
    icon: faPhone,
    text: 'Interceptar Llamadas',
    desc: 'Graba las charlas por teléfono',
  },
  {
    icon: faCamera,
    text: 'Tomar fotos Remotas',
    desc: 'Fotos tomadas en cualquier momento cámara frontal y trasera',
  },
  {
    icon: faMicrophone,
    text: 'Audio en vivo',
    desc: 'Permite activar el micrófono a distancia y escuchar directamente o grabar la conversación',
  },
  {
    icon: faChrome,
    text: 'Historial de navegación',
    desc: 'Registra el historial de páginas web visitadas',
  },
  {
    icon: faInstagram,
    text: 'Registro de chats de redes sociales',
    desc: 'Aplicable para Whatsapp, Facebook, Viber, Skype, Snapchat, Zalo, Tinder, Wechat, Telegram, Link, Kik, Hangout, Instagram, Messenger, Gmail, Twitter entre otros',
  },
  {
    icon: faLock,
    text: 'Bloqueo De Aplicaciones',
    desc: 'Bloquear cualquier aplicación para no permitir su uso',
  },
]
