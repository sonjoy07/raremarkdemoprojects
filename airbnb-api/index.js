const express = require('express')
var path = require('path')
const bodyParser = require("body-parser");
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express()
const port = 4000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by')
path.projectPath = __dirname + '/'
var db = require(path.projectPath + 'connection.js')

app.post('/registration', (req, res) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = req.body.username;
    var password = req.body.password;
    var usertype = req.body.usertype;
    if (username && password) {
        const passwordHash = bcrypt.hashSync(req.body.password, 10);
        let query = `INSERT into users (first_name,last_name,username,password,usertype) values ('${firstname}','${lastname}','${username}','${passwordHash}',${usertype})`;

        db.simple.query(query, (err, result) => {
            if (err) {
                console.log('error:', err)
                // resolve(false);
            }
            else
                res.send(true);
            //     resolve(result)
        })
    }
})
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        let checkQuer = `select * from users where username = '${username}'`;
        db.simple.query(checkQuer, (err, result) => {
            if (result.length > 0 ) {
                let passwordHash = result[0].password;
                if (bcrypt.compareSync(req.body.password, passwordHash)) {
                    console.log('sonjoy',result[0].password)
                   return res.send({
                        status:true,
                        result: result[0]
                    });
                } else {
                    return res.send({
                        status:false,
                        result: {}
                    });
                }
            }else{
                return res.send({
                    status:false,
                    result: {}
                });
            }

        })
    }else{
        return res.send({
            status:false,
            result: {}
        });
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})