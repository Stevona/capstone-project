# Git Flow Design
This design will allow teams to develop within their teams as they wish, while giving DevSecOps the chance to review and merge code according to their protocols.

### High Level
Each team (front-end, back-end, database, and testing/documentation) will have their own forked version of the EICPCohort 5 Capstone Project that the team leads are responsible for.
Team leads are also responsible for initating the move from team branches to the global testing branch.
DevSecOps is responsible for initiating the move from the global testing branch to the main production branch.

## Visualize Code Structure!
Visual Branch Strategy   | Visual of Forked Repo with Main Repo | Workflow
:-------------------------:|:-------------------------:|:-------------------------:|
<img src='https://user-images.githubusercontent.com/99675872/159479635-57c800f1-c8a4-474a-8a1a-7310df6a93eb.png'> | <img src='https://user-images.githubusercontent.com/99675872/159557862-963ac176-728a-4e71-9d2d-646d41b671be.png'> | <img src='https://user-images.githubusercontent.com/99675872/159557844-e88a7eba-5704-4f76-9e59-ab985927a7e6.png'> |

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
1. Clone your team's forked repository
    * Front End `git clone https://github.com/Stevona/capstone-project.git`
    * Back End `git clone https://github.com/BaltejToorTJX/capstone-project.git`
    * Database `git clone https://github.com/jacobwhiteman/capstone-project.git`
    * Testing and Doc `git clone https://github.com/mariaringes/capstone-project.git`
2. Add upstream
    `git remote add upstream https://github.com/EICPCohort5/capstone-project`
3. Pull most recent from upstream
4. Checkout to personal branch if team decides to utilize the approach of individual branches.
5. Develop
7. Add and Commit Files
    `git commit -m "Message for commit"`
8. Merge with main if having previously worked om a branch
    `git checkout main`
    `git merge branchname`
9. Push to remote main branch of the forked repository
    `git push`
10. Create a pull request from `main` on your team's forked repo to `teambranch` on EICPCohort5/capstone-project



## Team Lead Tasks for Deployment
1. Review and close the pull request made from the team's forked repo to the team branch of the original repo
2. Create a pull request on the EICPCohort5/capstone-project from <teambranch> to <testingbranch>
