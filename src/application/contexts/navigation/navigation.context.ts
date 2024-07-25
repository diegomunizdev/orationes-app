import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

export const useNavigationContext = () => useContext(NavigationContext);
