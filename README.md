# Overview

This is a web application that keeps track of your friends' birthday. It tells you when they are comping up, their favorite snack, a gift idea and how their dream day would be. You can also include a picture of them

The purpose of this application is to have a way to remember those people you care for, and show some love for them.
To start the application run ng serve on the terminal, and open up http://localhost:4200 on your browser.

{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

Basically the application has:

- Login page: You can sign in with a Google account
- Dashboard: Displays the nearest birthday among all your friends, along with a scrolling bar containing the next five birthdays coming up
- Details: Contains information about the friend clicked
- Edit Friend: Form to edit your friend
- Add Friend: Form to add a new friend
- All: List of all your friends, order by their birthday date

All routes, with the exception of the Login page, are protected by an authentication guard

# Development Environment

Technologies I'm using for the application:

- The Angular framework for the UI and logic
- Observable from Rxjs to create guard
- Firebase Authentication to sign in and sign out users
- Firebase Firestore to store friends and their information
- Firebase Storage to store images and retrieve their url
- Firebase Hosting to host live web application
- Fontawesome for icons
- Moment js for date formatting
- Tailwind CSS for styling

Angular is a development platform, built on TypeScript. It includes:

- A component-based framework for building scalable web applications
- A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
- A suite of developer tools to help you develop, build, test, and update your code

# Useful Websites

- [Angular](https://angular.io/)
- [Firebase Quick Start](https://firebase.google.com/docs/firestore/quickstart)
- [Firebase Cloud Storage on Web](https://firebase.google.com/docs/storage/web/start)
- [Firebase Google Sign In](https://firebase.google.com/docs/auth/web/google-signin)
- [Angular 13 Firebase](https://www.bezkoder.com/angular-13-firebase-storage/)
- [AngularFireStorage](https://github.com/angular/angularfire/blob/master/docs/storage/storage.md)
- [Moment Js](https://momentjs.com/)
- [Rxjs Observable](https://rxjs.dev/guide/observable)
- [FontAwesome](https://fontawesome.com/icons)
- [Tailwind CSS classes](https://tailwind.build/classes)

# Future Work

TODO

- Onboarding modals to introduce users
- Empty components when no friends have been added
- Fix UI elements
- Account for several use cases with date formatting
