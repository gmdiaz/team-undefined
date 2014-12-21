![Undefined Logo] (https://github.com/gmdiaz/team-undefined/blob/master/docs/UndefinedLogo.jpg)


General Information:
--------------------

**Name of System:** OOverlap  
**Authors:** Giovanna Diaz, Santiago De La Torre, Justin Coon, Thai Nguyen, and Kiernan Drohan (Team Undefined)  
  
<p align="center"><em>This file was last revised on: November 12, 2014</em></p>

Revision History:
----------------- 
| Date     | Name | Revision |
|----------|------|----------|
| 11-03-14 | Giovanna Diaz | Created and Uploaded File |
| 11-11-14 | Giovanna Diaz | Added Project Summary & Bird's Eye View |
| 11-12-14 | Thai Nguyen | Added Libraries and Update Components |
| 12-02-14 | Thai Nguyen | Update Libraries |
| 12-08-14 | Giovanna Diaz | Edit for Recent Information / added OOverlap logo |

What is OOverlap?
-----------------
![Overlap Logo] (https://github.com/gmdiaz/team-undefined/blob/master/docs/proposal/OOverlap.png)  

OOverlap is a scheduling application with the busy college student and professional in mind. Organize meetings with ease by sending out request. Both users will declare their free time and then OOverlap will do the rest - comparing the two schedules and alerting you of compatible meeting times! No more hassle about changing schedules, and no more frustrating back-and-forth emails. In order to enhance your scheduling experience, OOverlap connects with your GoogleCal so that you have your most up-to-date calendar. As you schedule and confirm meetings your calendar will update to reflect the newest information. 

Part of a group? Don't worry. OOverlap offers group functionality so that you can easily plan large-scale events or small board meetings. Simply create a group, invite your members, and start planning.

Additionally, with OOverlap's 'priorities' feature you can hierarchically declare you free times. It is in this way that OOverlap overthrows it's competitors.
<p align = "right"><em>[Giovanna Diaz - 11/10/2014]</em></p>


External Libraries:
-------------------
### Front-end
- Bootstrap: A framework for website’s responsive design.
- JQuery: A Javascript library for manipulating DOM objects, handling events and AJAX 
- JQuery-noty: A library for flashing notification to user 
- full-calendar: A library based to display nicely format calendar
- typeahead: A library for suggestion while typing

**Edit:** <strike>AngularJS</strike>

### Backend
#### Login
- Google API: Let user login via their Google acount 
- Facebook API: Let user login via their Facebook account

#### Database
- mongodb, mongoose: NoSql Database and a API layer to talk with the Database  
**Edit:** We are hosting our database on monogolab as well

####Calendar
- google-calendar, google-refresh-token: Import user existing calendar into the database as well as insert new events to user calendar when it’s sheduled
- passport: a library to authenticate user account
- moment: a library for parsing, validating, manipulating, and formatting dates.

####Mail:
- nodemailer: A library to send email to user

<p align = "right"><em>[Thai Nguyen - 12/2/2014]</em></p>

Database: ER Diagram
--------------------
![Overlap Logo] (https://raw.githubusercontent.com/gmdiaz/team-undefined/master/docs/dspec/ER%20diagram%20-%20ERD.jpeg)  

Components: Bird's Eye View
---------------------------

###Create Account  
Of course if a user does not have a pre-existing account with OOverlap, they will need to create an account. This component will take in a username (currently this will be a gmail address) and a password. If the account already exists, it will display a notification to the user. Users should be able to get to this component from the login function in the home page (Top left button on the navigation bar). There will be a window pop up and underneath the login form, user can click to the small text which says “Don’t have an account?” to change the form to register form.  

###Log-in  
This component is fairly self-explanatory as to why it fits in to the website. Without the log-in feature, users will not be able to customize their experience on OOverlap. In order to access all of your personal data (ie. Calendar, Pending Requests, Friends, and Groups) you have to have an account, and in order to access that account you have to log in by clicking the “Log in” button at the top left corner of the navigation bar! Your profile will be your “home page” of sorts. After you log on, you will be taken to your profile page since you should be able to do everything that you need to do from that page.

###User Profile
The user profile is yet another important component in the website. As mentioned in the “Log-in” Component description, the User Profile will serve as a “home page” for the user when they are on the website. It will contain all of the information that they need in order to schedule events, access the groups they are members/admins of, and see their calendar. They can also reach their profile settings from their home page. They will be able to reach their user profile from the “Home” button in the navigation that will be placed in the upper right hand corner of screen. <strike>They will will be able to access their profile page from: www.OOverlap.com/user/[theirLoginUsername].</strike> They will will be able to access their profile page from: www.OOverlap.com/user/profile.

###Settings
The settings component fits in to the website because we are offering the user something that is customizable. In the settings the user can control their privacy settings, profile information (including profile picture, username, password, etc.), calendar preferences, email notifications, and social network connections. Giving the user the ability to change the as much about their profile as possible makes the website more accessible. <strike>The user will be able to access this page from their homepage and by the following link: www.OOverlap.com/user/[theirLoginusername]/settings</strike> The user will be able to access this page from their homepage and by the following link: www.OOverlap.com/user/profile.

###Calendars
####Input Calendar (Scheduling Events)
The input calendar component will be used when the user goes to schedule an event with a friend or colleague. This fits in to our application since it is basically the basis of what the application is designed on: scheduling events with ease. The calendar that shows up will allow the user to drag their free times on to the calendar and will then take those times to compare later on. This component can be accessed by clicking on the “Schedule an Event” button on their Profile page.

####Overlap Calendar (Figuring Out Group Meeting time)
This component will occur in the back-end system once every members in the group have filled out their free time. It then retrieved all the user input and apply correct matching algorithm to figure out the time slot with highest priority.

####“Export” Calendar (Displaying All Users Free Time)
The export calendar component will display the free times that both the users have filled out. With this calendar, you will be able to clearly see the overlaps. This component will ultimately be displayed once we figure out the best meeting time, and you cannot get to it before that point.

###E-mail Notifications
**Edit:** Please note that this has not been implemented in the final version up for review  

The email notifications are an important component of the website. Via email, we plan to send the users…
- Notification when someone wants to schedule an event
- Notification when a group wants to schedule an event
- The details from when an event is scheduled…
	- The finalized time (assuming the overlaps were good!)
	- A request to look over their offered free times again because no overlaps were found (potentially with hints at good times for them to fill out or times that they might not have prioritized highly)
- Notification of friend request / group join request (if user is admin to a group)  

As previously mentioned, the email notifications can be toggled in the Settings component. We do not want to spam the user with emails, but feel like emails are a good way of contacting the user so that we don’t have to rely on them checking our website every day to get updates. (Although it would be nice for people to want to go there every day, we just need to help remind the user that they use the site and that they should work it in to their website-checking habits. Email notifications will be sent directly to the user depending on what email they provided at login. (The email can be changed in the Settings component.)


<p align = "right"><em>[Giovanna Diaz - 11/10/2014]</em></p>

Components: The Breakdown
--------------------------
###Create Account
- **Person(s) Responsible:** Justin, Santiago, Thai
- **How does it connect and communicate to other parts of the system?:**  
	Inputs a new user’s username and password, validate whether the username exists before, if not,  passes it onto the database for storage, and then logs the user in and redirects them to their new user profile.
- **How does it relate and implement aspects that were mentioned in our fspec?:**  
	This particular aspect was not directly referenced in the functional specification, but it implements creating a new user profile.
- **Please predict any implementation challenges:**  
	Any issues related to this would probably be difficulties in encrypting user information to ensure user’s privacy.


###Log in
- **Person(s) Responsible:** Justin, Santiago, Thais  
- **How does it connect and communicate to other parts of the system?:**  
	This component will allow the user to choose whether they want to login by their account or via Google/ Facebook then redirect user information to the correct Authentication. The user will then be redirected to their user profile if their login is successful.
- **How does it relate and implement aspects that were mentioned in our fspec?:**  
	This will implement the login aspect of the homepage shown in the functional specification.
- **Please predict any implementation challenges:**  
	It may be difficult/complicated to manage the Google API and Facebook API’s login functionality.

###User Profile
- **Person(s) Responsible:** Thai, Giovanna  
- **How does it connect and communicate to other parts of the system?:**  
	This component will pull the user’s information such as name, location, current OOverlap meetups, etc from the database as well as calendar information from their Google Calendar account and display it.
- **How does it relate and implement aspects that were mentioned in our fspec?:**  
	This will be the implementation of the Personal View page mentioned in the functional specification.
- **Please predict any implementation challenges:**  
	Deciding how to arrange and organize the information we pull in a clean and concise manner may be complicated.

###Settings
- **Person(s) Responsible:** Giovanna, Justin
- **How does it connect and communicate to other parts of the system?:**  
	This component will be communicating with the database in that it will have to pull the user’s current settings and push the settings the user has changed. After changes have been saved it will redirect to the user’s profile page.
- **How does it relate and implement aspects that were mentioned in our fspec?:**  
	This component implements the Settings view seen in our functional specification.
- **Please predict any implementation challenges:**  
	This component will be relatively straight forward so we do not expect very many issues.

###Calendars…
####Input Calendar (Scheduling Events)
- **Person(s) Responsible:** Justin, Thai, Giovanna
- **How does it connect and communicate to other parts of the system?:**  
	This component will make use of Google Calendar, dhtmlxScheduler APIs and AngularJs to make a smooth interface that let users input their free time.
- **How does it relate and implement aspects that were mentioned in our fspec?:**  
	This will implement one half of the member and moderator views mentioned in the functional specification. It will simply use the Google Calendar API to input the user’s calendar and then send it to the database for storage/use. Once all members input their free time, it'll notify "Overlap Calendar" component to start processing the overlap time.
- **Please predict any implementation challenges:**   
	We might have some challenges when it comes to building the interface for this feature. It could very well be one of those things that looks really smooth, but is pretty complicated to code. Other implementation challenges could include...

####Overlap Calendar (Figuring Out Group Meeting time)
- **Person(s) Responsible:** Thai  
- **How does it relate and implement aspects that were mentioned in our fspec?:** This component will connect with the database to retrieve all free time of members in the group and then using moment library, use matching algorithm to figure out the best overlap time slot, save information back to the database and notify "Export Calendar" components.
- **Please predict any implementation challenges:** The biggest challenge will be the algorithm to figure out the overlap time with highest users' prority.

####“Export” Calendar (Displaying All Users Free Time)
- **Person(s) Responsible:** Justin, Thai  
- **How does it connect and communicate to other parts of the system?:**  
	This component will mainly connect with the database to retrieve the best meet-up time
- **How does it relate and implement aspects that were mentioned in our fspec?:**  
	This calendar will be the one that we build that shows the users the times that they are both free.
- **Please predict any implementation challenges:**  
	There could be challenges with implementing the interface for this feature. For consistency, all the calendars shown should look like the google calendar. (It would be ugly, and confusing to have different layouts for different calendars). That said, having the overlapping times shows up on a google calendar looks as though it will be quite the challenge.

###Email Notifications
- **Person(s) Responsible:** Kiernan
- **How does it connect and communicate to other parts of the system?:**  
	This will be using the Nodemailer library and will be utilized by the meetup request component.
- **Please predict any implementation challenges:**  
	We do not expect any implementation challenges. Sending an email is a fairly straightforward process and we will have their email address since that is what we are using for our username.

<p align = "right"><em>[Justin Coon, Giovanna Diaz, Thai Nguyen - 11/11/2014]</em></p>
