import { getPermalink , getHomePermalink } from '@/utils/permalinks';


export const headerData = {
    links: [
      {
        text: 'Inicio',
        href: getHomePermalink(),
      },
      {
        text: 'Nosotros',
        href: getPermalink('/about'),
      },
      {
        text: 'Servicios',
        href: getPermalink('/services'),
      },
      {
        text: 'Contacto',
        href: getPermalink('/contact'),
      },
      
     
    ],
    //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  };
  
  export const footerData = {
    links:[
      {
        text: 'Inicio',
        href: getHomePermalink(),
      },
      {
        text: 'Nosotros',
        href: getPermalink('/about'),
      },
      {
        text: 'Servicios',
        href: getPermalink('/services'),
      },
      {
        text: 'Contacto',
        href: getPermalink('/contact'),
      },
    ],
    footNote: `© 2024 IMSC Industrial SpA. Todos los derechos reservados`,
  };
  