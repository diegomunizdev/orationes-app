import { NavigationContext } from '@react-navigation/native';
import { useContext } from 'react';

export const useNavigation = () => useContext(NavigationContext);
