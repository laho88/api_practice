
### MongoDB Commands
### Levi Aho

# 1. Create a database called 'my_first_db'.

> use my_first_db

> db

>>> my_first_db

# 2. Create students collection.

> db.createCollection("students")


# 3. Each document you insert into this collection should have the following format: 

({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

> db.students.insertMany([
>    {name: "Aasd", home_state: "Ca", lucky_number: 22, birthday: {month: 2, day: 3, year: 1988}},
>    {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}},
>    {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}},
>    {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}},
>    {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}
> ])

 # 4. Create 5 students with the appropriate info.


# 5. Get all students.

> db.students.find({})

	{ "_id" : ObjectId("60041f2b4b399110f3802b16"), "name" : "Yop", "home_state" : "Coinstarr", "lucky_number" : 24, "birthday" : { "month" : 10, "day" : 9, "year" : 1982 } }
	{ "_id" : ObjectId("60041f5e4b399110f3802b17"), "name" : "Smees", "home_state" : "Skyrim", "lucky_number" : 33, "birthday" : { "month" : 4, "day" : 16, "year" : 1988 } }
	{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 } }
	{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 } }
	{ "_id" : ObjectId("60041fef4b399110f3802b1a"), "name" : "Husalu", "home_state" : "MIddleton", "lucky_number" : 11, "birthday" : { "month" : 5, "day" : 2, "year" : 2018 } }

# 6. Retrieve all students who are from Coinstarr (San Jose Dojo) or Clouds (Seattle Dojo).

> db.students.find({home_state: {$in: ["Coinstarr", "Clouds"]}})

