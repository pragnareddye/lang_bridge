#!/bin/bash
cp src/docs_html_generator/docs_style*.css build/www/
for doc in $(ls docs)
do
  destination=${doc/%md/html}
  language=${doc/%.md}
  language_titled="$(tr '[:lower:]' '[:upper:]' <<< ${language:0:1})${language:1}"
  ./node_modules/.bin/markdown docs/${doc} --title=$language_titled \
    | sed -e 's,https\:\/\/sai.onl\/lang_bridge\/,,g' \
    | sed -e '/<title>/r src/docs_html_generator/post_title.xml' \
    | sed -e "s,\${language},$language,g" \
    | sed -e 's,<body>,<body onload="hljs_language_augment();hljs.highlightAll();">,' > build/www/$destination

done
default_language=kannada
cat README.md | sed 's,docs\/\([a-z]*\)\.md,\1,g' > build/README.md
./node_modules/.bin/markdown build/README.md --title="Lang Bridge" \
  | sed -e 's,https\:\/\/sai.onl\/lang_bridge\/,,g' \
  | sed -e '/<title>/r src/docs_html_generator/post_title.xml' \
  | sed -e "s,\${language},$default_language,g" \
  | sed -e 's,<body>,<body onload="hljs_language_augment();hljs.highlightAll();">,' > build/www/index.html
./src/docs_html_generator/build.js