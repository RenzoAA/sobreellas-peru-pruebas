const d = document;
export default function mediaQuerys(img1, img2, img3) {
  const $imgSlider1 = d.querySelector(img1),
    $imgSlider2 = d.querySelector(img2),
    $imgSlider3 = d.querySelector(img3);
    
    addEventListener('resize', () => {
      if (innerWidth > 767) {
        document.oncontextmenu = function(){return true}
        $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-desktop.webp")
        $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-desktop.webp")
        $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-desktop.webp")
      }else if(innerWidth < 768){
        document.oncontextmenu = function(){return false}
        $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-mobile.webp")
        $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-mobile.webp")
        $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-mobile.webp")
      }else if(innerWidth > 1199){
        $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-desktop.webp")
        $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-desktop.webp")
        $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-desktop.webp")
      }else if(innerWidth < 1200){
        $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-tablet.webp")
        $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-tablet.webp")
        $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-tablet.webp")
      }
  })

  addEventListener("DOMContentLoaded",()=>{
    if (innerWidth > 767) {
      document.oncontextmenu = function(){return true}
      $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-desktop.webp")
        $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-desktop.webp")
        $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-desktop.webp")
    }else if(innerWidth < 768){
      document.oncontextmenu = function(){return false}
      $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-mobile.webp")
      $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-mobile.webp")
      $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-mobile.webp")
    }else if(innerWidth > 1199){
      $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-desktop.webp")
      $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-desktop.webp")
      $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-desktop.webp")
    }else if(innerWidth < 1200){
      $imgSlider1.setAttribute("src", "imagenes/slider-inicio/slider-1-tablet.webp")
      $imgSlider2.setAttribute("src", "imagenes/slider-inicio/slider-2-tablet.webp")
      $imgSlider3.setAttribute("src", "imagenes/slider-inicio/slider-3-tablet.webp")
    }
  })
}
