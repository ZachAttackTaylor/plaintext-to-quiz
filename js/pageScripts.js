//Global on page ready function scripts. 
$(window).on('load', function () {
  $("textarea").linedtextarea();
});

function Format() {
  var inputTextarea = $('#plaintextInput');
  var plaintextInput = formatPlainText(inputTextarea.val().split('\n'));
  inputTextarea.val('');
  for (var i = 0; i < plaintextInput.length; i++) {
    inputTextarea.val(inputTextarea.val() + plaintextInput[i] + '\n');
  }
}

function CopyToClipboard() {
  var copyText = document.getElementById("jsonOutput");
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");
}

