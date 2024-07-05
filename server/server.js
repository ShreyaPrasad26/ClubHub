const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: "root",
    password: "root",   
    database: "members",
    port: 3306
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/venue', (req, res) => {
    const sql = 'INSERT INTO event (`club`,`event_name`, `start_date`, `start_time`, `end_date`, `end_time`, `venue`) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [
        req.body.club,
        req.body.event_name,
        req.body.start_date,
        req.body.start_time,
        req.body.end_date,
        req.body.end_time,
        req.body.venue
    ]
    console.log('Event booked')
    db.query(sql, values, (err, data) => {
        console.log("Entering loop")
        if (err) {
            console.error("Error:",err);
            return res.json("Error");
        }
        console.log(data)
        return res.json(data);
    })
})

app.post('/signup/student', (req, res) => {
    const sql = "INSERT INTO student (`fname`, `lname`, `srn`, `semester`, `section`, `cgpa`, `email`, `phno`, `password`) VALUES (?,?,?,?,?,?,?,?,?)";
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.srn,
        req.body.semester,
        req.body.section,
        req.body.cgpa,
        req.body.email, 
        req.body.phno,
        req.body.password
    ]
    console.log('Student post')
    db.query(sql, values, (err, data) => {
        console.log("Entering loop")
        if (err) {
            console.error("Error:",err);
            return res.json("Error");
        }
        console.log(data)
        return res.json(data);
    })
})

app.get('/admin/:email', (req, res) => {
    const email = req.params.email;
  
    const sql = `
      SELECT institute, web, phno, email 
      FROM admin 
      WHERE email = ?;
    `;
  
    db.query(sql, [email], (err, result) => {
      if (err) {
        console.error('Error fetching admin profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Admin profile fetched successfully');
        res.status(200).json(result);
      }
    });
  });

app.post('/student/:email', (req, res) => {
    const { srn, email, phno, cgpa, semester, section } = req.body;
  
    const sql = `
      UPDATE student
      SET email = ?, phno = ?, cgpa = ?, semester = ?, section = ?
      WHERE email = ?;
    `;
  
    const values = [email, phno, cgpa, semester, section, srn];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error updating student profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Student profile updated successfully');
        res.status(200).json({ message: 'Student profile updated successfully' });
      }
    });
  });
  
  // API endpoint to add club membership
  app.post('/clubmembers/:email', (req, res) => {
    const { email, club, designation} = req.body;
  
    const sql = `
      INSERT INTO membership (email, club, designation)
      VALUES (?, ?, ?);
    `;
    
    const values = [email, club, designation];
    console.log(values)

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error adding club member:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Club member added successfully');
        res.status(200).json({ message: 'Club member added successfully' });
      }
    });
  });

app.post('/signup/admin', (req, res) => {
    const sql = "INSERT INTO admin (`institute`, `email`, `password`) VALUES (?,?,?)";
    const values = [
        req.body.institute,
        req.body.email, 
        req.body.password
    ]
    
    db.query(sql, values, (err, data) => {
        console.log("Entering loop")
        if (err) {
            console.error("Error:",err);
            return res.json("Error");
        }
        console.log(data)
        return res.json(data);
    })
})

app.post('/signup/club', (req, res) => {
    const sql = "INSERT INTO club (`club`, `domain`,`bio`,`email`, `password`) VALUES (?,?,?,?,?)";
    const values = [
        req.body.club,
        req.body.domain,
        req.body.bio,
        req.body.email, 
        req.body.password
    ]
    
    db.query(sql, values, (err, data) => {
        console.log("Entering loop")
        if (err) {
            console.error("Error:",err);
            return res.json("Error");
        }
        console.log(data)
        return res.json(data);
    })
})
/*
app.post('/club/:email', (req, res) => {
    const { club, email, domain, bio } = req.body;
  
    const sql = `
      UPDATE student
      SET email = ?, phno = ?, cgpa = ?, semester = ?, section = ?
      WHERE email = ?;
    `;
  
    const values = [email, phno, cgpa, semester, section, srn];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error updating student profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Student profile updated successfully');
        res.status(200).json({ message: 'Student profile updated successfully' });
      }
    });
  });
*/

app.get('/head/:email', (req, res) => {
    const email = req.params.email

    const query = `
    SELECT name, srn 
    FROM club 
    JOIN head ON 
    club.clubid = head.clubid AND club.email=?
    `;
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})

app.get('/club/:email', (req, res) => {
    const { email } = req.params;

    const sql = `
        SELECT club, email, bio, domain
        FROM club
        WHERE email = ?;
    `;

    const values = [email];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error fetching club data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Club data fetched successfully');
            res.status(200).json(result); // Assuming you want to send the data back to the client
        }
    });
});

