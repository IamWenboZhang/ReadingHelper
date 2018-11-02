var WebAPIHelper = {

    Get: function (url, callback) {
        $.get(url, callback);
    },

    Post: function (url, parmdata, callback) {
        $.post(url, data, callback);
    },

}