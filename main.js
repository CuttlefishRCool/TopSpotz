
$(document).ready(function() {
    // write your code here
    var list = document.getElementById("tbl").getElementsByTagName('tbody')[0];
 $.getJSON('data.json', function(data) {
    // data is now your array of objects!
    
    // Loop through all objects
    data.forEach(function(spot) {
     const tr = document.createElement("tr");
    Object.values(spot).forEach(item => {
    const td = document.createElement("td");
        if(Array.isArray(item)){
         const a = document.createElement("a");
        a.href = "https://www.google.com/maps?q=" + item;        // Use link value as URL
        a.textContent = item; // Show link as text
        a.target = "_blank";  // Open in new tab (optional)
        td.appendChild(a);
        tr.appendChild(td); 
        } else {
        td.textContent = item;
        tr.appendChild(td);
        }
     });
     list.appendChild(tr);
    });
    
  });
});