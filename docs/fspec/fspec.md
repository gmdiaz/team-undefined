![Undefined Logo] (https://github.com/gmdiaz/team-undefined/blob/master/docs/UndefinedLogo.jpg)

General Information:
--------------------

**Name of System:** OOverlap  
**Authors:** Giovanna Diaz, Santiago De La Torre, Justin Coon, Thai Nguyen, and Kiernan Drohan (Team Undefined)  
  
<p align="center"><em>This file was last revised on: December 8, 2014</em></p>

Revision History:
----------------- 
| Date     | Name | Revision |
|----------|------|----------|
| 10-04-14 | Giovanna Diaz | Created and Uploaded File |
| 12-08-14 | Giovanna Diaz | Updated for Recent Info |


Team Organization: 
------------------
**Giovanna Diaz:** Project Manager, Graphic Designer  
*Responsibilities:* Organizing the team, Creating the Graphic Elements of the site, Making sure deadlines are met [**Edit** to Add more Responsiblities] CSS/HTML for site, Creating Google Docs for each PA, Creating the Videos for Submission, Writing up Script for Commercial  

**Santiago De La Torre:** Database Analyst  
*Responsibilities:*  Implementing the database for the website and managing all data that flows through it such as user accounts and calendar info

**Justin Coon:** Software Engineer, Technology Integration Specialist  
*Responsibilities:*  Assisting in creation of design documents and researching/utilizing the Google and Facebook APIs

**Thai Nguyen:** UI/UX Designer, Software Engineer  
*Responsibilities:*  Deciding the flow of the website. Participating in both UX/UI design and back-end design to integrate them together.

**Kiernan Drohan:** Software Engineer, Technology Integration Specialist  
*Responsibilities:* Monitoring security of user information and utilizing information security methods to keep user information access appropriately visible. 

Overview:
---------
OOverlap is a multiplatform application that allows users to see when their schedules overlap and when is good for them to schedule professional meetings, hangout, school group meetings. 
Users can connect their social media accounts (Google, Facebook) with their scheduling information and OOverlap will add their schedule automatically. In addition,  when social media accounts are linked to OOverlap, your friends are going to be easy to find. In that way, it will be easier to see when the users’ schedule overlap with their friends, so they can spend time together by creating social events or professional meetings.
In case the user does not have a social media account, he or she can open an OOverlap account with a regular email address. In that way, companies can schedule professional meetings and events in a more serious manner. 


<p align = "right"><em>[Written by Santiago De La Torre Pinzon - 10/15/2014]</em></p>

Disclaimer:
-----------
The functional specification of our web application is very straight forward. We load the user’s schedule and we compare them to other user’s schedule to see when they overlap and return the times when two or more schedules don’t overlap so events can be scheduled. Our web application is subject for extension and modification.
  
<p align = "right"><em>[Written by Santiago De La Torre Pinzon - 10/15/2014]</em></p>



Scenarios:
----------
**Scenario 1:** <Thai>
Cardie and Duncan from UMass and Nala from Smith College want to meet up to do assignment for CmpSci 250. They cannot figure out when to meet up because everyone has their own schedule to follow. They go to OOverlap and import their schedule from Spire and Google Calendar and OOverlap tells them a perfect time to meet up in Wednesday afternoon.

**Scenario 2:** <Thai>
OOverlap wants to set up phone interviews with 4 different intern candidates from UMass. They use our system to overlap the engineer’s schedule and the interviewees' schedules by asking them to provide at least 5 possible time slots. After just a few clicks, they are matched up perfectly and live happily ever after.

**Scenario 3:** <Kiernan>
Various students want to set up a party for succeffully completing their projects on time and they find OOverlap. This helps them plan the time and location of the big party based on what the other attendees schedules are going to be. The party is a huge success and everyone gets a great grade.

**Scenario 4:** <Kiernan>
A select team in a business needs to have a team meeting to discuss how to move forward, this shows who’s available when and a descriptive meeting outline placed by the planner. The team releases on time after a successfull meeting and makes a huge profit in the third quarter, they all receive promotions and get their own corner office.

**Scenario 5:** <Kiernan>
You meet a cute girl/boy and you hit it off in the coffee shop you frequent to study, you want to continue this but you cant be too late for your class because you're a good student. Every time you each suggest to meet up turns out to have a conflict. You finally discover that they are also users of OOverlap, you find a good time for you both and continue your budding romance. 

**Scenario 6:** <Justin>
The local high school’s chess club is having problems with consistent attendance, all the members have very complicated schedules and they can’t seem to find the right time to hold their weekly meetings. They all upload their schedules to OOverlap, find the perfect time to meet, and attendance skyrockets. They go on to win the world series of chess. 

**Scenario 7:** <Justin>
UMass Professor Tim Richards decides that the students in his classes have had it too easy but doesn’t want to have to change the courses material too much. He looks online and stumbles upon OOverlap. He has all his students upload their calendars to find the most convenient times to have assignments due, and then deliberately chooses any other time.

**Scenario 8:** <Kiernan>
A group of friends wants to know when they finally have a day off to go to a concert at a local area, some don't have cars so they can plan with others who are showing up and live closer. They all log into their OOverlap accounts and planning goes so fast they are able to enjoy a pre party as well to celebrate the artist, after they are reinvigorated and ready to get back to productive hours of study.


<p align = "right"><em>[Written by Justin Coon, Thai Nguyen, Kiernan Drohan - 10/15/2014]</em></p>  

Non-Goals:
----------
- We are here to help people organize their busy lives, not make money. We will not be advertising or monetizing the site in any way.
- Although OOverlap facilitates social interaction, implementing any Facebook-esque social commenting is not a goal. This includes ‘wall posts’, ‘status updates’, and ‘likes’. Not only are there well-established websites that already have these functionalities, but we are not intending to be a social networking website - we help you manage the social network you already have.
- It is assumed that the user will have a Google Calendar account where they can then use a pre-existing calendar / upload a calendar file from another source - This is if they want to see a calendar, otherwise they can still just choose their free times. [**Edit:** While this is still the case, we do generate a local calendar for users that sign in with a native OOverlap account. Ultimately though, if users want the best outcome, and they use Google calendar, it would make the most sense for them to log in with that - that way their calendar on OOverlap is true to their real calendar as possible.]
- We are not supporting multiple calendars per person (eg. work calendar / play calendar). It is assumed that everybody has one calendar for everything.


<p align = "right"><em>[Written by Giovanna Diaz, Justin Coon - 10/15/2014]</em></p>

Flowchart:
----------
  
![Flowchart] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/FlowChart.jpg)


