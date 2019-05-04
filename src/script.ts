function myAct(){
  console.log('init');

  setTimeout(function(){ 

    const html = document.getElementsByTagName("HTML")[0];
    const classname = document.getElementsByClassName("button");
    const thisEl = Math.round(classname[0].getBoundingClientRect().top);

    const hideTooltip = function(e) {
      Array.from(classname).forEach(function(element){
        element.classList.remove('tooltop--open');
      });
      e.stopPropagation();
    }
    const showTooltip = function(e) {
      Array.from(classname).forEach(function(element){
        element.classList.remove('tooltop--open');
      });
      this.classList.add('tooltop--open');
      e.stopPropagation();
    }

    Array.from(classname).forEach(function(element){
      element.addEventListener("click", showTooltip);
    });
    html.addEventListener("click", hideTooltip);


    
    window.onscroll = function() {  

      console.log(thisEl);
      
      if( window.scrollY >= ( thisEl - 50 ) ){
       
        Array.from(classname).forEach(function(element){
          element.classList.add('button__reach');
        });

        
      }else{
        Array.from(classname).forEach(function(element){
          element.classList.remove('button__reach');
        });

      }

    }

   },1000);

}