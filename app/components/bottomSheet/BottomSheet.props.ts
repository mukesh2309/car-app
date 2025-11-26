import {JSX} from 'react';

export interface IBottomSheetProps {
  visible: boolean;
  setVisible: (e: any) => void;
  children: JSX.Element;
}
