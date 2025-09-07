# camper 🚙
An open-source canvassing platform. Submission for HouHack 2025.

# Intro
One of the most effective ways to reach people for campaigns is to approach them door-to-door. However, there aren't many options to keep track of canvassing efforts, and the ones that do exist can be unaffordable for campaigns with tighter budgets. Camper offers all you need to track your canvassing progress.

# Tech Stack
- Database: Postgres + [Prisma(for ORM)](https://www.prisma.io/)
- API Development: [Hono.js](https://hono.dev/)
- Frontend: Next.js
- Runtime: [Bun](https://bun.com/)
  
# What I Worked on during the Hackathon
## Frontend Mockups
When I was coming up with the scope of this project, I wanted to create a functioning MVP for just the organizer view. However, I got caught up with API development and learning Hono, so all I got to do was these two mockups in v0. Camper is intended to be the  organizers' and volunteers' main medium to interact with the database. I also wanted to create a companion app for volunteers to use while they are on the trail. 
| Organizer Dashboard 	| Voter Record Uploader 	|
|---------------------	|-----------------------	|
|  <img width="1849" height="908" alt="image" src="https://github.com/user-attachments/assets/840efc3d-1da3-40b7-ad5e-b1f1d51ebcd8" />|  <img width="1850" height="908" alt="image" src="https://github.com/user-attachments/assets/36c63523-8353-4570-a714-43c0f7d84ea0" />|

## Database Design
I spent a little too much time trying to figure this out because I kept coming up with more use cases. This isn't even the final version, this design will constantly change as I continue to work on this project.
<img width="5824" height="3328" alt="camper_2025-09-07T15_48_29 892Z" src="https://github.com/user-attachments/assets/69ff6bc3-2436-411a-bf58-53cdc165f941" />

## API Development
I spent the majority of my time working on the API and getting accustomed to Hono, an API development framework. I created the middleware for the API to interact with the database and work on CRUD operations for some endpoints. As of now, there is no authentication yet. I focused on making the CRUD operations functional before I moved to working on authentication.
All the code for my API: [here](https://github.com/afoshiok/camper/tree/main/api)

# What's next?
