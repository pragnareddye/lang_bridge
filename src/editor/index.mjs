import { EditorView, basicSetup } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state"
import { keymap } from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
import { javascript } from "@codemirror/lang-javascript"
import { nord } from "./themes/nord"
import { lang_bridge_constants } from "../../build/lang_bridge_constants"
import { compile as sweetCompile } from "@sweet-js/core/dist/browser-sweet"
import { Prec } from "@codemirror/state";

let keyTrigerredCompileAction = new Compartment();
let keyTrigerredCompilePending = keymap.of([{
  key: 'Mod-Enter',
  run: () => {
    console.log("Received key trigerred compile request before ready.");
    return true;
  },
  preventDefault: true,
}]);

const fontSizeOverride = EditorView.theme({
  '&': {
    fontSize: "125%",
  }
})

let editor = new EditorView({
  extensions: [
    basicSetup,
    javascript(),
    keymap.of(defaultKeymap),
    nord,
    fontSizeOverride,
    keyTrigerredCompileAction.of(Prec.highest(keyTrigerredCompilePending)),
  ],
  parent: document.getElementById("editor"),
  keymap: [{ key: 'Mod-Enter', run: keyTrigerredCompilePending }]
});


let output = new EditorView({
  extensions: [
    basicSetup,
    javascript(),
    EditorState.readOnly.of(true),
    EditorView.editable.of(false),
    nord,
    fontSizeOverride,
  ],
  parent: document.getElementById("output")
});

// Add languages and code examples to drop down
var languages_selector = document.getElementById("languages");
languages_selector.innerHTML = '';
for (var language of Object.keys(lang_bridge_constants)) {
  var title_cased_language = language.charAt(0).toUpperCase() + language.substring(1);
  var selected = (window.location.hash.substring(1) === language) ? 'selected' : '';
  languages_selector.innerHTML += '<option value="' + language + '" ' + selected + '>'
    + title_cased_language + '</option>';
}

// Add language code examlpes to drop down
var code_examples_selector = document.getElementById("code_examples");
let reloadCodeExamples = () => {
  var code_examples_inner_html = '<option value="0" selected>Load Example</option>';
  var last_sample_name = '0';
  for (var sample_name in lang_bridge_constants[languages_selector.value].samples) {
    code_examples_inner_html += '<option value="' + sample_name + '">' + sample_name + '</option>';
    last_sample_name = sample_name;
  }
  code_examples_selector.innerHTML = code_examples_inner_html;
  editor.dispatch({
    changes: {
      from: 0, to: editor.state.doc.length, insert: lang_bridge_constants[languages_selector.value].samples[last_sample_name]
    }
  });
}
reloadCodeExamples();

// Add drop down event listeners
languages_selector.addEventListener("change", () => {
  window.location.hash = "";
  reloadCodeExamples();
});
code_examples_selector.addEventListener("change", () => {
  if (!code_examples_selector.value) return;
  editor.dispatch({
    changes: {
      from: 0, to: editor.state.doc.length, insert: lang_bridge_constants[languages_selector.value].samples[code_examples_selector.value]
    }
  });
});

// Execute code and display output
let executeCode = () => {
  var code = editor.state.doc.toString();

  try {
    // Clear previous output
    output.dispatch({ changes: { from: 0, to: output.state.doc.length, insert: "" } });

    const transpile_only = document.getElementById('transpile_only').checked;

    // Generate Transpiled Code
    // Sweet Compile currently has a bug that causes bad export statements that are 
    // generated for every individual new keyword. To prevent this from showing up
    // as the transpile result and not breaking the eval we lead the code with a
    // unique separator log statement that is then detected in the result to later
    // eliminate everything before it.
    const unique_separator = '\n\nconsole.log("unique61073746separator");\n\n';
    const unique_separator_regex = /console\.log\(['"]unique61073746separator['"]\);?\n/
    const unique_console_logger = transpile_only ?
      'console.log' : '___unique___console___24177___.log';
    var sweet_code =
      lang_bridge_constants[languages_selector.value].js_lib.
        replaceAll('console.log', unique_console_logger) +
      unique_separator + code;
    var transpiled = sweetCompile(sweet_code, null);
    transpiled.code = transpiled.code.split(unique_separator_regex)[1];
    // Sweet JS doesn't support async and await syntax but simply considers them stand
    // alone tokens. Merging them with the following content should allow a valid
    // evaluation of the resultant code.
    transpiled.code = transpiled.code.replaceAll(/([\n=][ \t]*async);\n[ \t]*/g, '$1 ');
    transpiled.code = transpiled.code.replaceAll(/(^[ \t]*async);\n[ \t]*/g, '$1 ');
    transpiled.code = transpiled.code.replaceAll(/([\n=][ \t]*await);\n[ \t]*/g, '$1 ');
    transpiled.code = transpiled.code.replaceAll(/(^[ \t]*await);\n[ \t]*/g, '$1 ');

    if (!transpile_only) {
      // Execute code and capture console output
      var consoleLog = [];
      var consoleError = [];
      var consoleOutput = {
        log: function (message) {
          consoleLog.push(message);
          this.push();
        },
        error: function (message) {
          consoleError.push(message);
          this.push();
        },
        push: function () {
          // Display console output
          output.dispatch({
            changes: {
              from: 0, to: output.state.doc.length, insert: "// Output:\n" +
                consoleLog.join("\n") + "\n" +
                "//Errors:\n" +
                consoleError.join("\n")
            }
          });
        }
      };
      // All program outputs when possible will be pushed to the unique console.
      // If the code still contains the string 'console.log' we'll try and at
      // least capture the program's synchronous outputs.
      var ___unique___console___24177___ = consoleOutput;
      const contains_console_log = transpiled.code.includes('console.log');
      if (contains_console_log) {
        var consoleReference = console;
        console = ___unique___console___24177___;
      }
      eval(transpiled.code);
      if (contains_console_log) {
        console = consoleReference;
      }

      // Display console output
      output.dispatch({
        changes: {
          from: 0, to: output.state.doc.length, insert: "// Output:\n" +
            consoleLog.join("\n") + "\n" +
            "//Errors:\n" +
            consoleError.join("\n")
        }
      });
    } else {
      output.dispatch({
        changes: {
          from: 0, to: output.state.doc.length, insert: transpiled.code
        }
      });
    }

  } catch (error) {
    // Display error message
    output.dispatch({
      changes: {
        from: 0,
        to: output.state.doc.length,
        insert: "//Errors:\n" + error.message
      }
    });
  }
}

// Execute code on button click
var executeButton = document.getElementById("execute_button");
executeButton.textContent = "Execute";
executeButton.addEventListener("click", executeCode);

// Execute code on keybinding
let keyTrigerredCompile = keymap.of([{
  key: 'Mod-Enter',
  run: () => {
    executeCode();
    return true;
  },
  preventDefault: true,
}]);
editor.dispatch({
  effects: [keyTrigerredCompileAction.reconfigure([Prec.highest(keyTrigerredCompile)])],
})

