!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};t.startButton.addEventListener("click",(function(){if(n)return;n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.startButton.disabled=!0,t.stopButton.disabled=!1})),t.stopButton.addEventListener("click",(function(){clearInterval(n),n=null,t.startButton.disabled=!1,t.stopButton.disabled=!0}));var n=null}();
//# sourceMappingURL=01-color-switcher.4fc92546.js.map
