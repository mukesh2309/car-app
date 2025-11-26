import {Asset} from 'react-native-image-picker';

export interface IEditProps {
  selectImage: () => void;
  photo: Asset | undefined;
}
