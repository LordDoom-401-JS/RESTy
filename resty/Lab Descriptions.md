# Monday LAB 26 - Component Based UI
RESTy Phase 1: Begin work on the RESTy API testing application

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Create a UML diagram of the RESTy system on a whiteboard before you start

Create a new repository for this project, called ‘resty’ and work in a branch called ‘base’

Business Requirements
Refer to the RESTy System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 1 Requirements
Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner

The following user/developer stories detail the major functionality for this phase of the project.

As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
As a user, I want to enter the URL to a REST API and select the REST method to use to access it
As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested
And as developers, here are the high level development tasks that address the above end user requirements

Create a visually appealing site with a Header, Footer, and a large content area
Create a form that asks for a URL
Create buttons that let the user choose from the REST methods (get, post, put, delete)
When the form is filled out, and the button is clicked, display the URL and the method chosen
Preview

Technical Requirements / Notes
Create the RESTy application as follows:

Begin with creating your application using create-react-app
Write an App component that serves as the container for all sub-components of this application
The app should import an .scss file to serve as the base design for the site
Import and render Header, Footer, and Form components from other files using ES6 import syntax
The <Header> component should use it’s own .scss file for styling
The <Footer> component should use it’s own .scss file for styling
The <Form> component should:
Use it’s own .scss file for styling
Accept user input for a URL and store it in state
Allow the user to choose a method and store it in state
This can be done with radio buttons or clickable elements
Display the user’s choices on screen in a separate <div> or <section> under the form
Stretch Goals
Don’t show the user’s choices until the form is submitted
How will you store/use state to achieve this goal?
Stylize the method options so the user knows which one has been selected
Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

NOTE: For this assignment, testing is not required

# Tuesday LAB 27 - Props and State
RESTy Phase 2: Connect RESTy with APIs, running live requests

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Continue working in your ‘resty’ repository, in a branch called ‘props-and-state’

Business Requirements
Refer to the RESTy System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 2 Requirements
In phase 2, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests

The following user stories detail the major functionality for this phase of the project.

As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
As a user, I want to see the results returned from an API request in my browser in a readable format
Application Flow:

User enters an API URL
Chooses a REST Method
Clicks the “Go” button
Application fetches data from the URL given, with the method specified
Displays the response headers and results separately
Both headers and results should be “pretty printed” JSON
One possible design/layout. Please use your judgement and taste in styling your version of this application.

Resty

Technical Requirements / Note
Suggested Component Hierarchy and Application Architecture:

index.js - Entry Point
app.js - Container
Holds state: Count and Results Array
A class method that can update state
Renders 2 Child Components
<Form />
Expects a function to be sent to it as a prop
Renders a URL entry form
A selection of REST methods to choose from (“get” should be the default)
On submit
Send the API results back to the <App> using the method sent down in props
<Results />
Expects the count, headers, results to be sent in as props
Renders the count
Renders the Result Headers as “pretty” JSON
Renders the Result Body as “pretty” JSON
Tests
Install the React Testing Library framework
Assert that upon submitting the form will result in data being rendered in the output area
Deployment
Deploy your application to GitHub pages using a GitHub action which will publish the “build” to the gh-pages branch of your repository on all check-ins

Stretch Goals
Add support for all REST methods

GET a single record by ID
DELETE a single record by ID
PUT a single record by ID
Requires the addition of a text area where you can type in the JSON body for the update
POST to create a new record
Requires the addition of a text area where you can type in the JSON body for the new record
Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

# Wednesday LAB 28 - Component Composition
RESTy Phase 3: Add conditional rendering to RESTy

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Continue working in your ‘resty’ repository, in a branch called ‘composition’

Business Requirements
Refer to the RESTy System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 3 Requirements
In this phase of the RESTy build, we will be adding some more fidelity to the application, including a menu, history, and an “in-progress” spinner.

The following user stories detail the major functionality for this phase of the project.

As a user, I want to be able to use all REST methods so that I can do more than just get data
As a user, I want a simple list of all previous queries I’ve run so that I can easily see which queries I’ve run before
As a user, I want to click on an old query and have my selections appear in the form for me, so I don’t have to re-type them
As a user, I want to see a “loading” indicator while RESTy is fetching data so that I know it’s working on my request
Technical Requirements / Note
Update the RESTy application as follows:

