declare namespace JSX {
  interface IntrinsicElements {
    't-liadrin-sidebar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      menuEndpoint?: string;
      mainColor?: string;
      textColor?: string;
      pathname?: string;
    };
  }
}
