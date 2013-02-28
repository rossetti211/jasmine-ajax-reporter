jasmine-ajax-reporter
=====================

Custom Jasmine reporter for sending test results to an API
(also includes an example of rendering the recieved data into a d3 dashboard)

### Using the Reporter

1. On the server that's intended you receive the test reports, you'll need to set up a request handler. The default route is `/specresults/jasmine`, though this is straightforward to modify in the reporter's code. The 'examples' folder in this repo contains an example request handler built on Meteor that includes functionality to save the results into MongoDB.
2. The server will also need to provide the `jasmine-ajax-reporter.js` as a resource in the `/public` folder.
3. On each computer that is to be running tests, you'll need to insert a script tag into the `SpecRunner.html` (or equivalent) file. If you've stored this file in the server's `/public` folder, the path below should work once you fill in your domain name.
 
        <script type="text/javascript" src="http://YOUR_DOMAIN_HERE/jasmine-ajax-reporter.js"></script>

That should do the trick!

This project is described at greater length in my blog post on [Tracking TDD Remotely](http://localhost:4000/blog/2013/02/17/tracking-tdd-remotely/)

### Testing

This reporter is known to work with the following versions of Jasmine:

* 1.0.0.rc1 revision 1282853377
* 1.3.0 revision 1354052693

Other versions will likely work, but have not been tested.

### License

Portions of this repo are taken from the Jasmine JSReporter project by Ivan De Marino. Those portions and the applicable license are noted by comments in the code. All other portions are my own work, and are available under the MIT license.m
