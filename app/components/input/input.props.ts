export interface IInputProps {
  onChangeText: (e: string) => void;
  secureTextEntry?: boolean;
  placeholder: string;
  isSecure?: boolean;
  onSecurePress?: (e: any) => void;
}
