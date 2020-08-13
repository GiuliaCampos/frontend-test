
const ratio = 1.5;
const rem = `${ratio}rem`;

/**
 * Wrapper to save writing ${props => props.theme.name} in styled components all them time.
 *
 * Usage: style('width.max', '1200px');
 *
 * @param name
 * @param defaultValue
 */
export const style = (name, defaultValue = '') => props => name.split('.').reduce(
  (theme, key) => (typeof theme[key] !== 'undefined' ? theme[key] : defaultValue),
  props.theme,
);

/**
 * Theme styles for the app
 */
export default {
  baseFontSize: '16px',

  baseFontFamily: '\'Source Sans Pro\', sans-serif',
  baseFontWeight: 400,
  headerFontFamily: '\'Oswald\', sans-serif',
  headerFontWeight: 300,

  radius: '0.2rem',

  marginTiny: `${ratio / 4}rem`,
  marginSmall: `${ratio / 3}rem`,
  marginHalf: `${ratio / 2}rem`,
  margin: rem,
  marginDouble: `${ratio * 2}rem`,

  paddingTiny: `${ratio / 4}rem`,
  paddingSmall: `${ratio / 3}rem`,
  paddingHalf: `${ratio / 2}rem`,
  padding: rem,
  paddingDouble: `${ratio * 2}rem`,

  border: {
    component: '1px solid #EFF1F2',
    componentThick: '1px solid #EFF1F2',
  },

  color: {
    /**
     * Style Colours
     */
    background: '#F3F3F3',
    baseFont: '#5e6168',
    headerFont: '#2A2D34',
    anchor: '#F46357',

    // default component color, this is used for nav, panels, reports etc
    component: '#FFFFFF',
    componentAlt: '#f7f7f7',

    primary: '#78CD51',
    primaryAlt: '#FFFFFF',
    secondary: '#00CEFD',
    secondaryAlt: '#FFFFFF',
    tertiary: '#BEC3C7',
    tertiaryAlt: '#FFFFFF',
    quaternary: '#F46357',
    quaternaryAlt: '#FFFFFF',
  },

  fontSize: {
    h1: '4.25rem',
    h2: '2.5rem',
    h3: '1.75rem',
    h4: '1.375rem',
    normal: '1rem',
  },

  shadow: {
    small: 'rgba(0, 0, 0, .11765) 0 1px 6px, rgba(0, 0, 0, .11765) 0 1px 4px',
    large: 'rgba(0,0,0,.10) 0 1px 6px 1px',
  },

  width: {
    min: '320px',
    max: '1200px',
  },
};
