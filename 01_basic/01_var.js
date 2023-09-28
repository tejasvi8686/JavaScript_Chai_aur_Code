const accountId = 144533
let accountEmail = "tejasviraj8686@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 

accountEmail = "hc@hc.com"
accountPassword = "ghazipur"
accountCity = "varanasi india"

console.log(accountId);

/*
prefer not to use var
beacause of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
