const fs = require('fs');
const path = require('path');
const generators = require('./libs_generator.js')

function parse_config(data) {
  keywords = {};
  lines = data.split(/\r?\n/);
  lines.forEach(line => {
    parts = line.split(/ *= */);
    keywords[parts[0]] = parts[1];
  });
  return keywords;
}

function build() {
  var lang_bridge_constants = {}
  fs.readdirSync('dicts/').forEach(file => {
    console.log(file);
    const language = path.parse(file).name;
    const keywords = parse_config(fs.readFileSync(`dicts/${file}`, 'utf8'));
    cpp_lib = generators.generate_cpp_map(language, keywords);
    fs.writeFileSync(cpp_lib.filename, cpp_lib.content);
    js_lib = generators.generate_js_map(language, keywords);
    fs.writeFileSync(js_lib.filename, js_lib.content);
    samples = generators.generate_samples(language, keywords);
    md = generators.generate_md(language, keywords, samples);
    fs.writeFileSync(md.filename, md.content);
    lang_bridge_constants[language] = {
      js_lib: js_lib.content,
      cpp_lib: cpp_lib.content,
      samples: samples,
    };
  });
  var lang_bridge_constants_content = `const lang_bridge_constants = ` +
  `  ${JSON.stringify(lang_bridge_constants)};\n\n` +
  `export { lang_bridge_constants }`;
  fs.writeFileSync('./build/lang_bridge_constants.js', lang_bridge_constants_content);
}

exports.build = build