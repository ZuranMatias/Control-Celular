import { faChrome } from "@fortawesome/free-brands-svg-icons"
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
} from '@fortawesome/free-solid-svg-icons'
//  { icon: faKeyboard, text: "", desc: "" },
export const featuresList = [
  {
    icon: faLock,
    text: 'Bloqueo De Aplicaciones',
    desc: 'Bloquear cualquier aplicación para no permitir su uso',
  },
  {
    icon: faLocationDot,
    text: 'Posición Geográfica del Dispositivo',
    desc: 'Sepa la posición exacta del dispositivo en tiempo real',
  },
  {
    icon: faVideoCamera,
    text: 'Grabacion Remota de Videos',
    desc:
      'Inicie una grabación en la cámara frontal o trasera en cualquier momento.',
  },
  {
    icon: faMessage,
    text: 'Registro De Chats',
    desc:
      'Monitore mensajes de Texto y Emails. Aplicable para line, twitter, faccebook, skype, tinder y telegram.',
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
    desc: 'Permite activar el micrófono a distancia',
  },
  {
    icon: faChrome,
    text: 'Historial de navegación',
    desc: 'Registra el historial de páginas web visitadas',
  },
]
