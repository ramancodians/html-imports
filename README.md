# HTML Imports

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Html Imports solves the problems when building static webpages which shares code. While building static sites a lot of code is copy-pasted in multiple files. For example `header`. Header is common across the site. But all `xxxx.html` will have a `<header>...</header>` code it. Html imports solves this problem and give you easy syntax to create dynamic pages solely on client side. 

# Install

1. Bower `bower install --save  html-imports`
2. Browser `<script async src="./path/html-imports"></script>`

# How to use
`index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
    <!-- Add <import> where you want the component -->
    <import href="./path/partials/header.html"></import>
    
    <!-- Add library at the end of page [important] -->
    <script src="bower_components/html-imports/html-imports.js">
</body>
</html>
```

`header.html`
```
<header> This is Header </header>
```

# Todo
1. Remove duplicate AJAX call for same component.
