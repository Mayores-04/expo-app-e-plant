import { Slot } from 'expo-router';
import CustomHeader from 'components/CustomHeader';
import AppNavigator from 'app/(navigation)/AppNavigator';

export default function TabsLayout() {
  return (
    <>
      <CustomHeader />
      <Slot />
    </>
  );
}
