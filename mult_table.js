   
/* File: index.htm
 * GUI Assignment: HW4_PART1: Validation Plugin
 * Nicholas Aswani, UMass Lowell Computer Science, nicholas_aswani@student.uml.ed
 * copyright (c) 2021 by Nicholas. All rights reserved. May be freely copied or excerpted for 
 * educational purposes with credit to the author
 */

// jquery validation of the form inputs (max_row_value, min_row_value, max_col_value and min_col_value)
$(document).ready(function() {
   $("#form").validate({
   rules: {
      max_row_value: {
         required: true,
         number: true,
         max: 50,
         min: -50
      },

      max_col_value: {
         required: true,
         number: true,
         max: 50,
         min: -50         
      },
      
      min_row_value: {
         required: true,
         number: true,
         max: 50,
         min: -50
      },
      
      min_col_value: {
         required: true,
         number: true,
         max: 50,
         min: -50
      }

   },
   messages: {
      max_row_value: {
         required: "Please enter a valid number",
         number: "Please enter only a whole number",
         max: "The largest digit that can be entered is 50",
         min: "The smallest digit that can be entered is -50"
      },
      
      max_col_value: {
         required: "Please enter a valid number",
         number: "Please enter only a whole number",
         max: "The largest digit that can be entered is 50",
         min: "The smallest digit that can be entered is -50"
      },
      
      min_row_value: {
         required: "Please enter a valid number",
         number: "Please enter a whole number between -50 and 0",
         min: "The smallest digit that can be entered is -50",
         max: "The largest digit that can be entered is 50"
      },
      
      min_col_value: {
         required: "Please enter a valid number",
         number: "Please enter a whole number between -50 and 0",
         min: "The smallest digit that can be entered is -50",
         max: "The largest digit that can be entered is 50"
      }
   },
   submitHandler: function() {  // submit handler that calls the function that creates the table after validation of inputs
      createTable();
      return false;
   }
     });
});
    function createTable() {       //obtain text inputs and convert them to numbers
      var max_row = document.getElementById("max_row_value").valueAsNumber;
      var max_col = document.getElementById("max_col_value").valueAsNumber;
      var min_row = document.getElementById("min_row_value").valueAsNumber;
      var min_col = document.getElementById("min_col_value").valueAsNumber;
    
   //   /* the following code creates the multiplication table and renders it via the html table */
       var table = document.getElementById("mult_table");   //holds the html table 
       var output=" ";  // to append html data
       for(var i = min_row; i<=max_row; i=i+1) {            //loop that creates rows 
           output+="<tr>";                                
        for(var j=min_col; j<=max_col;j=j+1) {         // the columns creation loop 
            if(i==min_row && j==min_col)              //for the first cell(row[0]column[0])
               output+="<th>&times;</th>";        //puts the x symbol in the first corner cell
            else {
            if(i==min_row || j== min_col)         // sets the header data; the first row and first column
               output +="<th>"+i*j+"</th>";
            else
               output +="<td>"+i*j+"</td>"; //sets the data for the rest of the columns and rows
            }
        }
        output+="</tr>";
     }
     //document.getElementById("mult_table").innerHTML = output;
      table.innerHTML=output; //sets the the Html content of the table element
      return false;
    }
 