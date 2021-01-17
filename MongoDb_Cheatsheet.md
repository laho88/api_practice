
# --------- CRUD  Stubs ---------


# ----------- Create ------------ 


```javascript 

// Insert ---- Single Record:
db.<COLLECTION_NAME>.insert({<field_one>: "STRING", <field_two>: NUMBER, <field_three>: {<obj_key_one>: "STRING", <obj_key_two>: NUMBER }})


// Insert ---- Many Records:

db.<COLLLECTION_NAME>.insertMany([
    {<Field_One>: "STRING", 
    <Field_Two>: NUMBER, 
    <Field_Three>: {
        <obj_key_one>: "STRING", 
        <obj_key_two>: NUMBER, 
        <obj_key_three>: "STRING" 
        }
    },
    {<Field_One>: "STRING", 
    <Field_Two>: NUMBER, 
    <Field_Three>: {
        <obj_key_one>: "STRING", 
        <obj_key_two>: NUMBER, 
        <obj_key_three>: "STRING" 
        }
    },
    {<Field_One>: "STRING", 
    <Field_Two>: NUMBER, 
    <Field_Three>: {
        <obj_key_one>: "STRING", 
        <obj_key_two>: NUMBER, 
        <obj_key_three>: "STRING" 
        }
    },

    )

```

# ----------- READ ------------

```javascript
// GET ------ Single Record (By-Id):

db.<COLLECTION_NAME>.find({_id: ObjectId("<_id_string>")})

// GET ----- Multiple Records:

db.<COLLECTION_NAME>.find({}) || db.<COLLECTION_NAME>.find()

// GET ----- By field and value

db.<COLLECTION_NAME>.find({<FIELD_NAME>: "<VALUE_TO_QUERY>"})

// GET --- record using range, min x, max y

db.<COLLECTION_NAME>.find({<Target_Field>: {$gt: X, $lt: Y}})

```

# ------------ UPDATE ----------------


```javascript
// POST ------ Add a new Field to a Single Record:

db.<COLLECTION_NAME>.update({_id: ObjectId("<_id string>")}, {$set: {<New_Field_Name>: VALUE}})

// POST ----- Multiple Records (Renaming a field):

db.<COLLECTION_NAME>.updateMany({}, {$rename: {"<current_field_name>": "<new_field_name>"}})

db.___.method({}, {$_: {"_": "_"}})

```

# --------- DELETE ------------------

```javascript

// Delete by key/value:

db.<COLLECTION_NAME>.remove({field_name: "Value"},)

// Delete -----by id:

db.<COLLECTION_NAME>.remove({_id: ObjectId("_id string")}

```

