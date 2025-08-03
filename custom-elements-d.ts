import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      't-liadrin-sidebar': {
        menuEndpoint?: string;
        mainColor?: string;
        textColor?: string;
        pathname?: string;
      }
    }
  }
}