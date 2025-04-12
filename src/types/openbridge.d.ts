import '@oicl/openbridge-webcomponents';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'obc-top-bar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          title?: string;
        }, 
        HTMLElement
      >;
      
      'obc-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: 'primary' | 'secondary';
        }, 
        HTMLElement
      >;
      
      'obc-card-list-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          heading?: string;
        }, 
        HTMLElement
      >;
      
      'obc-input': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          placeholder?: string;
        }, 
        HTMLElement
      >;
      
      'obc-notification-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      
      'obc-navigation-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      
      'obc-navigation-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      
      'obc-toggle-switch': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'obc-alert-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'obc-badge': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        }, 
        HTMLElement
      >;
      'obc-breadcrumb': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'obc-divider': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'obc-tooltip': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          content?: string;
          position?: 'top' | 'bottom' | 'left' | 'right';
        }, 
        HTMLElement
      >;
    }
  }
}
