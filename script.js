var convertBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", function() {
    console.log(`URL : ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL) {
  window.location.href = `https://github.com/Jahongir777/YouTube-Video-Downloader-App/blob/main/index.html/download?URL=${URL}`;
}
