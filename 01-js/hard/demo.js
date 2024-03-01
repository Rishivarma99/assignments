class Calculator {
  
     constructor(intialValue){
        this.result = intialValue;
     }
     add(n){
        this.result +=  n ;

     }
     subtract(n){
      this.result -= n ;
     }
     multiply(n){
      this.result *= n ;
     }
     divide(n){
      this.result = this.result /n ;
     }
     clear(){
      this.result = 0 ;
     }
     getResult(){
      console.log(this.result);
     }
  
  
  }
  
  let obj1 = new Calculator(0);
  obj1.add(10);
  obj1.getResult();
  