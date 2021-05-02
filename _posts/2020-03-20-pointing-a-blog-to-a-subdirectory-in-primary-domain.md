---
layout: post
title: "Pointing a blog to a subdirectory in primary domain"
comments: true
description: "Pointing a blog to a subdirectory in primary domain"
keywords: "Website Hosting"
category: "Web Hosting"
---

The blog is first to be setup at the sub-domain.
For ex :In the DNS management of my domain, I used CNAME records to point my sub domain to blogger.
![img42](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img42.jfif)

Then I have added a sub directory in my hosting space using c-panel and added 2 files to the folder ( .htaccess and proxy.php)
![img41](https://github.com/a6unraj/a6unraj.github.io/raw/master/assets/images/img41.jfif)


The htaccess file with below code
```
RewriteEngine On
RewriteBase /memories
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ proxy.php?url=http://memories.arunraj.eu/$1
```

The proxy.php file with below code
```
<?php
$from = "memories.arunraj.eu";
$unto = "arunraj.eu/memories";
function fetch($url) {
$curl = curl_init();
$timeout = 5; // set to zero for no timeout
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, $timeout);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
$html = curl_exec($curl);
$content_type = curl_getinfo($curl, CURLINFO_CONTENT_TYPE);
curl_close($curl);
return array($html, $content_type);
}
list($html, $content_type) = fetch($_GET['url']);
// Fix root-relative links etc.
$html = preg_replace('/\b(href|src|rel)="\//', '$1="http://'.$unto.'/', $html);
// Replace the old URL with the new
$html = str_replace($from, $unto, $html);
header("Content-type: $content_type");
echo $html;
?>
```

Edited the blogger theme in HTML and added the below script under header tags
```
<script>
if (location.host == memories.arunraj.eu)
{
location.replace(location.href.replace(memories.arunraj.eu, arunraj.eu/memories));
}
</script>
```

Now accessing the blogger url [http://a6unraj.blogspot.com](http://a6unraj.blogspot.com) redirects and loads the blog posts in the subdirectory of my domain.
