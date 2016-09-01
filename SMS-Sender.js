/*
السلام علكم ورحمة الله بركاته

الدرس عباره عن كود لإرسال رسائل SMS إلى اي رقم بالعالم تريده

اللغة المستخدمة في عمل البرنامج هي النود جي اس

المتطلبات:
https://www.twilio.com - تركيب تويليو
npm install prompt - تركيب برومبت
NodeJS - تركيب النود جي اس

المتطلبات الاختيارية:
معرفه مسبقة بلغة النود جي اس


*/


var config = require('./SMSconfig');
var prompt = require('prompt');
var client = require('twilio')(config.asid, config.autkn);

prompt.get(['msg'], function (err, result) {
  if (err) { return onErr(err); }
	  var msg = result.msg;
     var ToNumber = "+9730000 0000";
     var RegNumber = "+1234 56789"
		client.messages.create({
			to: ToNumber,
			from: RegNumber,
			body: msg,
		}, function(err, message) {
      console.log("\r\n"+"////////-DEVELOPERBH-/////");
			console.log("'sid': "+message.sid+"\r\n"+"'date_created': "+message.date_created
      +"\r\n"+"'to': "+message.to+"\r\n"+"'error_code': "+message.error_code+"\r\n"+"'error_message': "+message.error_message+"\r\n"+"'price': "+message.price
      +"\r\n"+"'status': "+message.status);
      if(message.error_code = 'null'){
        console.log("'success': "+"the message has been sent successfuly");
      }
      console.log("////////-DEVELOPERBH-/////"+"\r\n");
		});
});
