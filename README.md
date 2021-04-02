# citrus-listus
This project is meant to fulfill the requirements of the Code Louisville Front-End Web Development Jan 2021 course. It is designed firstly for a mobile user (devices under 720 px here), with two media queries for tablets (720-1079px) and desktop screens (1080px and above).

To meet the project requirements, I have built the project with the following features: 1.) Flexbox is used to organize content areas between mobile, tablet, and desktop views; 2.) I've created an original animation in CSS; 3.) a contact form is verified with JavaScript to ensure that all fields are filled in. Some notes about each of these features follow below.

1.) The Flexbox layout presents general information ("Biology" and "Industry") in rows, columns, and rows again in mobile, tablet, and desktop views, respectively. The items contained within "Varieties" (oranges, lemons, limes, etc.) stay as columns in mobile and tablet views before changing to 3 rows in desktop view. Images also resize within their boxes at larger views and I've attempted to keep each image fairly stable within its flex-item for each view. I was not altogether successful with this.

2.) The animation is presented as a message on the html page connected to choices offered on the navigation bar. Most selections on the navigation bar will route to a page with an animated "Page under construction" message. I used an internal stylesheet for this page because I ran into repeated catastrophic failures when I tried to incorporate it into my external stylesheet. The animation is simple, and I used code from Mozilla's "Using CSS animations" page as a template for earlier versions. I've included an @-webkit-keyframes rule for Safari browsers, but I have not been able to test whether it works.

3.) The JavaScript form verification will return an "error" message when either spaces are entered into the fields or they are left blank. Successful completion of the form redirects to an HTML page with a message indicating success. 

I believe that this project is an accurate representation of what I have learned through this course. It's an ugly baby, but it's my baby and I had a good time building it.
