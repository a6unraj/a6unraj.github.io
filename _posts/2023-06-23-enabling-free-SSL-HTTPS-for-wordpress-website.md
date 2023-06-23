---
layout: post
title: "URL Redirects using Cloudflare"
comments: true
description: "Enabling free URL redirecting and forwarding"
keywords: "URL Redirect, URL Forwarding"
category : "Web Hosting"
---

I was moving my website from one domain to another and I realized that I needed to setup URL redirects so that my google indexed pages and page ranks are not affected.
I was searching for different ways and finally concluded that using Cloudflare with its page rule was the easiest. 
Initially I was doing using a free hosting service and had setup the [redirects using the .htaccess file](https://www.freecodecamp.org/news/how-to-redirect-http-to-https-using-htaccess/).
Later I noticed that it was not effificient as the free webhosting did not offer SSL. 

Then I found cloudflare and started using it.
URL redirects can be easily setup with Cloudflare free account where they offer setting upto 3 page rules - follow the setps [here](https://developers.cloudflare.com/support/page-rules/configuring-url-forwarding-or-redirects-with-page-rules/)

[![img86](https://a6unraj.github.io/assets/images/img117.jpg)](https://a6unraj.github.io/assets/images/img117.jpg)

The above pages rules helped me redirect my main domain, subdomain and all the webpages in them to be redirected from my old domain [arunraj.eu](https://arunraj.eu) to new domain [arunraj.me](https://arunraj.me)
