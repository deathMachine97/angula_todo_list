const mysql = require('mysql');
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "angular_api"
});


function read_all(sql){
	con.connect(function(err) {
		if (err) throw err;
		con.query(sql,(err,result)=>{
			if(err)	console.log(err);
			if(result){
				for(r of result){
					const col_name = Object.keys(r)[0];
					console.log(r[col_name]);
				}
			}
		})
	});
}

read_all("show tables");
