#!/bin/bash
# set -e

echo export static html
npm run export
echo copy out to dist
cp -rf out dist && touch dist/.nojekyll
echo add dist folder
git add dist
echo commit changes
git commit -m "deploy to gh-pages"
echo push to remote gh-pages
git push origin `git subtree split --prefix dist`:gh-pages --force
echo reset commit
git reset HEAD^
echo remove dist
rm -rf dist
echo All done!
