module.exports = {
  preset: 'react-native',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@react-native|react-native|react-native-elements|@rneui|rneui/*)",
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
