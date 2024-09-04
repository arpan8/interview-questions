# Mongo DB Interview questions

### 1. What is MongoDB?
MongoDB is a widely used, open-source NoSQL database designed for high performance, scalability, and flexibility. It stores data in flexible, JSON-like documents, allowing for a dynamic schema that can easily adapt to changing requirements.

### 2. What is a NoSQL database, and how does it differ from SQL databases?
NoSQL is ideal for flexibility and scalability, while RDBMS is best for structured data and transactional integrity.
1. Data Model
    - NoSQL (e.g., MongoDB): Uses a flexible, document-oriented model (JSON-like), allowing for schema-less design and easy evolution.
    - ies on a fixed schema with table-based structures, ideal for structured data and defined relationships.
2. Scalability
    - NoSQL: Supports horizontal scaling (sharding), making it easier to scale across multiple servers.
    - RDBMS: Typically uses vertical scaling, which involves adding resources to a single server.
3. Flexibility
    - NoSQL: Agile and quick to adapt, allowing for rapid development and schema changes.
    - RDBMS: Requires upfront schema design, making it less flexible during development.
4. Transactions
    - NoSQL: Generally follows eventual consistency with some support for multi-document transactions.
    - RDBMS: Strong ACID compliance ensures reliable transactions and consistency.
5. Use Cases
    - NoSQL: Best for big data, real-time analytics, and applications with evolving data models.
    - RDBMS: Suited for transactional applications, structured data storage, and environments requiring strong consistency.

### 3. What is a document in MongoDB?

A document is a data record similar to a row in a relational database but more flexible. It is a JSON-like structure (stored in BSON format) that can contain key-value pairs, arrays, and nested objects, allowing for complex data to be stored in a single, self-contained entity.

### 4. What is a collection in MongoDB?

A collection is a group of documents, similar to a table in a relational database. Collections store related documents and can have documents with different structures, as MongoDB does not enforce a strict schema.

### 5. How does MongoDB store data?

MongoDB stores data in a binary JSON format called BSON (Binary JSON). Data is organized into collections, where each record is stored as a document. These documents are flexible, allowing for various data types, nested structures, and arrays within a single document. This schema-less approach enables dynamic and scalable data storage.

### 6. What are the primary types of indexes in MongoDB?

The primary types of indexes in MongoDB are:

1. Single Field Index: Indexes a single field in a document, improving the speed of queries on that specific field.
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, index: true } // Single field index on 'name'
});

const User = mongoose.model('User', userSchema);
```
2. Compound Index: Indexes multiple fields within a document, useful for queries that involve multiple fields.
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Compound index on 'name' and 'age'
userSchema.index({ name: 1, age: -1 });

const User = mongoose.model('User', userSchema);
```
3. Multikey Index: Used to index array fields, where each element of the array is indexed.
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  hobbies: [String] // Array field for which we need a multikey index
});

// Multikey index on 'hobbies'
userSchema.index({ hobbies: 1 });

const User = mongoose.model('User', userSchema);
```
4. Text Index: Supports text search queries by indexing the contents of string fields.
```javascript
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

// Text index on 'title' and 'content'
articleSchema.index({ title: 'text', content: 'text' });

const Article = mongoose.model('Article', articleSchema);
```
5. Geospatial Index: Enables querying of geospatial data, such as location-based queries.
```javascript
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String },
    coordinates: [Number]
  }
});

// Ensure 'type' is 'Point'
locationSchema.index({ location: '2dsphere' });

const Location = mongoose.model('Location', locationSchema);
```
6. Hashed Index: Indexes the hash of a field’s value, commonly used for sharding.
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true }
});

// Hashed index on 'email' (for sharding)
userSchema.index({ email: 'hashed' });

const User = mongoose.model('User', userSchema);
```
Each type serves different query and performance needs, optimizing data retrieval in MongoDB.

### 7. How do you perform CRUD operations in MongoDB?

