jasmine-ajax-reporter
=====================

Custom Jasmine reporter for sending test results to an API

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

Portions of this repo are taken from the Jasmine JSReporter project by Ivan De Marino. Those portions (indicated by comments in the code) are included under the terms of the license below. All other portions are my own work, and are available under the MIT license.

  Copyright (C) 2011 Ivan De Marino (aka detro, aka detronizator), http://blog.ivandemarino.me, ivan.de.marino@gmail.com

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
  * Neither the name of the <organization> nor the
    names of its contributors may be used to endorse or promote products
    derived from this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL IVAN DE MARINO BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
