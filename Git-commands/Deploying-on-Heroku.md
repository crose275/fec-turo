# Steps to deploying on Heroku
### **STEP 1)** login to Heroku account
### **Step 2)** Download Heroku onto your computer (Google how to)
### **Step 3)** Verify you have it downloaded by typing "heroku -v" to get the latest version you have
### **Step 4)** Make sure the port in the file with your routes is set to "process.env.PORT || 127.0.0.1"
### **Step 5)** Create a file called "Procfile" -this will be used to help Heroku know what file to look give the port number to 
### **Step 6)** In Procfile type "web: node 'filename with the routes'"
### **Step 7)** on Heroku click top right corner in dashboard to create app (give app name and create the app)
### **Step 8)** In VS code terminal make sure you are cd into the proper folder you want to deploy
### **Step 9)** In terminal type "heroku login" - this will send you to a page to click login
### **Step 10)** In terminal type "git init" 
### **Step 11)** In terminal type "heroku git:remote -a 'name of repo'"
### **Step 12)** In terminal type "git add ."
### **Step 13)** In terminal type "git commit -am "message to commit"
### **Step 14)** In terminal type "git push heroku main" (sometimes it requires you to type master but main should work)

# Deployment of database(for RESTful)
### **STEP 1)** After completing all the above steps for your backend 
### **Step 2)**  Open the backend project that you have created
### **Step 3)** Go to resources and add heroku postgres by searching it in add-ons(cost $5/month)
### **Step 4)** Click on Heroku Postgres
### **Step 5)** Go to settings and click view Credentials 
### **Step 6)** Copy down Host, Database, User, Password, and Port 
### **Step 7)** In your file with the routes paste the copied things above (example: 
	code for routes file/migration file/seed file
const pool = new Pool({
   user: 'oxubpjhkxcbbwh' || 'postgres',
   host: 'ec2-3-208-74-199.compute-1.amazonaws.com'||'127.0.0.1',
   database: 'db2a924gf5p4sd' || 'Turo_webpage',
   password: 'e07dcf9f202d697e727fa8e907dbad13523c5c0386de42f3bbee94920f09fd70' || 'password',
   port: 5432,
   connectionString: process.env.DATABASE_URL,
   ssl: {
       rejectUnauthorized: false
   }
});


pool.connect((err, client, release) => {
   if (err) {
     return console.error('Error acquiring client', err.stack)
   }
   console.log(process.env.DATABASE_URL)
   console.log('Connected to database')
 })



- The connectionString connects to the URL that’s in heroku 
- The SSL is for encryption purposes and is needed for successfully connecting to heroku
### **Step 8)** Add, Commit, and push these updates to heroku (<git add .>, <git commit -m ‘message’>, <git push heroku main>)
### **Step 9)** In terminal type <heroku run bash> this allows you to run commands to the remote files in Heroku
### **Step 10)** Cd into your migration file and node that file 
### **Step 11)** Cd into your seed file and node that file
### **Step 12)** Cd to your file with the routes and nodemon that file (if your routes, migration, and seed file are coded correctly you will see the number of tables created in the heroku postgres page
     - In order to update the information you will just need to add commit and push up the updates to heroku
- How to delete the database in heroku:
Heroku pg:reset –confirm <your app name>
