import CustomHeader from 'components/CustomHeader';
import { Slot } from 'expo-router';

const _layout = () => {
  return <>
    <CustomHeader/>
    <Slot/>
  </>;
};

export default _layout;
