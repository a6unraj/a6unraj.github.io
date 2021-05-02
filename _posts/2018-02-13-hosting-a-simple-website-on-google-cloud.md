---
layout: post
title: "Hosting a simple website on google cloud"
comments: true
description: "Hosting a simple website on google cloud"
keywords: "Google Cloud, Website Hosting"
category: "Web Hosting"
---
Google cloud provides the easiest way to host a static website (set of html pages without a DB).
The first year service comes with free of cost considering that your website doesn’t hit much traffic and doesn’t involve much storage.
The setup is quite easy

1. Signup for the trial account here which has a trial period of 1 year and credited with 300$ credits to use other Google Apps
![img33](https://a6unraj.github.io/assets/images/img33.png)

2. Enable billing and add a credit card to your account to verify that you are a human, currently debit card is not supported but still you can add a debit card(need to be changed after trial period) and you will be charged 1$(50 INR) later will be credited once the biller is verified.
![img34](https://a6unraj.github.io/assets/images/img34.png)

3. Add CNAME record to your DNS settings of your domain provider to verify the domain.
![img35](https://a6unraj.github.io/assets/images/img35.png)

4. Create a bucket with the name of the domain/subdomain where you want the site to be available ( for example mp3.a6unraj.com)
![img36](https://a6unraj.github.io/assets/images/img36.png)
![img37](https://a6unraj.github.io/assets/images/img37.png)

5. Once you have completed building an offline copy of your static site you can go into the bucket and upload files into the bucket(css, js, html retaining the folder structure)
![img38](https://a6unraj.github.io/assets/images/img38.png)
![img39](https://a6unraj.github.io/assets/images/img39.png)

Remember to make the index.html and 404.html file as public as above and set them to load in the configuration
![img40](https://a6unraj.github.io/assets/images/img40.png)

Now the site is ready for display.
