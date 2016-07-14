# Yet Another Angular Seed

This project is meant to be used for training purposes. It provides a basic HTTP sevrer configuration that provides static resources.

### Instalation

The source code can be either cloned via GIT as shown below, or simply copied as a zip archive locally.
```
git clone https://github.com/raducozma/advanced-parakeet.git
```
After downloading the project sources, install the NPM dependencies by running the command shown below in the project root folder. This will download locally all the NPM modules used by this server.
```
$ npm install
```
After the installing NPM dependencies, run the following command to retrieve bower dependencie.
```
$ bower install
```

### Usage Instructions
The server can be started by running the `npm start` command in the project root folder. After starting the server the command automatically runs `grunt serve` which injects all dependencies in `index.html` and watches over any file changes for live reload.
By default, the webserver starts on `localhost:3000`(to change this check `package.json` file).

```
$ npm start
```
To avoid any `Cross Site Reference` errors, the application server should respond with the [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) mechanism, which can be obtain by the usage of the following headers on the response:
```java
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
response.setHeader("Access-Control-Allow-Headers", "Authorization");
```
To set the base URL for all REST calls, check configuration file `app/app.config.js'.
```javascript
RestangularProvider.setBaseUrl('https://cors-test.appspot.com');
```

