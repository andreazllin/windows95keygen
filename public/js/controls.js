$(document).ready(function () {
    $('#normalKeyButton').click(function () {
        $('#keyOutput').text(generateNormalKey());
    });
    $('#oemKeyButton').click(function () {
        $('#keyOutput').text(generateOemKey());
    });
});