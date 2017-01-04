window.addEventListener('message', function(event) {
    // IMPORTANT: Check the origin of the data!
    if (event.origin==upload.config.iframeURL) {
        // The data has been sent from your site

        // The data sent with postMessage is stored in event.data
        if(event.data=='filepick') $('#filepicker').click();
        // event.data.cb();
    }
});

setTimeout(function() {
    parentSend("loadMyOrders");
},4*1000);

window.parentSend = function(call,data) {
    parent.postMessage({
        type: 'up1',
        data: data,
        call: call,
    },upload.config.iframeURL);
}
