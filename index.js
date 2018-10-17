var editboxHTML =
`<html class="expand close">
<head>
<style type="text/css">
.expand { width: 100%; height: 100%; }
.close { border: none; margin: 0px; padding: 0px; }
html,body { overflow: hidden; }
<\/style>
<\/head>
<body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();">
<form class="expand close" name="f">
<textarea class="expand close" style="background: #def;" name="ta" wrap="hard" spellcheck="false">
<\/textarea>
<\/form>
<\/body>
<\/html>`;

var defaultStuff = '<h3>Welcome to Try HTML Live Editor<\/h3>\n' +
'<img src="https://avatars2.githubusercontent.com/u/32694766?s=50">';

var extraStuff = `<div style="position:absolute; margin:.3em; bottom:0em; right:0em;"><small>\n <a href="https://github.com/tryhtml/editor" target="_top">Improve this page<\/a> <\/small><\/div>`;

var old = '';

function init() {
  window.editbox.document.write(editboxHTML);
  window.editbox.document.close();
  window.editbox.document.f.ta.value = defaultStuff;
  update();
}

function update() {
  var textarea = window.editbox.document.f.ta;
  var d = dynamicframe.document;

  if (old != textarea.value) {
    old = textarea.value;
    d.open();
    d.write(old);
    if (old.replace(/[\r\n]/g,'') == defaultStuff.replace(/[\r\n]/g,''))
      d.write(extraStuff);
    d.close();
  }

  window.setTimeout(update, 150);
}