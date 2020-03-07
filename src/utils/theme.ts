import { useThemeUI } from 'theme-ui';
import { get, pipe, defaultTo } from 'lodash/fp';

export const themeProp = (str: string) => (props: any) => {
  return get(`theme.${str}`, props);
};

export const usePrismTheme = () => {
  const { theme, components: colorMode } = useThemeUI();
  const getTheme = pipe(
    get('prismTheme'),
    defaultTo(get(`prism.${colorMode}`, theme))
  );
  return getTheme(theme);
};
