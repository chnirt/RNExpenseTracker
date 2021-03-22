import {IUseShadow, Shadow, ShadowOptions} from './types';

export function useShadow({depth = 1, color = '#000'}: IUseShadow): Shadow {
  const shadowOptions: ShadowOptions = {
    1: {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
    },
    2: {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
    3: {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    4: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
    },
    5: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    6: {
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
    },
    7: {
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
    },
    8: {
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
    },
    9: {
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
    },
    10: {
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
    },
    11: {
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
    },
    12: {
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
    },
    13: {
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
    },
    14: {
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
    },
    15: {
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
    },
    16: {
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
    },
    17: {
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
    },
    18: {
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
    },
    19: {
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.5,
      shadowRadius: 12.35,
    },
    20: {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,
    },
    21: {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
    },
    22: {
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14.78,
    },
    23: {
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
    },
    24: {
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
    },
  };

  return {
    shadowColor: color,
    ...shadowOptions[depth],
    elevation: depth,
  };
}
