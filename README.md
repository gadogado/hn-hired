<h1 align="center">Hn Hired</h1>

<div align="center">
  <img height="300"  src="https://user-images.githubusercontent.com/34672/42607219-a4162386-8536-11e8-9187-a16f5db7e63a.png">
</div>

---
<strong>Serverless + Searchable HN Who's Hiring Posts</strong>


### Features

* **HN Hired** grabs the latest HN *who's hiring* post and presents everything with a searchable material ui experience.  
* The app utilizes [Next.js](https://nextjs.org/) to run serverless via AWS Lambda; both the client and server exist within a *function* which eases cross-origin opaque resource retrieval restrictions.
* A manually curated list of [trends](lib/config.json#L19) are matched with a cursory regexp to give a loose ranking in the left sidebar.
* [Fuse.js](http://fusejs.io/) provides very fast client fuzzy searching for anything in the comments.
* [Material UI](https://material-ui.com/) components enrich the presentation with autocomplete, search chips, and a simple responsive layout.

### Setup
1. Clone this repo and run `yarn` to install the project dependencies.  
2. Run `yarn run dev` to start the local server and visit `http://localhost:3000` to run the app.
3. If you're unfamiliar with `Next.js` the file system is the main API. Anything within `pages/` ends up having a corresponding route.  With this application there is a single file, [index.js](pages/index.js), which is the entry point.  

### Serverless Deployment
Serverless deployment can be tricky but there are some wonderful tools available to bring everything together and make it possible.  I opted to use [Claudia.js](https://claudiajs.com/) - here's some important steps to make everything happen:

1. Setup the necessary AWS credentials.  See [here](https://claudiajs.com/tutorials/installing.html) under `Configuring access credentials`.  
2. Change your `.aws/credentials` so that there is a profile for claudia:
```
$ cat ~/.aws/credentials
[claudia]
aws_access_key_id = abc
aws_secret_access_key = 123
```
3. Build the project with `yarn run build`
4. Create an AWS Lambda function and deploy it:

  ```

  claudia create --region us-west-1 --handler lambda.handler --deploy-proxy-api --profile claudia --memory 1280

  # If there are issues with the path to the bin you can either install claudia as a global package or simply just specify the full path to the respective bin, `node_modules/.bin/claudia`.
  ```

5. Any subsequent deploys should run `yarn run deploy`
