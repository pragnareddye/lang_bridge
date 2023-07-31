const fs = require("fs");

function generate_cpp_map(language, keywords) {
  const language_upper = language.toUpperCase();
  var content = fs.readFileSync('./src/builder/templates/cpp.template', 'utf8');
  var template_args = JSON.parse(JSON.stringify(keywords))
  template_args['language_upper'] = language_upper;
  for (var key of Object.keys(template_args)) {
    content = content.replaceAll(`\${${key}}`, template_args[key]);
  }
  return {
    filename: `libs/${language}.h`,
    content: content
  };
}

function generate_js_map(language, keywords) {
  var content = fs.readFileSync('./src/builder/templates/js.template', 'utf8');
  for (var key of Object.keys(keywords)) {
    content = content.replaceAll(`\${${key}}`, keywords[key]);
  }
  return {
    filename: `libs/${language}.sweet.js`,
    content: content
  };
}

function generate_samples(language, keywords) {
  samples = {};
  fs.readdirSync('./src/builder/templates/samples/').forEach(file => {
    var content = fs.readFileSync(`./src/builder/templates/samples/${file}`, 'utf8');
    for (var key of Object.keys(keywords)) {
      content = content.replaceAll(`\${${key}}`, keywords[key]);
    }
    samples[file.split('.')[1]] = content;
  });
  return samples;
}

const code_languages = { js: 'javascript' };

function generate_md(language, keywords, samples) {
  const sample_template = fs.readFileSync('./src/builder/templates/md.sample.template', 'utf8');
  md_samples = []
  for (var title of Object.keys(samples)) {
    var sample = sample_template;
    sample = sample.replaceAll(`\${title}`, title);
    sample = sample.replaceAll(`\${code_language}`, code_languages['js']);
    sample = sample.replaceAll(`\${sample}`, samples[title]);
    md_samples.push(sample);
  }
  var template_args = JSON.parse(JSON.stringify(keywords))
  template_args['language'] = language;
  template_args['language_titled'] = language.charAt(0).toUpperCase() + language.substring(1);
  template_args['js_samples'] = md_samples.join('\n');
  var content = fs.readFileSync('./src/builder/templates/md.template', 'utf8');
  for (var key of Object.keys(template_args)) {
    content = content.replaceAll(`\${${key}}`, template_args[key]);
  }
  return {
    filename: `docs/${language}.md`,
    content: content
  };
}

function generate_readme_md(languages_list) {
  const readme_language_template = fs.readFileSync('./src/builder/templates/README.language.md.template', 'utf8');
  languages_md = [];
  for (var language of languages_list) {
    var language_md = readme_language_template;
    var language_titled = language.charAt(0).toUpperCase() + language.substring(1);
    language_md = language_md.replaceAll(`\${language}`, language);
    language_md = language_md.replaceAll(`\${language_titled}`, language_titled);
    languages_md.push(language_md);
  }
  var languages = languages_md.join('\n\n');
  var content = fs.readFileSync('./src/builder/templates/README.languages.md.template', 'utf8');
  content = content.replaceAll(`\${languages}`, languages);
  return [{
    part: 'Auto-generated Languages',
    content: content
  }];
}

exports.generate_js_map = generate_js_map;
exports.generate_cpp_map = generate_cpp_map;
exports.generate_samples = generate_samples;
exports.generate_md = generate_md;
exports.generate_readme_md = generate_readme_md;