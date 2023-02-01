let unhidableMail = "robin_singh@example.com"
let endIndexText = unhidableMail.indexOf("@") - 1
let hideMail = unhidableMail.slice(0, endIndexText / 2) + "..." + unhidableMail.slice(unhidableMail.indexOf("@"), unhidableMail.length)
console.log(hideMail)