# Social Logins for Single Page Applications

This project is an example of how to use [Passport.js](http://passportjs.org) to implement Social Login for your Single Page Application.

In order to make the most of this project you will need Google or Facebook credentials, or both.

## Google Credentials
Google Credentials can be obtained from the [Google Developer Dashboard](https://console.developers.google.com/apis/dashboard).

* Visit https://console.developers.google.com/apis/dashboard in your browser
* Click on the "Select a Project" dropdown in the header bar
* Click the "Create Project" button
* Create a new Project
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
