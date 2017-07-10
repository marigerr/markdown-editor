$(document).ready(function () {
    marked.setOptions({
        gfm: true,
        sanitize: true,
    });
    $("#editor")[0].value = seedText;
    $("#preview").html(marked(seedText));

    $("#editor").on("change keyup paste", function () {
        $("#preview").html(marked($(this)[0].value));
    });


    // var ratioScroll = previewScrollRoom / editorScrollRoom;

    $('#editor').on('scroll', function () {
        var editorScrollRoom = $('#editor')[0].scrollHeight - $('#editor').height() - 40;
        var previewScrollRoom = $('#preview')[0].scrollHeight - $('#preview').height() - 40;
        var ratioScroll = previewScrollRoom / editorScrollRoom;
        console.log(ratioScroll);
        $('#preview').scrollTop($('#editor').scrollTop() * ratioScroll);
    });

});

var seedText =
    "# This is an <h1> tag\n" +
    "## This is an <h2> tag\n" +
    "#### This is an <h4> tag\n\n" +

    "*This text will be italic*  \n" +
    "_This will also be italic_  \n\n" +

    "**This text will be bold**  \n" +
    "__This will also be bold__  \n" +
    "_You **can** combine them_  \n\n" +

    "Indented quote \n\n" +

    "> Someone said something that     \n" +
    "> needed to be repeated  \n\n" +

    "[I'm an inline-style link](https://www.google.com)\n\n" +

    "1. First ordered list item\n" +
    "2. Another item\n" +
    "1. Actual numbers don't matter, just that it's a number\n" +
    "4. And another item.\n\n" +

    "Inline `code` has `back-ticks around` it.\n\n" +

    "```javascript\n" +
    "var s = 'JavaScript syntax highlighting';\n" +
    "alert(s);" +
    "```\n\n" +

    "![alt text](https://res.cloudinary.com/marigerr/image/upload/c_scale,w_302/v1499627530/tree-whiteBackgrnd-512height_t5lzgp.png)\n\n"
    ;