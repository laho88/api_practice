const express = require("express");
const app = express();
const port = 8000;

//************SETUP EXAMPLES************************************
/*
this is your first API endpoint: 
remember to add /api in the browser to see your message.
You can view all the information associated with your request:
    console.log(request);

res = response
req = request

app.get("/api", (request, response) => {
    response.json({message: "Hello everybody!"});
});


app.post("/api", (req, res) => {
    res.json({message: "You have Posted"})
})
*/

//************* DUMMY TEST DATA *************** */
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];



// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

    // **********GET ALL *****************

app.get("/api/users", (req, res) => {
    res.json( users );
});

// ************** GET REQUEST ---- USER BY ID ****************

// any data we are pasing via url is indicated by a ":"
// req.params will give you access to the :id value:

app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);

    //assume this id is the index of the users array, use it to return one user:
    res.json(users[req.params.id]);
})


//*************** FORM DATA ---- CLIENT TO DB ************************ */

app.post("/api/users", (req, res) => {
    //req.body will contain the data coming from postman or from React
    console.log(req.body);
    //Push it into the users array for now, then db later.
    users.push(req.body);

    //A response is always required for POST/PUT/DEL: either a success or error:
    res.json({status: "Ok"})
})


//*********** PUT REQUEST --- UPDATING USER ************************* */

app.put("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        const id = req.params.id;
        // assuming this id is the index of the users array we can replace the user like so
        users[id] = req.body;
        // we always need to respond with something
        res.json( { status: "ok" } );
    });

//*********** DELETE REQUEST --- REMOVING RECORD ***************/

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});


//this is one of the first things we include to test the server response but always keep it at the bottom of the file.
app.listen(port, () => 
    console.log(`App is listening on port ${port}`)
)