Add support for PUT, POST, and DELETE in your remote calls
Whenever a query is successful (results come back), store the query parameters in local storage
Store the URL, Method, and the Body (if any)
Store only unique, successful queries
Home Page

Add a simple history list to the left side of the application
List all previous queries, showing the method and the URL
When a user clicks a previous query, populate the RESTy forms with the query information
Completely hide the output area (Headers & Results) when there are none to display
Display any fetch/load errors in place of the results area, if they occur
Add a “Loading” indicator while fetching
When the user clicks the “Go!” button, show a loading icon on the page
When the fetching of results is complete, remove the loading icon and show the results
Application Architecture Notes
Alter the <Results /> component as follows:
Add support for all REST methods
Use a conditional component such as <If> to hide/show the results pane when there are none
Use a conditional component such as <If> to hide/show a loading image during the fetch process
Create a new <History/> inline component that will:
Show a simple history list on the main page
Allow a user to click and re-run any previous query
Tests
For this lab, tests should assert the full functionality of the API calls. Use a mock to simulate the actual call, but wire your tests up to expect that the visual changes (wait state and results state) are there for your users.

Install and setup a mock server into your test file using the msw/node library
Assert that the spinner is rendered upon initial submit
Assert that the spinner is replaced with results when they arrive
Deployment
Deploy your application to either Netlify or AWS Amplify

Stretch Goal
Add support for basic and bearer authorization headers

Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

# Thursday LAB 29 - Routing
RESTy Phase 4: Add routing and conditional rendering to RESTy

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Continue working in your ‘resty’ repository, in a branch called ‘composition’

Business Requirements
Refer to the RESTy System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 4 Requirements
In this final phase of the RESTy build, we will be adding some more fidelity to the application, including a menu with a ore detailed view of our history, as well as an about us page.

The following user stories detail the major functionality for this phase of the project.

As a user, I want to see all of my previous queries as a separate page so that I can browse them in greater detail
As a user, I would like to view a separate “Help” page so I can learn how the application works
Technical Requirements / Note
Update the RESTy application as follows:

Add a menu bar to the header
Link labeled “Home” that links to ‘/’ and shows the search form/results page
Link labeled “History” that links to ‘/history’ and loads the history page
Link labeled “Help” that links to ‘/help’ and loads the about us page
Home Page
Add a simple history list to the left side of the application
List all previous queries, showing the method and the URL
When a user clicks a previous query, populate the RESTy forms with the query information
Completely hide the output area (Headers & Results) when there are none to display
Display any fetch/load errors in place of the results area, if they occur
Add a “Loading” indicator while fetching
When the user clicks the “Go!” button, show a loading icon on the page
When the fetching of results is complete, remove the loading icon and show the results
History Page
Maintain a list of every unique and successful API call the user has made
On the History page, show a list of ever previous API call
Clicking on an entry shows the full details of that query in a separate section on the page
URL, Method, Body
Optionally, you can store other metadata about the query (time ran, bytes returned, etc) to show your users
Show a button labeled “Re-Run” that would execute that API call again and shows the home page with the form pre-filled
Help Page
Display static content detailing how a user should use the ReSTY application
Application Architecture Notes
Import BrowserRouter into your index, and wrap the <App /> with it
In the <App />, use routes to display the correct components, based on the route
Create a new <History/> page component that will:
Show a list of URLs you’ve loaded before
Show full details of each search
Add a button to each to re-run the search
Redirect to the home page to show the results
Create a new <Help/> page component that will:
Display static content to the users on how to use the application
Testing
Attempt to write your tests as you write your application BEFORE ever loading it in the browser. It might look awful, but you can assert the behavior through tests only, then use the browser to work the css and layout parts only.

Complete basic render testing on the application
Does the correct content display when you change pages?
When on the history page, does the details for each request render when you click a history item?
When you click the “Re-Run” button, does the home page load with the form populated properly?
Your tests should be asserting everything you do as a user
Deployment
If you have an AWS or an Azure account, deploy your application there, manually.

If not, continue to deploy your application either at GitHub pages or Netlify.

Stretch Goal
Add support for basic and bearer authorization headers to be optionally sent with the requests

Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

# 