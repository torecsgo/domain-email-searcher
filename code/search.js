const HunterSDK = require('hunterio');

const figlet = require('figlet');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

figlet('Domain Sercher By Tore!', function (err, data) {
    console.log(data);
});
setTimeout(() => {
 rl.question("Add your API KEY: Find her here (http://hunter.io) ", (apikey) => {
     rl.question("Add a Domain: ", (domain) => {
         const KEY = apikey;
         const hunter = new HunterSDK(KEY);
        hunter.domainSearch({
            domain: domain
        }, function(err, body) {
            if (err) {
                console.log(err);
            } else {
				//console.log(body)
                body.data.emails.forEach(email => {
					console.log(email.value);
				});
            }
        });
     });
 });
}, 500)