<p align = "right"><em>[Written by Thai Nguyen  - 10/15/2014]</em></p>

Wireframe Images:
-----------------
###Profile: Homepage  
![Homepage] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/home.png)  
Although represented as one page, this page will really be one long page that you can scroll through. The purpose of this homepage is to serve as welcome to the site. If you are new and do not know anything about what OOverlap does, this will be a clean and elegant introduction. The “Login In” and “Sign Up” buttons are in an easily accessible part of the screen and will float on top of the page while you scroll down so you don’t have to go all the way up to make an account.

**Edit:** While the design of this has slightly changed for the final version, this is still an accurate description of the home page.

###Profile: Personal View  
![Personal Profile] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/PersonalProfile.png)  
The user’s profile view meets their needs in the following ways:
- Easy viewing of friends and groups
- Quick view of their calendar to see any upcoming events
- Easy access to settings (gear - currently circle right next to their profile picture)
<striek>Easy access to scheduling an event: 2 ways: clicking on a friend’s profile picture or clicking the “Schedule Event” button on their profile</striek> **Edit:** There is only one way to schedule an event with a friend - click on the "Schedule Event" button on their user profile page.

Simple, giving just the right amount of information!

###Profile: Personal View - Settings Page  
![Personal Profile:Settings] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/user_settings.png)  
All the settings the user could ever want - right there at a click of the mouse!  
  
