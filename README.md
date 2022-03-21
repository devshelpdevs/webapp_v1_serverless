# webapp_v1_serverless
A basic server-less version 1 of the devshelpdevs web application

### To contribute to this project

1. Fork this repository
2. Open your command terminal
3. Type this following commands one after the other

    ```bash
    git clone https://github.com/devshelpdevs/webapp_v1_serverless.git

    cd webapp_v1_serverless

    yarn
    
    ```
4. You will notice you are on the __(main)__ branch, do not start coding immediately.
	First __create a new branch__ out of the __main__ branch using the following commands


    > __NOTE *__ These are conventions for naming branches are
    - For new features use => "feature/your_username/feature-name"
    - For bug fix use => "bugfix/your_username/bug-name"
    - For hotfix use => "hotfix/your_username/hotfix-name"

    
	```bash
	git checkout -b "your_new_branch_name"
	
	```

5. Then you can start coding.

    <!-- - The controllers directory is where you write the business logic e.g authentication logic e.t.c
    - The routers directory is where you assign a endpoint for it. -->


6. When done, always first pull the latest changes and updates from the repository using ` git pull origin dev` .
7. Stage your all changes using `git add .`.
8. Commit your changes using `git commit -m "your commit message`.
9. Push your code to github using `git push -u origin "your_new_branch_name"`.
10. Make a pull request on github.

### To run this project

RUN: `yarn run dev`

Then visit http://localhost:3000 to see it live.