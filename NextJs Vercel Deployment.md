#IMPORTANT  DEPLOYING & RE-DEPLOYING TO VERCEL

When you deploy or redeploy to Vercel you are given three public DOMAINS like the example below.

#VERCEL DOMAINS EXAMPLE
https://promptfriends.vercel.app 
https://promptfriends-git-main-thepeacedude.vercel.app
https://promptfriends-813x56b8e-thepeacedude.vercel.app

#USE YOUR TOP DOMAIN FOR Vercel.env and in Google Console API's
promptfriends.vercel.app (This is the one you want to use in your environment variables .env file)

****Redeployent Warning!!! Everytime you redeploy your app the URL (https://promptfriends-813x56b8e-thepeacedude.vercel.app) like in the second example above changes.  So always use the top level (https://promptfriends.vercel.app) as any redeployments will work perfectly.

#GOOGLE CONSOLE
You want to use the top level domain in your Google Console apis/crendentials
https://console.cloud.google.com/apis/credentials

#VERCEL(APP) ENVIRONMENT VARIABLES
GOOGLE_id=YourGoogleid

GOOGLE_CLIENT_SECRET=YourGoogleClientSecret

MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster1.g6yhqwc.mongodb.net/?retryWrites=true&w=majority

NEXTAUTH_URL=Your.vercel.app (example =https://promptfriends.vercel.app)  

NEXTAUTH_URL-INTERNAL=Your.vercel.app (example =https://promptfriends.vercel.app)  

NEXTAUTH_SECRET=Your (Must complete this description)

#HOW TO GET YOUR NEXTAUTH_SECRET= key
Windows users.  

Visit this site https://www.cryptool.org/en/cto/openssl
Type>openssl rand -base64 32

Mac users: 
Type this command> brew install openssl

## DEPLOYING THE APP ON VERCEL

#HERE'S A STEP-BY-STEP GUIDE TO DEPLOYING THE PROJECT ON VERCEL
1. Deploy the Project: Before deploying, make sure to add your .env file to .gitignore so it doesn't get pushed to production. 

Then, create a new GitHub repository and push your code to it. After that, you can deploy your project using Vercel, a platform that is built with Next.js in mind and makes the process of deploying Next.js applications simple and easy.

2. Create a GitHub Repository: Go to GitHub, click the plus button at the top, and select "New repository". Choose a name for your repository, make it public, and click "Create Repository".

3. Initialize Git in Your Project: Open the terminal in your code editor, stop the application from running, and clear the terminal. Run the following commands:
   1. git init
   2. git add .
   3. git commit -m "first commit"

4. Push Your Code to GitHub: Follow the commands provided by GitHub to push your code to the repository you just created. The commands should look something like this:
   1. git branch -M main
   2. git remote add origin [your repository URL]
   3. git push -u origin main

5. Modify the README: Modify the README file in your GitHub repository to provide information about your project. You can add a screenshot and a description of what you built.

6. Deploy Your Project with Vercel: Go to Vercel's website and follow their instructions to deploy your project. Vercel is a platform that makes it easy to deploy Next.js applications and provides benefits such as speed, SEO, a global edge network, and first-party monitoring.

7. Create a .env file for Production: Since you've added your .env file to .gitignore, it won't be pushed to your GitHub repository or to Vercel when you deploy your app. Therefore, you'll need to create a new .env file specifically for production. This file should contain all the environment variables your app needs to run in a production environment.

8. Set Up Your Project on Vercel: Go to Vercel's website and sign up for an account if you haven't already. Once you're signed in, click on the "New Project" button, then import the GitHub repository you created earlier. Vercel will automatically detect that your app is a Next.js app and will set up the build settings for you.

9. Add Environment Variables on Vercel: In the Vercel dashboard for your project, go to the "Settings" tab, then to the "Environment Variables" section. Here, add all the environment variables from your production .env file. Vercel will use these environment variables when building and running your app.

10. Deploy Your App: Once you've set up your environment variables, go back to the "Overview" tab in your Vercel project dashboard and click on the "Deploy" button. Vercel will build your app and deploy it to a live URL. Once the deployment is finished, you can click on the "Visit" button to see your live app.

11. Update Your GitHub Repository: Now that your app is live, you can update the README file in your GitHub repository with a link to the live app. You might also want to add more information about the app, such as its features and how to use it.









------------------------------------------------------------------------------------