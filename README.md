# socket.io_chat

A real-time chat application created with Socket.io, Express, Node.js, Pug, and PostgresQL. 

### Next steps:
* Implement session persistence with a PostgresQL database 
    * session persistence doesn't make much sense though, right?
    * add a delete all method to the Messages model
    * add a clear all handler to the frontend
* Update socket.js handler to POST the chat data to the db on send
* Add a landing page with a user login (so that the login can be used as the username rather than needing to forgo or hard-code this)
* Refactor JS
* Backend deployment
* Frontend deployment