> { "_id" : ObjectId("60041f2b4b399110f3802b16"), "name" : "Yop", "home_state" : "Coinstarr", "lucky_number" : 24, "birthday" : { "month" : 10, "day" : 9, "year" : 1982 } }
> { "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 } }

# 7. Get all students whose lucky number is greater than 3

> db.students.find({luck_number: {$gt: 3}})

> { "_id" : ObjectId("60041f2b4b399110f3802b16"), "name" : "Yop", "home_state" : "Coinstarr", "lucky_number" : 24, "birthday" : { "month" : 10, "day" : 9, "year" : 1982 } }
> { "_id" : ObjectId("60041f5e4b399110f3802b17"), "name" : "Smees", "home_state" : "Skyrim", "lucky_number" : 33, "birthday" : { "month" : 4, "day" : 16, "year" : 1988 } }
> { "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 } }
> { "_id" : ObjectId("60041fef4b399110f3802b1a"), "name" : "Husalu", "home_state" : "MIddleton", "lucky_number" : 11, "birthday" : { "month" : 5, "day" : 2, "year" : 2018 } }

# 8. Get all students whose lucky number is less than or equal to 10

> db.students.find({lucky_number: {$lte: 10}})
> { "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 } }
> { "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 } }

# 9. Get all students whose lucky number is between 1 and 9 (inclusive)

> db.students.find({lucky_number: {$gt: 1, $lt: 10}})

> { "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 } }
> { "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 } }

# 10. Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

> db.students.updateMany({}, {$set: {interests:["coding", "brunch", "MonogDB"]}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 4 }

> db.students.find({})
{ "_id" : ObjectId("60041f2b4b399110f3802b16"), "name" : "Yop", "home_state" : "Coinstarr", "lucky_number" : 24, "birthday" : { "month" : 10, "day" : 9, "year" : 1982 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041f5e4b399110f3802b17"), "name" : "Smees", "home_state" : "Skyrim", "lucky_number" : 33, "birthday" : { "month" : 4, "day" : 16, "year" : 1988 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041fef4b399110f3802b1a"), "name" : "Husalu", "home_state" : "MIddleton", "lucky_number" : 11, "birthday" : { "month" : 5, "day" : 2, "year" : 2018 }, "interests" : [ "coding", "brunch", "MonogDB" ] }

# 11. Add some unique interests for each particular student into each of their interest arrays.
 
> db.students.update({_id : ObjectId("60041f2b4b399110f3802b16")}, {$push:{interests: "python"}})

{ "_id" : ObjectId("60041f2b4b399110f3802b16"), "name" : "Yop", "home_state" : "Coinstarr", "lucky_number" : 24, "birthday" : { "month" : 10, "day" : 9, "year" : 1982 }, "interests" : [ "coding", "brunch", "MonogDB", "python" ] }


# 12. Add the interest 'taxes' into someone's interest array.

> db.students.update({"_id" : ObjectId("60041fef4b399110f3802b1a")}, {$push: {interests: "taxes"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

# 13. Remove the 'taxes' interest you just added.

> db.students.update({ _id : ObjectId("60041fef4b399110f3802b1a")}, {$pop:{ interests: (1)}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.students.find({ _id : ObjectId("60041fef4b399110f3802b1a")})
{ "_id" : ObjectId("60041fef4b399110f3802b1a"), "name" : "Husalu", "home_state" : "MIddleton", "lucky_number" : 11, "birthday" : { "month" : 5, "day" : 2, "year" : 2018 }, "interests" : [ "coding", "brunch", "MonogDB" ] }

# 14. Remove all students who are from Skyrim.

> db.students.remove({home_state: "Skyrim"},)
WriteResult({ "nRemoved" : 1 })

> db.students.find()
{ "_id" : ObjectId("60041f2b4b399110f3802b16"), "name" : "Yop", "home_state" : "Coinstarr", "lucky_number" : 24, "birthday" : { "month" : 10, "day" : 9, "year" : 1982 }, "interests" : [ "coding", "brunch", "MonogDB", "python" ] }
{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041fef4b399110f3802b1a"), "name" : "Husalu", "home_state" : "MIddleton", "lucky_number" : 11, "birthday" : { "month" : 5, "day" : 2, "year" : 2018 }, "interests" : [ "coding", "brunch", "MonogDB" ] }

# 15. Remove a student by name.

> db.students.remove({name: "Husalu"},)
WriteResult({ "nRemoved" : 1 })

> db.students.find()
{ "_id" : ObjectId("60041f2b4b399110f3802b16"), "name" : "Yop", "home_state" : "Coinstarr", "lucky_number" : 24, "birthday" : { "month" : 10, "day" : 9, "year" : 1982 }, "interests" : [ "coding", "brunch", "MonogDB", "python" ] }
{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 }, "interests" : [ "coding", "brunch", "MonogDB" ] }


# 16. Remove a student whose lucky number is greater than 5 (JUST ONE)
> db.students.remove({lucky_number: {$gt: 5}})
WriteResult({ "nRemoved" : 1 })

> db.students.find({})
{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 }, "interests" : [ "coding", "brunch", "MonogDB" ] }
{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 }, "interests" : [ "coding", "brunch", "MonogDB" ] }

# 17. Add a field to each student collection called 'number_of_belts' and set it to 0.

db.students.updateMany({}, {$set: {number_of_belts: 0}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 1 }

> db.students.find({})
{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 }, "interests" : [ "coding", "brunch", "MonogDB" ], "number_of_belts" : 0 }
{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 }, "interests" : [ "coding", "brunch", "MonogDB" ], "number_of_belts" : 0 }

# 18. Increment this field by 1 for all students in Clouds(Seattle Dojo).

{ $inc: { number_of_belts: 1, <field2>: <amount2>, ... } }

db.students.update({home_state: "Clouds"}, { $inc: {number_of_belts: 1}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.students.find({})
{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 }, "interests" : [ "coding", "brunch", "MonogDB" ], "number_of_belts" : 1 }
{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 }, "interests" : [ "coding", "brunch", "MonogDB" ], "number_of_belts" : 0 }

# 19. Rename the 'number_of_belts' field to 'belts_earned'

> db.students.updateMany({}, {$rename: {"number_of_belts":"belts_earned"}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }

> db.students.find({})
{ "_id" : ObjectId("60041fa64b399110f3802b18"), "name" : "Mr Winters", "home_state" : "Clouds", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 2020 }, "interests" : [ "coding", "brunch", "MonogDB" ], "belts_earned" : 1 }
{ "_id" : ObjectId("60041fcc4b399110f3802b19"), "name" : "Pebo", "home_state" : "Trouble", "lucky_number" : 5, "birthday" : { "month" : 2, "day" : 2, "year" : 2016 }, "interests" : [ "coding", "brunch", "MonogDB" ], "belts_earned" : 0 }


# 20. Remove the 'lucky_number' field.

> db.students.updateMany({}, {$unset: {"lucky_number":""}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.students.find({}).pretty()
{
        "_id" : ObjectId("60041fa64b399110f3802b18"),
        "name" : "Mr Winters",
        "home_state" : "Clouds",
        "birthday" : {
                "month" : 2,
                "day" : 2,
                "year" : 2020
        },
        "interests" : [
                "coding",
                "brunch",
                "MonogDB"
        ],
        "belts_earned" : 1
}
{
        "_id" : ObjectId("60041fcc4b399110f3802b19"),
        "name" : "Pebo",
        "home_state" : "Trouble",
        "birthday" : {
                "month" : 2,
                "day" : 2,
                "year" : 2016
        },
        "interests" : [
                "coding",
                "brunch",
                "MonogDB"
        ],
        "belts_earned" : 0
}

# 21. Add a 'updated_on' field, and set the value as the current date.

> db.students.updateMany({}, {$currentDate: {"updated_on": true}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }

> db.students.find({}).pretty()
{
        "_id" : ObjectId("60041fa64b399110f3802b18"),
        "name" : "Mr Winters",
        "home_state" : "Clouds",
        "birthday" : {
                "month" : 2,
                "day" : 2,
                "year" : 2020
        },
        "interests" : [
                "coding",
                "brunch",
                "MonogDB"
        ],
        "belts_earned" : 1,
        "updated_on" : ISODate("2021-01-17T16:20:57.598Z")
}
{
        "_id" : ObjectId("60041fcc4b399110f3802b19"),
        "name" : "Pebo",
        "home_state" : "Trouble",
        "birthday" : {
                "month" : 2,
                "day" : 2,
                "year" : 2016
        },
        "interests" : [
                "coding",
                "brunch",
                "MonogDB"
        ],
        "belts_earned" : 0,
        "updated_on" : ISODate("2021-01-17T16:20:57.598Z")
}




