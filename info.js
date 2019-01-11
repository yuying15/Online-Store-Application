      function formValidation(frm) {
	 var allAlpha = true;
	 var passAlpha1 = false;
         var passAlpha2 = false;
         var inputValue = frm.FirstName.value.trim();
	 var inputValue1 = frm.Last_Name.value.trim();
	 var inputValue2 = frm.age.value.trim();
         var inputValue3 = frm.username.value.trim();
	 var inputValue4 = frm.password.value;
	 var numberString = "0123456789";
	 var upper = false;
	 var numbers = false;
	 var messages = "";
				 
	//validate First Name
         if(inputValue[0]<"A"||inputValue[0]>"Z")
           {		
		messages += "<p> * First Name: Must start with a capital alphabet.</p>";
	        allAlpha = false; 		
	   }
         else
	   { 
		inputValue =inputValue.toUpperCase();
						
	      	for(var i=0; i<inputValue.length; i++) 
		 {
                      if(inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") 
			{
				allAlpha = false;
			}
		 }
			
	      if(!allAlpha)
	        {
		      messages += "<p> * First Name: Please enter first name with all alphabet letters.</p>";
	        }
	   }
				
	 //validate Last Name
	  if(inputValue1[0]<"A"||inputValue1[0]>"Z")
	    {		
		messages += "<p> * Last Name: Must start with a capital alphabet.</p>";
		allAlpha = false; 		
	    }
         else
	    { 
		inputValue1 =inputValue1.toUpperCase();
						
	      	for(var i=0; i<inputValue1.length; i++) 
		 {
                      if(inputValue1.charAt(i) < "A" || inputValue1.charAt(i) > "Z") 
		         {
			    allAlpha = false;
		         }
	         }
			
	    if(!allAlpha)
	         {
		    messages += "<p> * Last Name: Please enter Last name with all alphabet letters.</p>";
	         }
	    }
			
	 //validate age
 	  if(inputValue2 < 18||inputValue2 > 60)
	    {
		 messages += "<p> * Age: Age must be in between 18-60.</p>";
		 allAlpha = false;
	    }
				   
         //validate user name
	  if((inputValue3[0]>="A" && inputValue3[0]<="Z")||(inputValue3[0]>='a'&&inputValue[0]<='z'))
	     {		
		 passAlpha1=true;			    	 
	     }
	  else
	     {				
		 messages +="<p> * User Name: must start with a letter.</p>";
		 allAlpha = false;
	     }
       
	   if(inputValue3.length<6)
	     {
		  messages += "<p> * User Name: Please enter at least 6 characters.</p>";				    
		  allAlpha = false;
	     }
			   
	  //validate password
	   if(inputValue4.length!=6)
	     {
	          messages += "<p> * Password: Password must be 6 characters long.</p>";
		  allAlpha=false;
	     }
				
           if(numberString.indexOf(inputValue4[0])>=0)
	     {
		  messages += "<p> * Password: Password must start with a character.</p>";
		  allAlpha=false;
	     }
	   else
	     {
		  for(var i=0; i<inputValue4.length; i++)
			{					 
		              if(inputValue4[i]>='A'&& inputValue4[i]<='Z')
				  {
					upper = true;
				  }
			}
			 
		  if(!upper)
			{
			      messages +="<p> * Password: Password must have at least 1 uppercase.</p>";
			      allAlpha=false;
			}
						
		  for(var i=1; i<inputValue4.length; i++)
			{
			      if(inputValue4[i]>="0" && inputValue4[i]<="9")
			           {
			                numbers = true;
			           }
		        }
			 
		  if(!numbers)
			{
			      messages +="<p> * Password: Password must have at least 1 digit.</p>";
			      allAlpha=false;				
		        }
		  	 		 
		  if(document.getElementById('password').value!=document.getElementById('confirmPassword').value)
			{
			      messages +="<p> * Password: Not Matching.</p>"
			      allAlpha=false;
		        }
	      }
			   	
     	      if(!allAlpha)
                 {
	        	showErrors(messages);
	        	return false;
                 }

	      alert("Success!");
	      return true;
       }

      //show error messages
      function showErrors(messages) {
	  document.querySelector('#errors').innerHTML = messages;
       }
								
      //clear all error messages
    	function clearError(){
	  document.querySelector('#errors').innerHTML = "";
       }
			 

