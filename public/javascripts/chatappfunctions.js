$(document).ready(function () {
    setInterval(function () {
        //code goes here that will be run every 1 seconds.   
        $("#messages").load('/messages');
    }, 1000);
});
sendMessage = function () {
    var messageToSend = $("#thismessage").val();
    var data1 = {};
    data1.message = messageToSend;
    $.ajax({
        url: '/messages/send/',
        type: 'POST',
        data: JSON.stringify(data1),
        success: function (data) {
            //something here if anything happens
            console.log(data1)
        },
        contentType: 'application/json'
    });
    $("#thismessage").val('');
}
sendThroughEnter = function () {
    $("#thismessage").keyup(function (e) {
        /*
         * Delay the enter key form submit till after the hidden
         * input is updated.
         */

        if (e.which !== 13) {
            return;
        } else {

            // Prevent form submit
            e.preventDefault();

            sendMessage();


        }
    });

}
