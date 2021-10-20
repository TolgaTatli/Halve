---
layout: post
title:  "Halve Jekyll Theme"
date:   2016-05-29
excerpt: "Stylish, two-column Jekyll theme for your blog."
tag:
- jekyll 
- halve
- blog
- vangeltzo
- theme
- vangelis
---

<a href="{{ site.url }}/images/halve-home-image.png"><img src="{{ site.url }}/images/halve-home-image.png" alt="Home Page of Halve"></a>  

<center><b>Halve</b> is a stylish, two-column jekyll theme.</center><br>
     
 This theme is Jekyll port of [vangeltzo.com](http://vangeltzo.com/) (by [Vangelis Tzortzis](https://github.com/srekoble)). I couldn't stop myself to port this theme when I saw his site. And he kindly gave me permission to share this with you.

<iframe src="https://ghbtns.com/github-btn.html?user=TaylanTatli&repo=Halve&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>    
      
## Installation and Quick Usage
* Fork the [Halve repo](https://github.com/TaylanTatli/Halve/fork)
* Edit `_config.yml` file.
* Edit `index.md`.
* Edit `_data/projects.yaml`
* Add a logo with a small one to `images` folder. (eg. `logo.png`, `logo-small.png`)
* Remove sample posts from `_posts` folder and add yours.
* Remove/Change sample images from `images` folder.
* Change repo name to `YourUserName.github.io`    
     
That's all.

If you want to make a **Project Page**, you have to use `gh-pages` branch. For **Personal Page**; `master` branch. More info [here](https://help.github.com/articles/about-github-pages-and-jekyll/#jekylls-build-process).

## Preview

{% capture images %}
	{{ site.url }}/images/halve-home-image.png
	{{ site.url }}/images/post-image-halve-1.png
	{{ site.url }}/images/post-image-halve-2.png
{% endcapture %}
{% include gallery images=images caption="Screenshots of Halve Theme" cols=3 %}

{% capture images %}
	{{ site.url }}/images/post-image-halve-3.png
	{{ site.url }}/images/post-image-halve-6.png
	{{ site.url }}/images/post-image-halve-4.png
{% endcapture %}
{% include gallery images=images caption="Mobile view of Halve Theme" cols=3 %}
      
See a [live version of Halve](http://taylantatli.github.io/Halve) hosted on GitHub.      

## Site Setup
A quick checklist of the files you’ll want to edit to get up and running.    

### Site Wide Configuration
`_config.yml` is your friend. Open it up and personalize it. Most variables are self explanatory but here's an explanation of each if needed:

#### title

The title of your site... shocker!

Example `title: My Awesome Site`

#### description

The description to use for meta tags and homepage.

#### url

Used to generate absolute urls in `sitemap.xml`, `feed.xml`, and for generating canonical URLs in `<head>`. When developing locally either comment this out or use something like `http://localhost:4000` so all assets load properly. *Don't include a trailing `/`*.

Examples:

{% highlight yaml %}
url: http://taylantatli.me/Halve
url: http://localhost:4000
url: //cooldude.github.io
url:
{% endhighlight %}

#### logo
Your site's logo. It will be shown on homepage. Also used for twitter meta tags.

#### background
Here we will set images for left block. Example:

```
background:
  homepage: images/home.png
  post-list: images/unsplash-image-10.jpg
  default-post: images/unsplash-gallery-image-3.jpg 
```

<dl>
  <dt>homepage</dt>
  <dd>Is for homepage background image.</dd>
  <dt>post-list</dt>
  <dd>Is for posts list page background image.</dd>
  <dt>default-post</dt>
  <dd>Is for posts' default background image. It will be shown for every posts that don't specify any image from post's YAML front matter.</dd>
</dl>

---

### Projects Overlay

To set what image links appear in the overlay menu edit `_data/projects.yaml`. Use the following format to set the URL, title, image and project status for as many links as you'd like. If you set `completed` to `false` like `completed: false`, it won't be clickable until you set it true like `completed: true`

{% highlight yaml %}
- title: Moon Jekyll Theme
  url: http://taylantatli.me/Moon
  image: https://cloud.githubusercontent.com/assets/754514/14509720/61c61058-01d6-11e6-93ab-0918515ecd56.png
  completed: true

- title: Ramme Jekyll Theme
  url: http://taylantatli.me/Ramme
  image: https://raw.githubusercontent.com/TaylanTatli/Ramme/master/assets/img/screenshot-post.png
  completed: true

- title: Daisy Pelican Theme
  url: http://taylantatli.me/Daisy-Pelican-Theme/
  image: https://raw.githubusercontent.com/TaylanTatli/Daisy-Pelican-Theme/master/Preview-1.png
  completed: true

- title: Block Icon Theme
  url: https://github.com/TaylanTatli/Block-Icon-Theme
  image: https://raw.githubusercontent.com/TaylanTatli/Block-Icon-Theme/master/Preview.png
  completed: false

- title: Start Page
  url: http://taylantatli.me/StartPage/
  image: https://raw.githubusercontent.com/TaylanTatli/StartPage/master/preview.png
  completed: false
{% endhighlight %}

---

## Layouts and Content

Halve Theme use [Jekyll Compress](https://github.com/penibelst/jekyll-compress-html) to compress html output. But it can cause errors if you use "linenos" (line numbers). I suggest don't use line numbers for codes, because it won't look good with this theme, also i didn't give a proper style for them. If you insist to use line numbers, just remove `layout: compress` string from layouts. It will disable compressing.

### Images for Posts

You can set left block image per post. Just add `image: some link` to your post's front matter. If you don't set this, default post image will be used from `_config.yml`.

```
image: /assets/img/some-image.png
or
image: http://example.com/some-image.png
```    
 This also will be used for twitter card:

![Halve Twitter Card]({{ site.url }}/images/post-image-halve-5.png)

---

## Questions?

Found a bug or aren't quite sure how something works? By all means [file a GitHub Issue](https://github.com/TaylanTatli/Halve/issues/new). And if you make something cool with this theme feel free to let me know.

---

## License

This theme is free and open source software, distributed under the MIT License. So feel free to use this Jekyll theme on your site without linking back to me or including a disclaimer.
