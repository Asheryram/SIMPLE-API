import express from 'express'
import helmet from 'helmet'

import userRoutes from './user.routes.js'
import mainRoutes from './main.routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(helmet())

app.use('/v1', mainRoutes)
app.use('/v1/user', userRoutes)

app.listen (port, ()=>{
    console.log(`Server started on http://localhost:${port} \n 
    Available routes to : \n  `)

    const endpoints = {
        "Create a new user": `http://localhost:${port}/v1/user/`,
        "Read a single user data of id i": `http://localhost:${port}/v1/user/i`,
        "Read all users": `http://localhost:${port}/v1/user/all`,
        "Update user of id i": `http://localhost:${port}/v1/user/i`,
        "Delete user of id i": `http://localhost:${port}/v1/user/i`,
      };
       
      // Define ANSI escape codes for color
const greenColor = "\x1b[32m"; // Green color
const blueColor = "\x1b[34m";  // Blue color
const resetColor = "\x1b[0m";   // Reset color

// Print table header
console.log(`${greenColor}Name${resetColor}\t\t\t\t\t${blueColor}Value${resetColor}`);

// Loop through the endpoints and print them in a tabular form with colors
for (const [name, value] of Object.entries(endpoints)) {
  console.log(`${greenColor}${name}${resetColor}\t\t${blueColor}${value}${resetColor}`);
}
})