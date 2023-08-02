#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function parse_config(data) {
  keywords = {};
  lines = data.split(/\r?\n/);
  lines.forEach(line => {
    parts = line.split(/ *= */);
    keywords[parts[0]] = parts[1];
  });
  return keywords;
}

function template_content(data, args) {
  var content = data;
  for (var key of Object.keys(args)) {
    content = content.replaceAll(`\${${key}}`, args[key]);
  }
  return content;
}

function template_file(file, args) {
  return template_content(fs.readFileSync(file, 'utf-8'), args);
}

function build() {
  fs.mkdirSync('./build/www/highligh_js_overrides');
  fs.readdirSync('dicts/').forEach(file => {
    const language = path.parse(file).name;
    const keywords = parse_config(fs.readFileSync(`dicts/${file}`, 'utf8'));
    fs.writeFileSync(
      `./build/www/highligh_js_overrides/${language}.js`,
      template_file('./src/docs_html_generator/templates/language.highlight.js.template',
        keywords));
  });
}

build();