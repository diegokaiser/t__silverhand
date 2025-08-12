import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      't-liadrin-sidebar': {
        menuEndpoint?: string;
        mainColor?: string;
        textColor?: string;
        pathname?: string;
      },
      't-katherine-chart': {
        title?: string,
        icon?: string,
        data?: string,
        mainColor?: string,
        primaryColor?: string,
        textColor?: string,
        total?: number,
        percentage?: number;
      }
    }
  }
}