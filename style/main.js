$(document).ready(function()){

    // stores the inputs from the user to calculate after          
   var inputs=[""];
   
   //string to store current input string
   var totalString;
   
   
   //operators array for validation without the decimal point
   var operators1 = ["+", "-", "/", "*"];
   
   
   //operators array with the decimal point for validation
   var operators 2 = ["."]
   
   // Numbers for validation
   var nums = [0,1,2,3,4,5,6,7,8,9];


   
   // updates all our stuff and has one parameter input
   function getValue(input){
     if(operators.includes(inputs[inputs.length-1]===true && input===".")){
       console.log("Duplicate '.' ");
     }
     //don't want it to start with a dot or operator or for there to be multiple operators
     else if (inputs.length===1 && operator.includes(input)===false){
       inputs.push(input);
       
     }
     else if (operators1.includes(inputs[inputs.length-1])===false)){
       inputs.push(input);
     }
     //check to add a number
     else if(nums.includes(Number(input))){
       inputs.push(input);
       update();
     }
   }
   
   //update is the function we call when we want our code to update to the most current value like when we push 9 and 9 comes up.
   function update(){
     //makes totalString equal to inputs array but join it so that its a string
     totalString = inputs.join("")
     $("#numbers").html(totalString);
   }
   
   function getTotal(){
     totalString = inputs.join("");
     $("#numbers").html(eval(totalString));
     
   }
   
   //Do something when you click the button
   $("button").on("click", function(){
     if(this.id==="clearAll") {
       
       inputs=[""];
       //call update to most current value which is empty
       update();
       
      
     }
      
     //if this id is equal to "clearOne" remove last number.
    else if (this.id==="clearOne"){
      inputs.pop();
      update();
     
    }
     
     else if (this.id==="equals"){
       getTotal();
     }
     
     //adding values
     else{
       if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", "-1")===-1){
         getValue(this.id);
     }
       
     else{
       
     }
   });
   
   
  update()         

                    

                     <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="style/main.js"></script>