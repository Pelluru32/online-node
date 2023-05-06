var profiles = ["guest", "user", "admin","owner"];
// console.log( process.argv );
var param = process.argv[2];
console.log( "you requested for" ,(param < profiles.length ? profiles[param] : profiles[0])+".html" );

// profiles[process.argv[2] < profiles.length ? process.argv[2] : 0]
