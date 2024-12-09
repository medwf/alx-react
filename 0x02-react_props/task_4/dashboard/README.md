To work on this task, install prop-types with npm first

Create a CourseListRow component
Create a new folder CourseList and a new component with the name CourseListRow. The component accepts three props:

isHeader (bool, default: false)
textFirstCell (string, required)
textSecondCell (string, default: null)
The component returns a tr html element, and within that element:

if isHeader is true
if textSecondCell is null, it returns a th element containing textFirstCell with a colSpan = 2
if textSecondCell is not null, it returns two th elements containing textFirstCell and textSecondCell
if isHeader is false
it returns two td elements containing textFirstCell and textSecondCell
Create a CourseListRow.test.js file:

When isHeader is true
Add a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist
Add a check to test the component renders two cells when textSecondCell is present
When isHeader is false
Add a check to test the component renders correctly two td elements within a tr element
Create a CourseList component
In the folder CourseList, create a new component named CourseList:

it returns a table element with an id CourseList
it contains a thead element
it includes a CourseListRow with the props textFirstCell="Available courses" and isHeader=true
it includes a CourseListRow with the props textFirstCell="Course name", textSecondCell="Credit", and isHeader=true
it contains a tbody element
it includes a CourseListRow with the props textFirstCell="ES6", textSecondCell="60", and isHeader=false
it includes a CourseListRow with the props textFirstCell="Webpack", textSecondCell="20", and isHeader=false
it includes a CourseListRow with the props textFirstCell="React", textSecondCell="40", and isHeader=false
Create and import a file CourseList.css where you will be able to add the styling for the component

Create a CourseList.test.js with two checks:

Check that it renders CourseList component without crashing
Check that it renders the 5 different rows
Modify the App component
Modify the App component to display either the Login, or the CourseList component:

# Import Proptypes

## Create a property isLoggedIn. It should be false by default

When isLoggedIn is false, display the Login screen
When isLoggedIn is true, display the CourseList screen
Modify the App test suite:

# Add a test to check that CourseList is not displayed

Describe a new case, when isLoggedIn is true, and add two checks. The first one should verify that the Login component is not included. The second one should verify that the CourseList component is included
Modify the NotificationItem component
Define the prop types for the NotificationItem component:

Verify that html is an object with the key \_\_html, and that the value is a string
Require type to be a defined prop and a string. It should default to default if type is not passed by the parent component
Verify that value is a string
Modify the Notifications component
Add a new div element with the class menuItem:

it contains the text Your notifications
it should be display right before div.Notifications
Add a prop to the Notifications component named displayDrawer:

it should be a boolean
by default it should be false
Modify the div.Notifications tag:

it should only be visible when displayDrawer is true
Modify the Notifications.test.js:

Add a check that the menu item is being displayed when displayDrawer is false
Add a check that the div.Notifications is not being displayed when displayDrawer is false
Add a check that the menu item is being displayed when displayDrawer is true
Add a check that the div.Notifications is being displayed when displayDrawer is true
