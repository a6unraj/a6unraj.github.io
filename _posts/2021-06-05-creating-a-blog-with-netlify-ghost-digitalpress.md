---
layout: post
title: "Creating a blog with Netlify, Ghost, DigitalPress"
comments: true
description: "Creating a blog with Netlify, Ghost, GatsbyJS"
keywords: "Headless CMS"
category : "Web Development"
---

Headless CMS is getting famous nowadays and being the fact that it's easy to setup and free.
Here I am going to show how to setup a blog with Netlify + Github + Ghost.
Netlify provides the CI/CD, content will be hosted on Github and Ghost will be used to create the blog content.

###### STEP 1:
Use the jamify starter template from the Netlify Template site
[https://templates.netlify.com](https://templates.netlify.com)
[https://templates.netlify.com/template/jamify-starter-ghost](https://templates.netlify.com/template/jamify-starter-ghost)
Click Deploy to Netlify
[![img58](https://a6unraj.github.io/assets/images/img58.png)](https://a6unraj.github.io/assets/images/img58.png)
Connect to Github and enter the repo name that needs to be created
[![img59](https://a6unraj.github.io/assets/images/img59.png)](https://a6unraj.github.io/assets/images/img59.png)
The site is deployed and will be available with a generated sub-domain on netlify
[![img60](https://a6unraj.github.io/assets/images/img60.png)](https://a6unraj.github.io/assets/images/img60.png)
[![img61](https://a6unraj.github.io/assets/images/img61.png)](https://a6unraj.github.io/assets/images/img61.png)
Change site name to your own url
[![img62](https://a6unraj.github.io/assets/images/img62.png)](https://a6unraj.github.io/assets/images/img62.png)

###### STEP 2:
The blog content from the deployed template comes from the Ghost demo website, so we have to replace with our own content.
Blogging on Ghost's own blogging platform [https://ghost.org](https://ghost.org) is not free, however there are providers like [Digital Press](https://www.digitalpress.blog/) where you can create a free ghost blog with limited features.
I have created a blog in DigitalPress and going to use if for creating posts.
[![img63](https://a6unraj.github.io/assets/images/img63.png)](https://a6unraj.github.io/assets/images/img63.png)
I have created a sample post in DigitalPress blog.
[![img71](https://a6unraj.github.io/assets/images/img71.png)](https://a6unraj.github.io/assets/images/img71.png)


###### STEP 3:
Now we can link the blog contents from the Ghost blog to Netlify site.
First Change the site URL in the site config file.
[![img64](https://a6unraj.github.io/assets/images/img64.png)](https://a6unraj.github.io/assets/images/img64.png)
Get the API key for content from Digital Press
[![img65](https://a6unraj.github.io/assets/images/img65.png)](https://a6unraj.github.io/assets/images/img65.png)
[![img66](https://a6unraj.github.io/assets/images/img66.png)](https://a6unraj.github.io/assets/images/img66.png)
Create a .ghost.json file in the repository and add the apikey to apiurl
[![img68](https://a6unraj.github.io/assets/images/img68.png)](https://a6unraj.github.io/assets/images/img68.png)
[![img67](https://a6unraj.github.io/assets/images/img67.png)](https://a6unraj.github.io/assets/images/img67.png)
As soon as the changes to the files in the repo are done Netlify autotriggers a deploy, however you can still trigger a deploy again
[![img70](https://a6unraj.github.io/assets/images/img70.png)](https://a6unraj.github.io/assets/images/img70.png)
After deploy you can view your blog content from DigitalPress linked to the Netlify Site
[![img72](https://a6unraj.github.io/assets/images/img72.png)](https://a6unraj.github.io/assets/images/img72.png)

Go ahead and create blog content on the DigitalPress Ghost blog and after creating each blog post Trigger deploy to view the new posts
[![img69](https://a6unraj.github.io/assets/images/img69.png)](https://a6unraj.github.io/assets/images/img69.png)
