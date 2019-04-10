## NativeEats

Simple React Native application for fetching information about restaurants near you.

### Technologies

- React
- React Native
- React Navigation
- react-native-vector-icons
- Yelp API

In order to run/build this app locally you need to sign up for [a Yelp API key](https://www.yelp.com/fusion). Then create an `env.config.js` file in the project's root.

```sh
touch env.config.js
```

Then past your API key in the same file, in the below format

```js
export const API_KEY =
  'your.yelp.api.key';
```