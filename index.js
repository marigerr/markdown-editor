$(document).ready(function () {
    marked.setOptions({
    // renderer: new marked.Renderer(),
    gfm: true,
    // tables: true,
    // breaks: false,
    // pedantic: false,
    sanitize: true,
    // smartLists: true,
    // smartypants: false
    });    
    $("#editor")[0].value = seedText;
    $("#preview").html(marked(seedText));

    $("#editor").on("change keyup paste", function () {
        console.log($(this)[0].value);
        $("#preview").html(marked($(this)[0].value));
        // console.log($("#editor")[0].value);
    });
});

var seedText = 
"# This is an <h1> tag\n" +
"## This is an <h2> tag\n" +
"###### This is an <h5> tag\n\n" +

"*This text will be italic*  \n" +  
"_This will also be italic_  \n\n" +  

"**This text will be bold**  \n" +  
"__This will also be bold__  \n" +  
"_You **can** combine them_  \n\n" +

"As Kanye West said:  \n\n" +

"> We're living the future so    \n" +
"> the present is our past.  \n\n" +

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

"![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')\n\n"
;