- **Create**
```javascript
const { MongoClient } = require('mongodb');

async function createDocument() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Insert one document
    const result = await collection.insertOne({ name: 'John Doe', age: 30 });
    console.log('Document inserted:', result.insertedId);
  } finally {
    await client.close();
  }
}

createDocument();
```
- **Read**
```javascript
const { MongoClient } = require('mongodb');

async function readDocuments() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Find one document
    const document = await collection.findOne({ name: 'John Doe' });
    console.log('Document found:', document);

    // Find all documents
    const documents = await collection.find({}).toArray();
    console.log('All documents:', documents);
  } finally {
    await client.close();
  }
}

readDocuments();
```
- **Update**
```javascript
const { MongoClient } = require('mongodb');

async function updateDocument() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Update one document
    const result = await collection.updateOne(
      { name: 'John Doe' },
      { $set: { age: 31 } }
    );
    console.log('Documents matched:', result.matchedCount);
    console.log('Documents modified:', result.modifiedCount);

    // Update multiple documents
    const resultMany = await collection.updateMany(
      { age: { $gt: 30 } },
      { $set: { status: 'Senior' } }
    );
    console.log('Documents matched:', resultMany.matchedCount);
    console.log('Documents modified:', resultMany.modifiedCount);
  } finally {
    await client.close();
  }
}

updateDocument();
```
- **Delete**
```javascript
const { MongoClient } = require('mongodb');

async function deleteDocument() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Delete one document
    const result = await collection.deleteOne({ name: 'John Doe' });
    console.log('Documents deleted:', result.deletedCount);

    // Delete multiple documents
    const resultMany = await collection.deleteMany({ age: { $lt: 30 } });
    console.log('Documents deleted:', resultMany.deletedCount);
  } finally {
    await client.close();
  }
}

deleteDocument();
```
### 8. What is the purpose of the ObjectId in MongoDB?

The ObjectId in MongoDB is a unique, 12-byte identifier used as the default primary key for documents. It ensures each document is uniquely identified and includes a timestamp, machine identifier, and process-specific counter for uniqueness and efficient indexing.

### 9. What is the difference between find() and findOne() in MongoDB?

- find():

    - Returns a cursor to multiple documents that match the query.
    - Can be used to iterate over or retrieve a list of documents.
    -  ```javascript
        async function findDocuments() {
            const users = await User.find({ age: { $gt: 30 } });
            console.log('Users found:', users);
        }
    ```

- findOne():
    - Returns a single document that matches the query.
    - Retrieves only the first document that matches the query, or null if no match is found.
    -  ```javascript
        async function findOneDocument() {
            const user = await User.findOne({ name: 'John Doe' });
            console.log('User found:', user);
        }
    ```
### 10. What is the difference between update() and findOneAndUpdate?

- update(): ***In Mongoose, update() has been deprecated in favor of updateOne(), updateMany().***
    - Purpose: Updates documents based on a query.
    - Return Value: Returns an update result, but does not return the updated document(s) by default.
    - Usage: Primarily used for bulk updates or updates where you do not need to retrieve the updated document.
    - ```javascript
        const result = await User.updateMany(
        { age: { $lt: 30 } },
        { $set: { status: 'Junior' } }
        );
        console.log('Update result:', result);
    ```
- findOneAndUpdate()
    - Purpose: Finds a single document and updates it.
    - Return Value: Returns the document after it has been updated, which can be controlled using options **(e.g., new: true to return the updated document)**.
    - Usage: Useful when you need to retrieve the updated document immediately.
    - ```javascript
        const updatedUser = await User.findOneAndUpdate(
        { name: 'John Doe' },
        { $set: { age: 31 } },
        { new: true } // Return the updated document
        );
        console.log('Updated document:', updatedUser);
    ```
### 11. What is the difference between drop and remove function?

- drop(): Completely removes a collection from the database.
- remove(): Removes documents from a collection based on a specified query.

### 12. How do you insert a document into a MongoDB collection?

- save(): Inserts a single document.
    - ```javascript
        async function insertDocument() {
            const user = new User({ name: 'John Doe', age: 30 });
            await user.save();
        }
    ```
- insertMany(): Inserts multiple documents.
    - ```javascript
        async function insertDocuments() {
            await User.insertMany([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 28 }]);
        }
    ```
