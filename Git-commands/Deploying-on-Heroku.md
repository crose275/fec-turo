# Steps to deploying on Heroku
**STEP 1)** login to Heroku account
**Step 2)** Download Heroku onto your computer (Google how to)
**Step 3)** Verify you have it downloaded by typing "heroku -v" to get the latest version you have
**Step 4)** Make sure the port in the file with your routes is set to "process.env.PORT || 127.0.0.1"
**Step 5)** Create a file called "Procfile" -this will be used to help Heroku know what file to look give the port number to 
**Step 6)** In Procfile type "web: node 'filename with the routes'"
**Step 7)** on Heroku click top right corner in dashboard to create app (give app name and create the app)
**Step 8)** In VS code terminal make sure you are cd into the proper folder you want to deploy
**Step 9)** In terminal type "heroku login" - this will send you to a page to click login
**Step 10)** In terminal type "git init" 
**Step 11)** In terminal type "heroku git:remote -a 'name of repo'"
**Step 12)** In terminal type "git add ."
**Step 13)** In terminal type "git commit -am "message to commit"
**Step 14)** In terminal type "git push heroku main" (sometimes it requires you to type master but main should work)