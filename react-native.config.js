module.exports = {
  /**
   * Tell the autolinker to register this dependency under
   * the plain name `react-native-msal` (no dots, no scope).
   * The name with bam.tech mentionned crash the android build
   */
  dependency: {
    platforms: {
      android: {
        name: 'react-native-msal',
        libraryName: 'react-native-msal',
      },
    },
  },
};
