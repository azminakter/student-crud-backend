# Student CRUD Backend

This is a simple Student CRUD Backend project made using Node.js, Express.js and MongoDB.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose

## Student Information

In this project, I used these fields for a student:

* Name
* Email
* Age
* Department

## API Routes

### 1. Create Student

**POST**

```text
/students
```

This API is used to add a new student.

Example:

```json
{
  "name": "Rahim",
  "email": "rahim@gmail.com",
  "age": 21,
  "department": "CSE"
}
```

### 2. Get All Students

**GET**

```text
/students
```

This API is used to see all students.

### 3. Get One Student

**GET**

```text
/students/:id
```

This API is used to get the information of one student by using the student ID.

### 4. Update Student

**PUT**

```text
/students/:id
```

This API is used to update the information of an existing student.

### 5. Delete Student

**DELETE**

```text
/students/:id
```

This API is used to delete a student.

## How to Run the Project

First, install the required packages:

```bash
npm install
```

Then create a `.env` file and add my MongoDB connection string.

Example:

```text
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Then start the server:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

## Database

I used MongoDB for storing the student information.

Database name:

```text
studentDB
```

Collection name:

```text
students
```

## Testing

I tested the APIs using Postman.

I tested:

* Create student
* Get all students
* Get one student
* Update student
* Delete student
