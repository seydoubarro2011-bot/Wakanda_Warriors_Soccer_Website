&#x20;WAKANDA WARRIORS and Project Documentation



&#x20;1. User Stories and Acceptance Criteria



\#User Story 1: View Team Information



User Story:



As a website visitor, I want to view information about the WAKANDA WARRIORS soccer team so I can learn about the team and its activities.



Acceptance Criteria:



* The homepage displays the WAKANDA WARRIORS team name.
* The homepage provides a short introduction to the team.
* The navigation menu allows visitors to access the Home, Players, Schedule, and Results sections.
* The website layout is usable on desktop and mobile screens.



\#User Story 2: View Player Profiles



User Story:



As a soccer supporter, I want to view player profiles, including player names, jersey numbers, and positions, so I can learn more about the team members.



Acceptance Criteria:



* The Players section displays player names, jersey numbers, and positions.
* Each player is presented in a clearly organized layout.
* Visitors can search for players by name.
* A message appears when no player matches the search.



\#User Story 3: View Upcoming Games

User Story:

As a team supporter, I want to view upcoming game schedules, including dates, opponents, and locations, so I can know when and where the team will play.



Acceptance Criteria:



* The Schedule section displays upcoming games.
* Each scheduled game includes a date, opponent, and location.
* Game information is presented in an organized and readable format.
* Visitors can access the Schedule section through the navigation menu.



\#User Story 4: View Match Results



User Story:



As a soccer supporter, I want to view previous match results and scores so I can follow the team's performance.



Acceptance Criteria:



* The Results section displays previous matches.
* Each result includes the opponent and final score.
* Match outcomes are identified as wins, losses, or draws when the information is available.
* Results are displayed in a clear and organized format.

\#User Story 5: Manage Player Information



User Story:



As a team administrator, I want to add, update, and manage player information so I can keep the team roster accurate and up to date.



Acceptance Criteria:



* Authorized administrators can add new player information.
* Authorized administrators can update existing player information.
* Required player fields are validated before information is saved.
* Visitors who are not authorized administrators cannot modify player information.



\#User Story 6: Manage Game Schedules and Results



User Story:



As a team administrator, I want to add and update game schedules and match results so I can provide supporters with accurate and current team information.



Acceptance Criteria:



* Authorized administrators can add upcoming games.
* Authorized administrators can update game dates, opponents, and locations.
* Authorized administrators can enter and update match scores.
* Unauthorized visitors cannot modify schedules or match results.



\# 2. Mis-User Stories and Security Mitigations



\### Mis-User Story 1: Unauthorized Modification of Player Information



\*\*Mis-User Story:\*\*



As a malicious visitor, I want to change player information without permission so I can display false or misleading information about team members.



\*\*Mitigation Criteria:\*\*



* Only authenticated and authorized administrators can add or modify player information.
* Regular visitors have read-only access to player profiles.
* The application verifies administrator permissions before accepting changes.
* Unauthorized modification requests are rejected.



\### Mis-User Story 2: Cross-Site Scripting (XSS) Attacks



\*\*Mis-User Story:\*\*



As a malicious user, I want to submit harmful JavaScript code through website input fields so I can execute unauthorized scripts in other visitors' browsers.



Mitigation Criteria:



* User input is validated before being processed.
* User-generated content is safely encoded before being displayed.
* The application does not execute untrusted input as JavaScript or HTML.
* Input fields are tested for common cross-site scripting vulnerabilities.



\### Mis-User Story 3: Unauthorized Access to Administrator Functions



\*\*Mis-User Story:\*\*



As a malicious visitor, I want to access administrator functions without permission so I can control or change team information.



\*\*Mitigation Criteria:\*\*



* Administrator accounts require secure authentication.
* Administrator functions are protected by role-based authorization.
* Passwords are stored using secure password hashing.
* The application rejects requests from users without the required permissions.



\### Mis-User Story 4: Exposure of Private Player Information



\*\*Mis-User Story:\*\*



As a malicious visitor, I want to access private player information so I can collect and misuse personal information without permission.



\*\*Mitigation Criteria:\*\*



\- The website displays only player information necessary for public team profiles.

\- Private contact information and sensitive personal details are not displayed publicly.

\- Access to sensitive information is restricted to authorized administrators.

\- The application avoids collecting unnecessary personal information.



\### Mis-User Story 5: Unauthorized Modification of Game Schedules and Results



\*\*Mis-User Story:\*\*



As a malicious visitor, I want to change game schedules or match results without permission so I can mislead supporters about team activities and performance.



\*\*Mitigation Criteria:\*\*



\- Only authenticated and authorized administrators can modify game schedules and results.

\- The application validates schedule and match-result information before saving changes.

\- Unauthorized modification requests are rejected.

\- The application maintains records of administrative changes for accountability.

...................................................................................................................

3\. Website Mockup

The following diagram represents the planned user interface for the WAKANDA WARRIORS Soccer Team Website. It includes the main navigation, welcome section, player profiles and search, upcoming games, match results, and administrator functions.

\-------------------------------------------------------------------------------------------------------------------

4\. C4 System Context Diagram



The C4 System Context Diagram provides a high-level view of the WAKANDA WARRIORS Soccer Team Website. It identifies the website visitors and team administrators as the primary users of the system and illustrates how they interact with the website.



* Website Visitor: Views team information, player profiles, upcoming games, and match results.
* Team Administrator: Manages player information, game schedules, and match results.
* Software System: The WAKANDA WARRIORS Soccer Team Website.

...................................................................................................................

\## 5. C4 Container Diagram



The C4 Container Diagram shows the main technical components of the WAKANDA WARRIORS Soccer Team Website and how they communicate.



* Website Visitor: Views team information, player profiles, schedules, and match results.
* Team Administrator: Uses the administrator interface to manage team information.
* Web Frontend: The implemented prototype built with HTML, CSS, and JavaScript.
* Application / API: A planned backend service for processing requests and managing website data.
* Database: A planned data store for player information, game schedules, and match results.



The backend and database are planned future components and have not yet been implemented.

\-------------------------------------------------------------------------------------------------------------------

6\. C4 Component Diagram



The C4 Component Diagram provides a detailed view of the internal components of the WAKANDA WARRIORS Soccer Team Website frontend. It shows how the individual website components are organized and how they interact.



* Web Frontend: The main website container built with HTML, CSS, and JavaScript.
* Navigation Component: Provides links to the Home, Players, Schedule, and Results sections.
* Team Information Component: Displays the team's introduction and general information.
* Player Profiles \& Search Component: Displays player profiles and allows visitors to search for players.
* Game Schedule Component: Displays upcoming soccer games, dates, opponents, and locations.
* Match Results Component: Displays previous matches, final scores, and outcomes.
* Administrator Interface: A planned interface for authorized administrators to manage player information, game schedules, and match results.

The Administrator Interface and its management functions are planned for future development and have not yet been implemented.

