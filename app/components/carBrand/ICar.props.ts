export interface ICarProps {
  text: string;
  image?: string;
  onPress?: () => void;
  isSelected?: number;
  isHorizontal?: boolean;
  item?: number;
}
