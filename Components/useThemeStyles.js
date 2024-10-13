import { useTheme } from '../Components/ThemeContext';

export const useThemeStyles = () => {
  const { theme } = useTheme();

  const backgroundColor = theme === 'light' ? '#ceb9ed' : '#9b64ed'; // Change background based on theme
  const textColor = theme === 'light' ? 'black' : 'white'; // Change text color based on theme
  return { backgroundColor, textColor };
};