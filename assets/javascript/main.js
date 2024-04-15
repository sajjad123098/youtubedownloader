// Enable JSHint for ES6
/*jshint esversion: 6 */

// On document ready, execute the initial setup
$(document).ready(function () {
    checkForQuickLink();
});

// Check for the presence of a QuickLink parameter in the URL
function checkForQuickLink() {
    const url = new URL(window.location.href);
    const ql = url.searchParams.get("ql");

    if (ql === "1") {
        const decodedUrl = decodeURIComponent(url.searchParams.get("url"));
        $("#url").val(decodedUrl);
        $("#download_btn").trigger('click');
    }
}

// Handle Download Button click event
$("#download_btn").on("click", function () {
    const url = $("#url").val();
    const myAdUrl = "https://ads.com";
    const iframeHTML = `
        <iframe class="mx-auto mb-3" style="width:800px;height:250px;border:0;overflow:hidden;" 
                scrolling="no" 
                src="https://loader.to/api/card/?url=${url}&adUrl=${myAdUrl}">
        </iframe>`;

    $("#download_row").prepend(iframeHTML);
});

// Update QuickLink URL when input value changes
$("#qlurl").on('input', function () {
    const url = encodeURIComponent($(this).val());
    const ql = `https://DOWNLOADER.com/?ql=1&url=${url}`;
    $("#quicklink").val(ql);
});