# Getting Started with Unilingo Wepp API 

[Check Live Site](https://unilingo-web-api.onrender.com)

This web api help to complete the features mentioned in [README.md from unilingo-web-app](https://github.com/FlavioBravo/unilingo-web-app/blob/master/README.md)

## Comments

- The UI was develop with Express, typescript, Axios and Cors.
- External packages are used here like [Express](https://www.npmjs.com/package/express), [multer](https://www.npmjs.com/package/multer), [LangChain](https://js.langchain.com/v0.1/docs/integrations/document_loaders/web_loaders/youtube/), and [dotenv](https://www.npmjs.com/package/dotenv).
- External API's are used like [Cloud Translation API](https://cloud.google.com/translate/docs/setup), [Cloud Text-to-Speech API](https://cloud.google.com/text-to-speech?hl=en), [Cloud Vision API](https://cloud.google.com/vision/docs), and [Cloud Speech-to-Text](https://cloud.google.com/speech-to-text/docs). We are using API Key as a credential for some services and Account Service JSON as a credential for another services.
- This web api is hosted in [Render](https://render.com/) using Web Service.
- For this project an environment file is needed to run this application succesfully. Create a .env file at the root of your project directory as follows:

```
    TEXT_TO_SPEECH_API_KEY = xxxxxxxxxxxxxxx
    TRANSLATE_API_KEY = xxxxxxxxxxxxxxxx
```
- Also, For this project two json file is needed to run this application succesfully. Page two json file at the root of your project directory. You could get this json file from Account Service in Google Cloud.

In the project directory, you can run:
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode and making hot reload for any change.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your api is ready to be deployed!

### `npm run serve`

Runs the app in the production mode using the Js files generated from Ts files.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create Express Project with Typescript](https://blog.logrocket.com/how-to-set-up-node-typescript-express/).

