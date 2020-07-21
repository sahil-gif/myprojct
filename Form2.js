class Form2{
    constructor(){
        //this.select = createElement('h1');
        //quest1
        //  this.question1 = createElement('h2',"Select the disease you want to check");
       
    }
    display(form2){
       //background.remove();
      //background(background2);

     // background1.remove();
     background(background2);

     this.question1 = createElement('h2');
     this.radio = createRadio('h4');
     this.radio1 = createRadio('h4');
     this.radio2 = createRadio('h4');
     this.radio.style('width','400px');
     this.radio1.style('width','400px');
     this.radio2.style('width','400px'); 
     this.question1.hide();
     this.radio.hide();
     this.radio1.hide();
     this.radio2.hide();
 
        this.question1.html("  Select Disease you want to check ");
        this.question1.position(displayWidth/2-600,displayHeight/2-290);
        this.radio.option('Blood Pressure');
        this.radio1.option('Diabeties');
        this.radio2.option('Covid-19');
  
        this.radio.position(displayWidth/2-550,displayHeight/2-225);
        this.radio1.position(displayWidth/2-400,displayHeight/2-225);
        this.radio2.position(displayWidth/2-250,displayHeight/2-225);

          this.radio.show();
         this.radio1.show();
       this.radio2.show(); 
         this.question1.show(); 

       this.radio.mousePressed (()=>{
         this.radio.hide();
         this.radio1.hide();
         this.radio2.hide();
         this.question1.hide();
         bpQuest1.display(form2);

         })
         this.radio1.mousePressed (()=>{
          this.radio.hide();
          this.radio1.hide();
          this.radio2.hide();
          this.question1.hide();
          dq1.display(form2);
         })
         this.radio2.mousePressed (()=>{
          this.radio.hide();
          this.radio1.hide();
          this.radio2.hide();
          this.question1.hide();
          cq1.display(form2);
         })
         
        }
         
    }
