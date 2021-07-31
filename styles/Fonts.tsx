import { Global } from '@emotion/react';

const Fonts: React.FC = () => (
  <Global
    styles={`
    
    /* playfair-display-500 - latin */
    @font-face {
      font-family: 'Playfair Display';
      font-style: normal;
      font-display: optional;
      font-weight: 500;
      src: url('/fonts/playfair-display-v22-latin/playfair-display-v22-latin-500.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('/fonts/playfair-display-v22-latin/playfair-display-v22-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('/fonts/playfair-display-v22-latin/playfair-display-v22-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
           url('/fonts/playfair-display-v22-latin/playfair-display-v22-latin-500.woff') format('woff'), /* Modern Browsers */
           url('/fonts/playfair-display-v22-latin/playfair-display-v22-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
           url('/fonts/playfair-display-v22-latin/playfair-display-v22-latin-500.svg#PlayfairDisplay') format('svg'); /* Legacy iOS */
    }
    
      /* source-sans-pro-regular - latin */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-display: optional;
        font-weight: 400;
        src: url('/fonts/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/fonts/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/fonts/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
             url('/fonts/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
             url('/fonts/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/fonts/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
      } 
    `}
  />
);

export default Fonts;
