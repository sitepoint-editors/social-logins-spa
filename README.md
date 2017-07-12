# Add Social Login via Google & Facebook to Your Single-page App

This project is an example of how to use [Passport.js](http://passportjs.org) to implement Social Login for your Single Page Application.

In order to make the most of this project you will need Google or Facebook credentials, or both.

Article URL: https://www.sitepoint.com/spa-social-login-google-facebook

## Requirements

* [Node.js](http://nodejs.org/) 

## Google Credentials

Google Credentials can be obtained from the [Google Developer Dashboard](https://console.developers.google.com/apis/dashboard).

* Visit https://console.developers.google.com/apis/dashboard in your browser
* Click on the "Select a Project" dropdown in the header bar
* Click the "Create Project" button
* Create a new Project
* Open the Library page from the sidebar
* Select the "Google+ API" entry and ensure that this is enabled. You *might* also need to enable the "Google+ Domains API" entry as well
* Open the Credentials page from the sidebar
* Open the "OAuth Consent Screen" tab and fill it out
* Click the "Create credentials" button and select "OAuth client ID"
* Select an Application Type of "Web application"
* Fill in the "Authorized JavaScript origins" as being "http://localhost:3000" and the "Authorized redirect URIs" as being "http://localhost:3000/api/authentication/google/redirect"
* Create your credentials, and write down the Client ID and Client Secret

When you run the application, you will first need to set the environment variables GOOGLE_CLIENTID and GOOGLE_CLIENTSECRET to the Client ID and Client Secret you have just obtained.

## Facebook Credentials

Facebook Credentials can be obtained from the [Facebook for Developers](https://developers.facebook.com/) portal

* Visit https://developers.facebook.com/
* Open the "My Apps" dropdown and select "Add a New App"
* Give the App a name and sleect "Create App ID"
* Select "Facebook Login" from the "Select a Product" page, and then select "Web"
  * You might have to select "Add Product" on the sidebar to get here
* Enter a Site URL of "http://localhost:3000" and save this
* Select "Settings" under "Facebook Login" on the sidebar
* Enter "http://localhost:3000/api/authentication/facebook/redirect" in the "Valid OAuth redirect URIs" box and save this
* Select "Dashboard" in the sidebar, and write down the App ID and App Secret.

When you run the application, you will first need to set the environment variables FACEBOOK_CLIENTID and FACEBOOK_CLIENTSECRET to the App ID and App Secret you have just obtained.

## Run the application

Once you have configured your credentials into the environment variables above, you can simply execute "node src/index.js" to start the application, and then visit "http://localhost:3000" in a browser.
The "Insecure Request" button should always work, but the "Secure Request" button will only work after you have pressed one of the "Authenticate with ...." buttons and logged in.

## License

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2017 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

