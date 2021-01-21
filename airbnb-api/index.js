const express = require('express')
var path = require('path')
const bodyParser = require("body-parser");
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const uuidv4 = require('uuid');
const fileUpload = require("express-fileupload");
const app = express()
const port = 4000

app.use(cors());
// app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by')
path.projectPath = __dirname + '/'
var db = require(path.projectPath + 'connection.js')

const DIR = './public/';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).single('file')
// var upload = multer({
//     storage: storage,
//     // fileFilter: (req, file, cb) => {
//     //     console.log(file);
//     //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//     //         cb(null, true);
//     //     } else {
//     //         cb(null, false);
//     //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     //     }
//     // }
// });

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
app.post('/postAdded',  (req, res) => {
    console.log('req.body',req)
    // const reqFiles = [];
    // const url = req.protocol + '://' + req.get('host')
    // if (req.files != undefined) {
    //     for (var i = 0; i < req.files.length; i++) {
    //         reqFiles.push(url + '/public/' + req.files[i].photos)
    //     }
    // }
    var image = '';
    upload(req, res, function (err) {
        console.log('req.files', req.file);
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        // console.log('req.files', req.file);
        image = req.file;

//    return res.status(200).send(req.file)

 })
    var title = req.body.title;
    var country = req.body.country;
    var city = req.body.city;
    var type = req.body.type;
    var price = req.body.price;
    var guest = req.body.guest;
    var bedNumber = req.body.bedNumber;
    var description = req.body.description;
    var bed = req.body.bed;
    // console.log(req.body)
    if (title && price && country) {
        let query = `INSERT into posts (title,country,price,guest,bedNumber,description,bed,city,image,type) values ('${title}','${country}','${price}','${guest}',${bedNumber},'${description}','${bed}','${city}','${image}','${type}')`;
        db.simple.query(query, (err, result) => {
            console.log('asdfasdfasd', result);
            if (result.affectedRows > 0) {
                // if (req.files != undefined) {
                //     for (var i = 0; i < req.files.length; i++) {
                //         let query = `INSERT into post_images (post_id,images_name) values ('${result.insertId}','${req.files[i].photos}'`;

                //         db.simple.query(query, (err, result) => { })
                //     }
                // }
                return res.send({
                    status: true,
                    result: result.insertId
                });
            } else {
                return res.send({
                    status: false,
                    result: {}
                });
            }

        })
    } else {
        return res.send({
            status: false,
            result: {}
        });
    }
})
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        let checkQuer = `select * from users where username = '${username}'`;
        db.simple.query(checkQuer, (err, result) => {
            if (result.length > 0) {
                let passwordHash = result[0].password;
                if (bcrypt.compareSync(req.body.password, passwordHash)) {
                    console.log('sonjoy', result[0].password)
                    return res.send({
                        status: true,
                        result: result[0]
                    });
                } else {
                    return res.send({
                        status: false,
                        result: {}
                    });
                }
            } else {
                return res.send({
                    status: false,
                    result: {}
                });
            }

        })
    } else {
        return res.send({
            status: false,
            result: {}
        });
    }
})
app.post('/getUser', (req, res) => {
    var user_id = req.body.user_id;
    // var password = req.body.password;
    if (user_id) {
        let checkQuer = `select * from users where id = '${user_id}'`;
        db.simple.query(checkQuer, (err, result) => {
            if (result.length > 0) {
                return res.send({
                    status: true,
                    result: result[0]
                });
            } else {
                return res.send({
                    status: false,
                    result: {}
                });
            }

        })
    } else {
        return res.send({
            status: false,
            result: {}
        });
    }
})
app.post('/getAllProperty', (req, res) => {
    var user_id = req.body.user_id;
    // var password = req.body.password;
    // if (user_id) {
        let checkQuer = `select posts.*,users.first_name as username,users.last_name,avatar,GROUP_CONCAT(images_name) as images from posts left join users on users.id = posts.user_id LEFT JOIN post_images ON post_images.post_id = posts.id group by posts.id order by posts.id desc LIMIT 3 OFFSET 0`;
        db.simple.query(checkQuer, (err, result) => {
            if (result.length > 0) {
                console.log('result',result)
                // return res.send(result)
                return res.send({
                    status: true,
                    data: result
                });
            } else {
                return res.send({
                    status: false,
                    data: {}
                });
            }

        })
    // } else {
    //     return res.send({
    //         status: false,
    //         result: {}
    //     });
    // }
})
app.post('/getPropertyById', (req, res) => {
    var post_id = req.body.post_id;
    // var password = req.body.password;
    // if (user_id) {
        let checkQuer = `select posts.*,users.first_name as username,users.last_name,avatar,GROUP_CONCAT(images_name) as images from posts left join users on users.id = posts.user_id LEFT JOIN post_images ON post_images.post_id = posts.id where posts.id = ${post_id} group by posts.id`;
        db.simple.query(checkQuer, (err, result) => {
            if (result.length > 0) {
                console.log('result',result)
                // return res.send(result[0])
                return res.send({
                    status: true,
                    data: result[0]
                });
            } else {
                return res.send({
                    status: false,
                    data: {}
                });
            }

        })
    // } else {
    //     return res.send({
    //         status: false,
    //         result: {}
    //     });
    // }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})