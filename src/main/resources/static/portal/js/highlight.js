$(function () {
    hljs.initHighlightingOnLoad();

    $("code").each(function(){
        $(this).html("<ul><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ul>");
    });
});
