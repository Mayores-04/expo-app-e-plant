import { Slot } from 'expo-router';
import CustomHeader from 'components/CustomHeader';
import CartNavigator from 'app/(navigation)/CartNavigator';

export default function TabsLayout() {
  return (
    <>
      <Slot />
      <CartNavigator />
    </>
  );
}
