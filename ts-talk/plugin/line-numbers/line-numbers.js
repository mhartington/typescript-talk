Reveal.addEventListener( 'ready', function(event) {
  addLineNumbers();
});
function addLineNumbers() {
  var line_numbers = document.querySelectorAll("pre code");
  var lineNumberElm = document.createElement('div')
  for (var l = 0; l < line_numbers.length; l++) {
      var content = line_numbers[l].innerHTML;
      content = content.split("\n");
      for (var n = 0; n < content.length; n++) {
        content[n] = "<span class='line-number'></span>" + content[n];
      }
      content = content.join("\n");
      line_numbers[l].innerHTML = content;
  }
}
