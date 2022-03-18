var buildUrl = "Build";
      var loaderUrl = buildUrl + "/nocompress.loader.js?v=2";
      var config = {
        dataUrl: buildUrl + "/nocompress.data?v=2",
        frameworkUrl: buildUrl + "/nocompress.framework.js?v=2",
        codeUrl: buildUrl + "/nocompress.wasm?v=2",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Character Creator",
        productVersion: "0.1",
      };

      var container = document.querySelector("#unity-container");
      var canvas = document.querySelector("#unity-canvas");
      var loadingBar = document.querySelector("#unity-loading-bar");
      var progressBarFull = document.querySelector("#unity-progress-bar-full");
      var fullscreenButton = document.querySelector("#unity-fullscreen-button");

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = "unity-mobile";
        config.devicePixelRatio = 1;
      } else {
        canvas.style.width = "700px";
        canvas.style.height = "520px";
      }
      loadingBar.style.display = "block";

      var script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };  
		  
		  
		  
        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);
	  
	  
