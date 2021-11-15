# Cipher

###  GOOGLE DOCS meets CODECADEMY meets ZOOM


# Background and Overview 
Have you ever been working with someone on a coding project, and noticed that your computer is getting very hot?
Cipher is here to help you focus on your work without worrying about your computer crashing!
Cipher provides an environment for developers to collaborate with one another on coding projects, while video streaming.
Cipher will allow you to: 
  - organize your projects in one centralized sidebar
  - add colleagues to projects and give them the ability to annotate or edit your work
  - collaborate with colleagues/potential employees instantly with video streaming and automatic screen sharing


# Functionality & MVP 

1. User Authentication
2. Collaborative text area, where all users can contribute to the same document with live updates
    - Ability to save progress on document, and return to later (CRUD feature)
      - 'owner' has password for document and can share invites with other users
3. Provide practice problems - organized by language, or by topic (trees, recursion, etc.)
4. Ability to add friends and create groups (CRUD feature)
5. Live video stream


## Bonus Feature
6. Possible messaging feature: ratings, responses
7. Embedded IDE and ability to compile code


# Wireframes


# Technologies & Technical Challenges 

#### Backend: MongoDB/Express and Websocket


#### Frontend: React/Node.js 



# Group Members & Work Breakdown 

#### Madeline Wilson (Backend), Rebecca Foster (Flex), Pasan Dharmasena (Frontend), Maria Vaghani (Team Lead)

### Day 1 
  - Implement state shape and user auth (Maddie)
  - Create wireframe and work on splash page (Pasan)
  - Create basic routes (Rebecca)
      - (GET#api/documents/user/:user_id, GET#api/problems, GET#api/friends/user/:user_id)
  - Collect information on websockets and implement it (Maria)
### Day 2 
  - Implement videochat feature (Maddie)
  - Work on document index page (Pasan)
  - Work on document show page (collaborative text area) (Rebecca)
    - auto-save flash message
  - Work on Practice Problem Containers and components  (Maria)
  
### Day 3
  - Complete production README
  - Refine CSS
  - Finish testing and debugging 