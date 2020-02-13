# Editing Guide

## Basic
> No coding experience required

You can edit most of the content by simply editing the CSV files in [`_data/`](_data). 
Just click on the file you wish to edit, click the pencil icon in the top left, make your changes, and then click the <kbd>Commit changes</kbd> button at the bottom.

## Advanced
> Some coding experience would be helpful

This site uses [Jekyll](https://jekyllrb.com/), which is a static site generator. To run the site locally:

### 1. Clone 
```
git clone https://github.com/paramt/lighthouse-hacks.git
cd lighthouse-hacks
```

### 2. Install Jekyll
[Follow these instructions](https://jekyllrb.com/docs/installation/)

### 3. Run 
Run these command from inside the `lighthouse-hacks` directory
```
bundle install
bundle exec jekyll serve 
```
The site should be running at `localhost:4000`
