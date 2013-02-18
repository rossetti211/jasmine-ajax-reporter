/*

A representative server endpoint to recieve the incoming POST requests
from the Jasmine test reporters and save it into a database
(Meteor's implementation of MongoDB is used here).

As of version 0.5.6, Meteor's MongoDB implementation is incomplete,
requiring a bit of hackery to get around the lack of an 'upsert' command

Implemented using Meteor with the Meteor Router package

*/


Meteor.Router.add('/specreports/jasmine', 'POST', function () {
  var data = {};
  data.suites = this.request.body.suites;
  data.users = this.request.body.users;
  data.timestamp = moment().format('MMM Do YYYY, h:mm:ss a');
  if (SpecResults.findOne({users: data.users})) {
    SpecResults.update({users: data.users}, {users: data.users, suites: data.suites, timestamp: data.timestamp});
  } else {
    SpecResults.insert({users: data.users, suites: data.suites, timestamp: data.timestamp});
  }
});
