 var table = document.getElementById('table');
  function searchMovie() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function searchLanguage() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputLang");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
fetch("movielist.json").then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	//console.log(data);


  data.forEach(obj => {
    //console.log(obj)
                {
                
              var tr = document.createElement('tr');
              var nbsp = document.createTextNode(' ');
              var a = document.createElement('a');
              var href = document.createAttribute("href");
              var a2 = document.createElement('a');
              var href2 = document.createAttribute("href");
              var td1 = document.createElement('td');
              var td2 = document.createElement('td');
              var td3 = document.createElement('td');
              var td4 = document.createElement('td');

              var text1 = document.createTextNode(obj.title);
              var text2 = document.createTextNode(obj.language);
              var livestream_link = document.createTextNode("Live Stream");
              var telegram_link = document.createTextNode("|Telegram");
              href.value=obj.stream_link
              href2.value=obj.telegram_link

              td1.appendChild(text1);
                td2.appendChild(text2);
                a.setAttributeNode(href);
                a.appendChild(livestream_link)
                td3.appendChild(a);

                  a2.setAttributeNode(href2)
                  a2.appendChild(telegram_link);
                  td3.appendChild(a2)



                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                

            table.appendChild(tr);
            
           
       

        };})
    

  // foreach(data, function(idx, item){
  // console.log(item.title)
  // })
  
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});