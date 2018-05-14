# React Native Boilerplate

> Basic react native boilerplate.

## Dependencies

* Node v8.11.1 (LTS)
* React-native-cli (installed globally)
  * versions: `react-native-cli: 2.0.1`
* Yarn (installed globally)
* **iOS Dev**:
  * Watchman
  * iOSX
  * Xcode with the _developers tools_.
* **Android Dev**:
  * Java 8 (1.8.0_172) JDK [here][java]
  * Android Studio properly configurated with:
    * SDK Platforms: Android 6.0 (Marshmallow) SDK
      * Google APIs
      * Android SDK Platform 23
      * Sources for Android 23
      * Intel x86 Atom_64 System Image
      * Google APIs Intel x86 Atom_64 System Image
    * SDK Tools:
      * 23.0.1
    * An Android Virtual Device (AVD) runing the _Marshmallow/23_ image.
* [Visual Studio Code][code] as editor with the following Plugins:
  * Prettier **(cofig WIP)**

## Development

* First, install dependencies: `$ yarn install`.
* Run `$ react-native link`, lo link the libraries to the project. If icons don't show up, run `$ react-native link react-native-vector-icons`.
* To start the metro builder: `$ yarn start`.
* For mobile development:

  * iOS `$ yarn ios`
  * Android:

    * Open the project in Android Studio.
    * Open our configurated _AVD_.
    * Run `$ yarn android`.
    * Or, after create your AVD, add an alias to your `.bash_profile` like:

      `alias ${YOUR_AWESOME_ALIAS}='~/Library/Android/sdk/tools/emulator -avd ${AVD_NAME} &'`

    * So, to run android _simulator_ just run your alias.

## Structure

```css
* root
  + config files: .babelrc, app.json, package.json and so...
  * src
  | * components
  | | | * TabNavbar
  | | + TabNavbar.android.js
  | | + TabNavbar.ios.js
  | + index.js
  | ... * screens
  | * Login
  | | + LoginScreen.js
  | * Home
  | | + HomeScreen.js
  | + index.js
  | ...
  * styles
    + index.js;
```

## Git flow

```css
        * master
        | \
        |  \
        |  new feature #{trello card number}
        |  /
        | /
        * {Squash and merge}
      / |
     /  |
tag x.0 |
  / |   |
hot |   *
fix |   |\
  \ |   | \
   \|   |  \
  x.0.1 |  feature
     \  |   |
      \ |   |
        *   |
        | \ |
        |  \|
        |   * {git pull --rebase origin master}
        |  /
        | /
        *
```

> We will take advantage of git tags, so we will add the changes to `master` periodically, and create tags in defined intervals of time/sprints.

## Versioning

For versions, we use "Major - Minor - Upgrade/Patch - Build No." increment:

* **MAJOR :** version when we add significant changes in functionality: like when there is a whole new module;
* **MINOR :** version when we add functionality/feature in a backwards-compatible manner;
* **PATCH :** version when we make backwards-compatible bug fixes.
* **BUILD No :** This number will be incremented each time that a build is created.

## Deployment / CI / CD

* > {TODO}

---

## Troubleshoting

### Customizing App Display Name and Icon

> You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.
> To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.
> To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

### Updating dependencies problems

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```bash
npm start --reset-cache
# or
yarn start --reset-cache
```

### Q/A

**Q:** Error runing `yarn ios`:

    `xcrun: error: unable to find utility "instruments", not a developer tool or in PATH`

**A:** [link](https://stackoverflow.com/a/39779171) to fix that issue.

<!-- links -->

[java]: http://www.oracle.com/technetwork/java/javase/downloads/index.html
[code]: https://code.visualstudio.com/download
