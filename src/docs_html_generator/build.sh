#!/bin/bash
cp src/docs_html_generator/docs_style.css build/www/ 
printf "\n\n## Languages\n\n" >> build/languages.md
for doc in $(ls docs)
do
  destination=${doc/%md/html}
  language=${doc/%.md}
  language="$(tr '[:lower:]' '[:upper:]' <<< ${language:0:1})${language:1}"
  ./node_modules/.bin/markdown docs/${doc} -s=docs_style.css --title=$language \
    | sed -e '/<title>/r src/docs_html_generator/post_title.xml' > build/www/$destination

  printf -- "- [${language}](${destination})\n\n" >> build/languages.md
done
cat README.md | sed '/## \[Try it/r build/languages.md' > build/README.md
./node_modules/.bin/markdown build/README.md -s=docs_style.css --title="Lang Bridge" \
  | sed -e '/<title>/r src/docs_html_generator/post_title.xml' > build/www/index.html