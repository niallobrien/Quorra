
var config = {

    /*
     |--------------------------------------------------------------------------
     | Application Debug Mode
     |--------------------------------------------------------------------------
     |
     | When your application is in debug mode, detailed error messages with
     | stack traces will be shown on every error that occurs within your
     | application. If disabled, a simple generic error page is shown.
     |
     */

    'debug': true,

    /*
     |--------------------------------------------------------------------------
     | Application URL
     |--------------------------------------------------------------------------
     |
     | Here you may specify your application url. This will be used by url
     | generator methods.
     |
     */

    'url': 'http://localhost:3000',


    /*
     |--------------------------------------------------------------------------
     | Application port
     |--------------------------------------------------------------------------
     |
     | The port setting determines which TCP port your app will be deployed on.
     | If you ignore this configuration Quorra uses port 3000 by default.
     |
     */

    'port': 3000,

    /*
     |--------------------------------------------------------------------------
     | Application Timezone
     |--------------------------------------------------------------------------
     |
     | Here you may specify the default timezone for your application, which
     | will be used by the JS date functions. We have gone
     | ahead and set this to a sensible default for you out of the box.
     |
     */

    'timezone': 'UTC',

    /*
     |--------------------------------------------------------------------------
     | Encryption Key
     |--------------------------------------------------------------------------
     |
     | This key is used by the Positron encrypter service and should be set
     | to a random, 32 character string, otherwise these encrypted strings
     | will not be safe. Please do this before deploying an application!
     |
     */

    'key': '768cb1e7a09d0a57a07ae6a36354514d',

    /*
     |--------------------------------------------------------------------------
     | Attribution text
     |--------------------------------------------------------------------------
     |
     | If true, enables the "X-Powered-By: Quorra" HTTP header.
     |
     */

    'attributionText': true

};

module.exports = config;