**Edit:** We have taken out some of these settings, such as...
- Social Network Connections
- Calendar Prefernces
- Occupation
- Location

###Profile: External View  
![Personal Profile:External View] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/public_Profile.png)  
As mentioned in our non-goals, we are not trying to create a social networking site. This means, when you look at another user’s profile, there really isn’t much that you need to see besides their:
- Profile Picture
- General Information
- Friendship status (with you)

Where privacy is concerned, a user can eliminate their place of business, and their contact email from their public profile. When you click on another user’s profile picture, this information will pop up. This is also how your profile will be displayed to other users.

###Group: Moderator View  
![Group Profile:Mod View] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/group_ModView.png)  
**Edit:** Please note, this moderator view was not ultimately created for our final version  

Groups are for things such as a clubs, project teams, etc., where you will have recurring events. This is the moderator view. Moderators either were either the creator of the group / invited to become a moderator by a creator. This meets the moderator’s needs in the following ways:
- Moderators can accept / decline people to the group (by clicking on the request - triggering a pop up window to confirm or reject)
- Moderators have easy access to all of their members / other moderators
- Quick access for scheduling an event
- Quick view of their group calendar

###Group: Member View  
![Group Profile:Member View] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/group_UserView.png)  
As a participant, the group is much more stripped down. The user can quickly see…
- Moderators and other members of the group (they are in the same position as on the profile page for consistency across the site).
- Upcoming events: Quick View - If you are doing a quick glance of the page, the upcoming events are posted right at the top so that users don’t have to search through the calendar
- Full Calendar: Useful if the Members wants to see upcoming events in more detail / when past events were held

###Scheduling an Event  
![Scheduling an Event] (https://github.com/gmdiaz/team-undefined/blob/master/docs/fspec/images/scheduling_frames.png)  
**Edit:** The UI of this selection changed dramatically for the final version. Now, all you have to do is click the "Schedule an Event" button on your personal profile. This prompts a form which asks for...
- Name of Event
- Length of Event
- Person you want to Schedule With
Once this is complete, you see shared calendar between you and the other person with whom you are scheduling an event. You are then able to see how your calendars overlap (with chunks of time - no details!). You are then able to drag and drop your priorities (all of the length of time that you specified) on to the calendar and submit it.

<strike>
When you go to schedule an event with a friend, you have to make sure you fill out the required information. Although it would be nice to have some sort of set time stored, more likely then not the user will want to only give specific times to specific people. (Who wants to meet with their boss at 8pm on a Saturday night?). The options supplied to the user allow for...  
Easy selection of free times via a click and drag method: You will be supplied your calendar and you will preform the same action as if you were to add an event, but rather you are setting the chunks of free time. This way you can see what you already have scheduled!  
Specification of which times you want to prioritize. (Once again, Friday afternoons will always be last on my list!)  
Include more than one user: This way you can schedule meetings with groups</strike>

<strike>
The UI also warns the user when they have specified a free time with a different user. This is in response to a case where a user is scheduling multiple meetings simultaniously. If you give the same free time to 3 different people, you need a way of keeping track what you have said, and what will happen as those people respond and your free time slowly goes away. </strike> **Edit:** While this is a good idea still, it was not implemented in the final design.



<p align = "right"><em>[Written by Giovanna Diaz - 10/15/2014]</em></p>



List of Open Issues:
--------------------
- Privacy & Security.
- Schedules being stored in the user’s database.
- Time limit when users can meet.
- Integrating other scheduling system in ours.
- Refreshing other scheduling systems when they have changes.
- If you send out multiple requests at one time, we need to update the other requests with the newly used time when a request is completed.
<p align = "right"><em>[Written by Santiago De La Torre Pinzon and Justin Coon - 10/15/2014]</em></p>
