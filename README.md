# javascript-challenge
<h3> UFO Level 1 </h3>
For the first part of the challenge, I created a JavaScript app that allowed a user to filter UFO data by date. First, I selected the appropriate button, form and the table body, then created event handlers for the button and form. I wrote three functions: 
<br>
<ol>
  <li>Function <strong>runFilter</strong> takes the date inserted into the form and retrieves the data. I added an if condition so that a the user would be notified if the date entered did not exist in our UFO data. If the user entered a valid date, the forEach method would take the apopropriate data from the array and display it in the table.</li>
  <li>The <strong>resetFxn</strong> function will remove any text entered into the form field and return the form field to its original state.</li>
  <li>The <strong>clearResults</strong> function clears the table of its contents if the user has done searches that yielded results in the table. I liked that you could build a table of data representing several dates by appending one search result onto the previous result in the table, but I also wanted a way to clear the results and start from a blank slate.</li>
</ol>
<br>
<h3> UFO Level 2 </h3>
This part of the challenge built off level 1. To enable the user to filter with multiple parameters, I added the extra list items for the other search fields in the HTML, then wrote if conditional statements to the filtering process. The filter for each form field would be applied in succession (and only if the user had entered a value for that field) until all filters were applied. The result would then be inserted into the table using the same forEach code in level 1. 
