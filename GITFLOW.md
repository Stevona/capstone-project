# Git Flow Design
This design will allow teams to develop within their teams as they wish.
Team leads are responsible for initating the move from team branches to the global testing branch.
DevSecOps is responsible for initiating the move from the global testing branch to the main production branch.

## Visualize Code Structure
Add Images Here

## Roles
Each member of the EICPCohort5 will fall into one of the following categories:
1. DevSecOps Team Member
2. Team Lead
3. Developer

## Responsibilities
Below lists the branches of EICPCohort5/capstone-project and who is responsible for each branch.

| Branch | Owner |
| ------ | ------ |
| main | DevSecOps |
| testing | DevSecOps |
| front-end | Steven Portillo |
| back-end | Baltej Toor |
| database | Jacob Whiteman |
| documentation | Maria Ringes |

## Developer Tasks for Development
1. Fork the repo from `https://github.com/EICPCohort5/capstone-project` into your personal GitHub account
2. Clone the forked repository from your personal GitHub account
    `git clone https://github.com/username/capstone-project`
3. Add upstream
    `git remote add upstream https://github.com/EICPCohort5/capstone-project`
4. Pull most recent from upstream
5. Checkout to personal branch
    `git checkout -b "firstname-lastname"`
6. Develop
7. Add Files to Commit
    `git add .`
8. Commit
    `git commit -m "Message for commit"`
9. Merge with main
    `git checkout main`
    `git merge branchname`
10. Push main branch
    `git push`
11. Create a pull request from <main> on your personal forked repo (username/capstone-project) to <teambranch> on EICPCohort5/capstone-project



## Team Lead Tasks for Deployment
1. Review and close the pull request made from the developer's forked repo to the team branch of the original repo
2. Create a pull request on the EICPCohort5/capstone-project from <teambranch> to <testingbranch>