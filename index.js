import { NativeModules, processColor } from 'react-native';

export default {

  LENGTH_LONG: NativeModules.RNSnackbar.LENGTH_LONG,
  LENGTH_SHORT: NativeModules.RNSnackbar.LENGTH_SHORT,
  LENGTH_INDEFINITE: NativeModules.RNSnackbar.LENGTH_INDEFINITE,

  show: (options) => {
    if (options.backgroundColor) {
      options.backgroundColor = processColor(options.backgroundColor);
    }
    const action = options.action ? options.action.onPress : () => {};

    if (options.action && options.action.color) {
      options.action.color = processColor(options.action.color);
    }
    NativeModules.RNSnackbar.show(options, action);
  },

}
