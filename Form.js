class Form {
  
    constructor(){
     
      this.click = createButton('Next');
      
    }
      

    display(form2){
        background(background1);
        
       
     // this.click.html("  Next ");
      this.click.position(displayWidth/2-100,displayHeight/2+270);
        
     // form2.hide();
      this.click.mousePressed(()=>{ 
        //  form.hide();
         
        
         this.click.hide();
         
         form2.display(form2);
      })
      
       
     
    }
    
}
