(function(){
    let YouTubeContainers = document.querySelectorAll(".embed-youtube");
  
    // Repita todos los contenedores de YouTube que pueda tener
    for (let i = 0; i < YouTubeContainers.length; i++) {
        let container = YouTubeContainers[i];
        let imageSource = "https://img.youtube.com/vi/"+ container.dataset.videoId +"/maxresdefault.jpg"; 
        // let imageSource = "https://img.youtube.com/vi/nHRGbkmRKUQ/maxresdefault.jpg";
  
        // Cargue la imagen en miniatura de forma asincrónica
        let image = new Image();
        image.src = imageSource;
        image.addEventListener("load", function() {
            container.appendChild(image);
        });
  
        // Cuando el usuario haga clic en el contenedor, cargue el video de YouTube incrustado
        container.addEventListener("click", function() {
            let iframe = document.createElement( "iframe" );
            var elementos = document.getElementsByTagName("iframe");
            for (var i = 0; i < elementos.length; i++) {
            elementos[i].setAttribute("id", "player"+i);
            }
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            // Importante: agregue el parámetro GET de reproducción automática; de lo contrario, el usuario tendría que hacer clic en el video de YouTube nuevamente para reproducirlo
            iframe.setAttribute("src", "https://www.youtube.com/embed/"+ this.dataset.videoId +"?enablejsapi=1&html5=1&rel=0&showinfo=0&autoplay=1");
            // iframe.setAttribute("iframe-video");
            
            // Limpiar miniatura y cargar el iframe de YouTube
            this.innerHTML = "";
            this.appendChild( iframe );
        });
    }
  })();
  