function generate(){
    var quotes = {
        "- Jules Renald": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "- Albert Einsten": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "- Pierce Brown": '“Man cannot be freed by the same injustice that enslaved it.”',
        "-Madeline Miller": '“Bury us, and mark our names above. Let us be free.”',
        "-Aaron Luisten": '“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”'

    }

    var authors = Object.keys(quotes)

   var author = authors[Math.floor(Math.random() * authors.length)]

   var quote = quotes[author];

   document.getElementById("quote").innerHTML=quote;
   document.getElementById("author").innerHTML=author;


   var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexcode = '';

    for(var i=0;i<6;i++){ 
    var random_index = Math.floor(Math.random()*hex_numbers.length);
    
    hexcode += hex_numbers[random_index]
      }
    //   document.getElementById("hex-code").innerHTML=hexcode;
      document.getElementsByTagName("body")[0].style.background="#" + hexcode;
}

