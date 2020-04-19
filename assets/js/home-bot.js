
function ajaxAns(str) {
  if (str.length == 0) {
      document.getElementById("txtHint").innerHTML = "";
      alert("22222");
      return;
  } else {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              alert("1111");
              return this.responseText;
          }
      };
      xmlhttp.open("GET", "ajaxAns.php?q=" + str, true);
      xmlhttp.send();
  }
}

var homeBot = BotUI('home-demo');

// homeBot.message.add({
//   content: 'Hello there!'
// }).then(function () {
//   return homeBot.message.add({
//     delay: 1500,
//     content: 'Wanna see a demo of what BotUI can do?'
//   });
// }).then(function () {
//   return homeBot.action.button({
//     delay: 1000,
//     action: [{
//       text: 'Sure!',
//       value: 'sure'
//     }, {
//       text: 'Just skip to end 😒',
//       value: 'skip'
//     }]
//   });
// }).then(function (res) {
//   ga_record('btn_click', res.value);
//   if(res.value == 'sure') {
//     goStatus();
//   }
//   if(res.value == 'skip') {
//     end();
//   }
// });

// var goStatus = function () {
//   homeBot.message.add({
//     delay: 1000,
//     content: "Awesome! You can show buttons like the one you pressed."
//   }).then(function () {
//     return homeBot.message.add({
//       delay: 1000,
//       content: 'You can ask for text input like ..'
//     });
//   }).then(function () {
//     return homeBot.message.add({
//       delay: 1200,
//       content: 'Whats your name?'
//     });
//   }).then(function () {
//     return homeBot.action.text({
//       delay: 800,
//       action: {
//         /*value: 'Your name',*/
//         placeholder: 'Enter Details'
//       }
//     });
//   }).then(function (res) {
//     return homeBot.message.bot({
//       delay: 500,
//       content: res.value + ' is a nice name!'
//     });
//   }).then(function (res) {
//     return homeBot.message.bot({
//       delay: 1400,
//       content: 'You can also embed something from 3rd party'
//     });
//   }).then(function (res) {
//     return homeBot.message.add({
//       delay: 1200,
//       /*type: 'embed', */
//       content: 'Welcome!!!'
// 	  /*content: 'https://giphy.com/embed/v1PSPwbLIrata'*/
//     });
//   }).then(function (res) {
//     return homeBot.message.bot({
//       delay: 1400,
//       content: 'There is a lot more you can do with UI'
//     });
//   }).then(function (res) {
//     return homeBot.message.bot({
//       delay: 1000,
//       content: 'Now go on, explore the docs and build yourself a bot.'
//     });
//   }).then(function () {
//     return homeBot.action.text({
//       delay: 800,
//       action: {
//         /*value: 'Your name',*/
//         placeholder: 'Enter Details',
		
//       }
//     });
//   });
// };




homeBot.message.add({
  content: 'Hello there!'
}).then(function () {
  return homeBot.message.add({
    delay: 1500,
    content: 'Wanna see a demo of what BotUI can do?'
  });
}).then(function () {
       return homeBot.action.text({
         delay: 800,
         action: {
           /*value: 'Your name',*/
           placeholder: 'Type your message here'
         }
       });
   }).then(function (res) {
    // $.ajax({
    //   context: this,
    //   type: "POST",
    //   url: "ajaxAns.php",
    //   data: { 'name': "dgdf"},
    //   success: function (data) {
    //      console.log("suc",data);
    //   }
    // });
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "ajaxAns.php?q=sadad", true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          console.log(this.responseText);
           // return this.responseText;
        }
    };
    
    xmlhttp.send();

        //  return homeBot.message.add({
        //    delay: 500,
        //    content: res.value + ' is a nice name!'
        //  });
   }).then(function () {
        return homeBot.action.text({
           delay: 800,
           action: {
             /*value: 'Your name',*/
             placeholder: 'Type your message here',
        
           }
         });
       });

var end = function () {
  ga_record('message', 'end');
  homeBot.message.add({
    delay: 1000,
    content: 'Chat Ended...'
  });
}; 

var ga_record = function(type, action) {
  if(ga) {
    ga('send', {
      hitType: 'event',
      eventCategory: type,
      eventAction: action
    });
  }
}
