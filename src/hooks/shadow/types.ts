export interface IUseShadow {
  deep: number;
  color: string;
  shadowOpacity?: number;
}

interface IShadowOffset {
  width: number;
  height: number;
}

export type Shadow = {
  shadowColor: string;
  shadowOffset: IShadowOffset;
  shadowOpacity: number;
  shadowRadius: number;

  elevation: number;
};

export type ShadowOption = {
  shadowOffset: IShadowOffset;
  shadowOpacity: number;
  shadowRadius: number;
};

export type ShadowOptions = {
  [key: number]: ShadowOption;
};