/*
app.get('/club/:email', (req, res) => {
    const { club, email, domain, bio } = req.body;
  
    const sql = `
    SELECT club, email, bio, domain
    FROM club
    WHERE email = ?;
    `;
  
    const values = [club, email, domain, bio];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error updating student profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Student profile updated successfully');
        res.status(200).json({ message: 'Student profile updated successfully' });
      }
    });
  });
*/
app.get('/event/:club', (req, res) => {
    const clubEvent = req.params.club

    const query = `
    SELECT club, event.event_name, start_date, start_time, end_date, end_time, venue 
    FROM event 
    JOIN venue ON 
    venue.event_name = event.event_name
    WHERE club =?
    `;
    db.query(query, [clubEvent], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})

//club profile when viewed by anybody 
app.get('/head/:club', (req, res) => {
    const club = req.params.club

    const query = `
    SELECT club, domain, bio, name, srn 
    FROM club 
    JOIN head ON 
    club.clubid = head.clubid AND club.club=?
    `;
    db.query(query, [club], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})
//club profile when viewed by anybody 

app.get('/:club', (req, res) => {  
    const club = req.params.club

    const query = `
    SELECT club, domain, bio, name, srn 
    FROM club 
    JOIN head ON club.clubid = head.clubid 
    WHERE club.club = ?;
    `

    db.query(query, [club], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})


//redirection to student profile on logging in 
app.get('/student/:email', (req, res) => {
    const email = req.params.email

    const query = `
    SELECT *
    FROM student 
    WHERE 
    email = ?
    `;
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})

app.get('/membership/:club', (req, res) => {
    const club = req.params.club

    const query = `
    SELECT club, designation, email
    FROM membership 
    WHERE club = ?;
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})

app.get('/members/student', (req, res) => {
    const club = req.params.club

    const query = `
    SELECT *
    FROM student 
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})

app.get('/members/admin', (req, res) => {
    const club = req.params.club

    const query = `
    SELECT *
    FROM admin 
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})

app.post('/eventRegistration', (req, res) => {
    const sql = "INSERT INTO registrations (`srn`, `event_name`) VALUES (?,?)";
    const values = [
        req.body.srn,
        req.body.event_name
    ]
    console.log('Student post')
    db.query(sql, values, (err, data) => {
        console.log("Entering loop")
        if (err) {
            console.error("Error:",err);
            return res.json("Error");
        }
        console.log(data)
        return res.json(data);
    })
})

app.get('/eventRegistration', (req, res) => {

    const query = `
    SELECT *
    FROM registrations 
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
})

/*
app.get('/eventarchive/dummy', (req, res) => {
    const sql = `SELECT * FROM reg_info`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});
*/

app.get('/eventarchive/dummy/:club', (req, res) => {
    const { club } = req.params;

    // Use parameters in the SQL query to filter data
    const sql = `SELECT * FROM reg_info WHERE club = ?`;
    const values = [club];

    db.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

app.get('/eventarchive/clubsList', (req, res) => {
    const sql = 'SELECT club FROM club'; // Replace 'club' with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});


//works for login 
app.post('/login', (req, res) => {
    const sql = `
        SELECT user_type, email, password
        FROM (
            SELECT 'student' AS user_type, email, password
            FROM student
            UNION
            SELECT 'club' AS user_type, email, password
            FROM club
            UNION
            SELECT 'admin' AS user_type, email, password
            FROM admin
        ) AS subquery
        WHERE email = ? AND password = ?
    `;
    const values = [req.body.email, req.body.password]
    
    db.query(sql, values, (err, data) => {
        console.log("Entering loop")
        if (err) {
            console.error("Error:",err);
            return res.json({ success: false, message: "Error" });
        }

        console.log("Query result:", data);

        if (data.length > 0){
            const user_type = data[0].user_type;
            console.log("success");
            return res.json({ success: true, user_type });
        }else{
            console.log("Failure");
            return res.json({ success: false, message: "Invalid email or password" });
        }
    })
})

/*
app.put('/login/forgot', (req, res) => {  //Needs to be fixed
    const sql1 = `
    UPDATE club
    SET password = ?
    WHERE email = ?;
    `;

    const values1 = [
        req.body.password,
        req.body.email
    ];

    const sql2 = `
    UPDATE admin
    SET password = ?
    WHERE email = ?;
    `;

    const values2 = [
        req.body.password,
        req.body.email
    ];

    const sql3 = `
    UPDATE student
    SET password = ?
    WHERE email = ?;
    `;
    
    const values3 = [
        req.body.password,
        req.body.email
    ];
*/
/*
    const promises = [
        db.query(sql1,values1),
        db.query(sql2,values2),
        db.query(sql3,values3)
    ];

    Promise.all(promises)
        .then((results) => {
            console.log('Results:', results);

            const affectedRows = results.reduce((acc, result) => acc + result.affectedRows, 0);

            if (affectedRows > 0) {
                console.log("Password updated");
                return res.json({ success: true, user_type });
            } else {
                console.log("No updates");
                return res.json({ success: false, message: "Invalid email or password" });
            }
        })
        .catch((error) => {
            // Handle errors
            console.error('Error:', error);
            return res.json({ success: false, message: "Error" });
        });
*/
   
/*
    db.query(sql1, sql2, sql3, values1, values2, values3, (err, data) => {
        console.log("Entering loop")
        if (err) {
            console.error("Error:",err);
            return res.json({ success: false, message: "Error" });
        }

        const affectedRows = results.reduce((acc, result) => acc + result.affectedRows, 0);

        if (affectedRows > 0){
            console.log("Password updated");
            return res.json({ success: true, user_type });
        }else{
            console.log("No updates");
            return res.json({ success: false, message: "Invalid email or password" });
        }
    })
})
*/

app.listen(8081, () => {
    console.log("listening");
})