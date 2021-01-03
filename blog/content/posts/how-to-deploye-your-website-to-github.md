---
title: How to deploy your website to github
date: 2020-09-02
---

Github pages allow us to easily deploy websites as long as they don't have any backend. In this article, I'm going to show you how I deploy websites using Github pages.

<ol class="list-decimal list-inside mt-5">
<li class="text-2xl my-5 capitalize">Create a repo</li>

You can't deploy on Github pages without a repository that contains all your files so make sure you have the repo ready.

<li class="text-2xl my-5 ">Install gh pages</li>

Next, you have to install the package gh-pages in your repository.

<p>&nbsp;</p>

```npm
npm install gh-pages
```

<li class="text-2xl my-5 capitalize">Add this script to package.json</li>

In the package.json file add this script.

<p>&nbsp;</p>

```json
"homepage": "https://[github-username].github.io/[github-repository-name]"
```

<li class="text-2xl my-5 capitalize">Create a deploy script</li>

Inside the scripts object in package.json file add the following script.

<p>&nbsp;</p>

```json
"publish": "gh-pages -d src"
```

<p>&nbsp;</p>

This script will deploy to Github pages anything in the src directory. You can change src to the name of the directory containing the files you want to deploy.

<li class="text-2xl my-5 capitalize">run the script</li>

Next, run the publish script in your command line to deploy to gh-pages.

<p>&nbsp;</p>

```bash
npm run publish
```

<p>&nbsp;</p>

It may take a bit of time but when it's done you'll see a line that says published.

<li class="text-2xl my-5 capitalize">Change the source branch in the repository settings</li>

For your website to be deployed successfully, you'll have to go into the settings of your repository. In the Github pages section change the source branch from master to gh-pages. This branch was created when the publish script was run successfully.

<p>&nbsp;</p>

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ipzyr20jk1kmlbqasrot.PNG)

<p>&nbsp;</p>

Once done, go to the url provided and you'll see your live website.

</ol>
