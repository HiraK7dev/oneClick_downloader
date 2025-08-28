window.addEventListener("load", () => {
  setTimeout(() => {
    const subscribeButton = document.querySelector("#subscribe-button");
    if(subscribeButton){
        if(!document.querySelector("#one_click_button")){
            //button element
            const downloadButton = document.createElement("button");
            downloadButton.id = "one_click_button";
            downloadButton.innerText = "Download Local";
            //button element styling
            downloadButton.style.marginLeft = "2rem";
            downloadButton.style.border = "1px solid gray"
            downloadButton.style.padding = "0.7rem 2rem 0.7rem 2rem";
            downloadButton.style.backgroundColor = "transparent";
            downloadButton.style.color = "gray";
            downloadButton.style.borderRadius = "calc(infinity * 1px)";
            downloadButton.style.cursor = "pointer";

            downloadButton.onmouseenter = function () {
                downloadButton.style.backgroundColor = "gray";
                downloadButton.style.color = "white";
            }
            downloadButton.onmouseleave = function () {
                downloadButton.style.backgroundColor = "transparent";
                downloadButton.style.color = "gray";
            }
            //injecting the button element
            subscribeButton.parentNode.append(downloadButton);

            downloadButton.addEventListener("click", () => { console.log(window.location.href) });
        }
    }
  }, 2000);
});
