export interface IMyInput {
  label: string;
  placeholder?: string;
  onPress?: (() => void) | undefined;
  maxLength?: number | undefined;
  horizontal?: boolean;
  vertical?: boolean;
}
