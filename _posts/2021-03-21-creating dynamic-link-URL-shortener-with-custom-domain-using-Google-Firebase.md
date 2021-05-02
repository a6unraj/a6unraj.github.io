---
layout: post
title: "Creating dynamic link URL shortener with custom domain using Google Firebase"
comments: true
description: "Creating dynamic link URL shortener with custom domain using Google Firebase"
keywords: "Google Firebase, URL shortener"
category: "Web Development"
---
I was checking for some PHP scripts which I could use as a URL shortener with my own short and easily remembered domain. Lately I discovered that google was providing this awesome service for free.

Google replaced its URL shortener service goo.gl with Dynamic Links firebase.google.com/products/dynamic-links providing more features and flexibility. 

Pros : 
1. Can be configured with your own custom-domain - I was able to register a TLD which is not that costly and use it as a URL shortener (arun.fyi).
2. Can be configured as a dynamic link, if you own android and iphone apps, you can redirect the link behaviour to open in the respective apps. 
3. Analytics is provided for the dynamic links created.
4. You can define your own dynamic link and change the deep links behind.
For example : I created the link arun.fyi/mp3 to redirect to some page in a6unraj.com domain 6 months ago and now I no longer want to use that domain, so I changed the deep link behind and now it redirects a page in different domain( arunraj.eu ).

The setup is quite easy

1. Buy the domain

2. Create a project in Firebase console https://console.firebase.google.com/project/
![img43](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img43.jfif)
![img44](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img44.jfif)
![img45](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img45.jfif)
![img46](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img46.jfif)

3. Setup URL Prefix
![img47](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img47.jfif)
![img48](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img48.jfif)
![img49](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img49.jfif)
![img50](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img50.jfif)

4. Setup A records in the DNS settings where the domain was registered I have setup URL prefix for arun.fyi

5. Start using the service once the URL prefix setup is completed.
![img51](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img51.jfif)

6. Click on New Dynamic Link and you can define your own link
![img52](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img52.jfif)
![img53](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img53.jfif)
   Setup behaviour for android and iphone apps
![img54](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img54.jfif)
![img55](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img55.jfif)
   Setup meta tags for social media platforms
![img56](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img56.jfif)
![img57](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img57.jfif)

 The dynamic link is all setup and you can try it arun.fyi/clock
