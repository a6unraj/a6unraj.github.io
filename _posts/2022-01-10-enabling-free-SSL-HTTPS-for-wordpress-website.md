---
layout: post
title: "Enabling free HTTPS/SSL for a self-hosted wordpress website"
comments: true
description: "Enabling free HTTPS/SSL for a self-hosted wordpress website"
keywords: "HTTPS, SSL, Wesbite"
category : "Web Hosting"
---

I bought a cheap website hosting from [Atspace](https://www.atspace.com/), however I found that they are not giving SSL for free.
It was required to either buy SSL certificate for the domain from them or buy the certificate from a provide outside and upload it.
It's easy to get a free SSL certificate from [LetsEncrypt](https://letsencrypt.org/).
If you are using wordpress,[Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/) wordpress plugin, provides easy way to get a SSL certificate from LetsEncrypt.


Install the [Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/) plugin and proceed with the steps in the plugin.

[![img86](https://a6unraj.github.io/assets/images/img86.jpg)](https://a6unraj.github.io/assets/images/img86.jpg)
[![img87](https://a6unraj.github.io/assets/images/img87.jpg)](https://a6unraj.github.io/assets/images/img87.jpg)
[![img88](https://a6unraj.github.io/assets/images/img88.jpg)](https://a6unraj.github.io/assets/images/img88.jpg)
[![img89](https://a6unraj.github.io/assets/images/img89.jpg)](https://a6unraj.github.io/assets/images/img89.jpg)
[![img90](https://a6unraj.github.io/assets/images/img90.jpg)](https://a6unraj.github.io/assets/images/img90.jpg)
[![img91](https://a6unraj.github.io/assets/images/img91.jpg)](https://a6unraj.github.io/assets/images/img91.jpg)
[![img92](https://a6unraj.github.io/assets/images/img92.jpg)](https://a6unraj.github.io/assets/images/img92.jpg)

Create TXT record in the domains DNS management settings to verify the domain
[![img93](https://a6unraj.github.io/assets/images/img93.jpg)](https://a6unraj.github.io/assets/images/img93.jpg)
[![img94](https://a6unraj.github.io/assets/images/img94.jpg)](https://a6unraj.github.io/assets/images/img94.jpg)

Copy Certificate, Private Key, Certificate Authority Bundle which is generated from LetsEncrypt and paste it in the SSL section of the domains control panel
[![img95](https://a6unraj.github.io/assets/images/img95.jpg)](https://a6unraj.github.io/assets/images/img95.jpg)
[![img96](https://a6unraj.github.io/assets/images/img96.jpg)](https://a6unraj.github.io/assets/images/img96.jpg)
[![img97](https://a6unraj.github.io/assets/images/img97.jpg)](https://a6unraj.github.io/assets/images/img97.jpg)

Once the certificates are uploaded, the SSL becomes active
[![img98](https://a6unraj.github.io/assets/images/img98.jpg)](https://a6unraj.github.io/assets/images/img98.jpg)
[![img99](https://a6unraj.github.io/assets/images/img99.jpg)](https://a6unraj.github.io/assets/images/img99.jpg)
[![img100](https://a6unraj.github.io/assets/images/img100.jpg)](https://a6unraj.github.io/assets/images/img100.jpg)


