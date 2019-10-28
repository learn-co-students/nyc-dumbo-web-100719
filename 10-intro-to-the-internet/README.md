Intro to the Internet
===

## First....
* What will you get out of this Mod?
  * Developer -> Web Developer

## Introduction to the Internet

* What is the difference between the Internet and the Web?
  - internet -> hardware
  - web -> software, general procols - all protocols
  * https://en.wikipedia.org/wiki/ARPANET
  * https://en.wikipedia.org/wiki/Vint_Cerf (TCP)
  * https://en.wikipedia.org/wiki/Tim_Berners-Lee (HTML/HTTP)
  * http://info.cern.ch/hypertext/WWW/TheProject.html

* How is data sent over the internet?
  * TCP - Transmission Control Protocol, how data is sent
  * IP - Internet Protocol, where it should, look up a web address
  * HTTP - HyperText Transfer Protocol
  * HTML - HyperText Markup Language

* How can I find out the IP address of www.google.com using a terminal command? What kind of server makes this lookup possible?
  * DNS (Domain Name System)
    google.com -> 172.217.11.14
  * `nslookup`/Network Utility
  * https://iplocation.com/

* What is a server? What is a client?
- client: browser, anything that can make a request
- server: a computer that can receive requests and send responses

* What is the request / response cycle?
- request -> sent by the client
- response -> returned by the server

* With a client and server, which makes the request? Which sends the response?

* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl
* What are the parts of a HTTP request
  * Use a web browser to find the headers for an HTTP request. What do you think these headers do?
  * What is usually in the body of an HTTP _response_?
  * What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
    * https://http.cat/
  * Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?

  - CRUD
    - Create - POST, sending a new thing to the server
    - Read - GET, we want to GET something from the server
    - Update - PATCH, update part of it, PUT, update the whole the thing
    - Delete - DELETE 

* What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website?

- static: doesn't change unless the server changes it
- dynamic: responds to user input

https://www.google.com/search?q=cats+playing+baseball

*************** 3 min break! ********************


## Intro to Sinatra
* Build a basic web app in 30 seconds
* Do basic web requests in Sinatra
* Explain what Sinatra is
