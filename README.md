# React Native TypeScript Starter Project

A simple boilerplate for getting started with a React Native project in TypeScript with a few key things set up for you:

- [x] Linting with ESLint & AirBnB rules
- [x] Code formatting with Prettier
- [x] `tsconfig.json` with sensible default options
- [x] Pre-commit linting with Husky

## Getting started (iOS)

To set up your own project based on these starter files:

1. Clone the repo using `git clone https://github.com/felixweinberger/react-native-typescript-starter`
2. Run `yarn` to install the dependencies
3. Run `npx react-native-rename [Your Project Name Here]` to change the name of your project
4. Once you've renamed your project, you can remove react-native-rename from `package.json`
5. Run `pod install` inside the `/ios` folder to install your native dependencies (you'll need [Cocoapods](https://guides.cocoapods.org/using/getting-started.html) for this)
6. Run the Metro bundler with `yarn start` in your root directory
7. Open `/ios/YourProjectName.xcworkspace` in XCode
8. Run your app with `⌘ + R`
9. Enjoy linted, formatted development in React Native with TypeScript!
