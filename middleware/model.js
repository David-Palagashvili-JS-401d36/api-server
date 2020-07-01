// TODO: Setup express params middleware at the top level, to run a function on the “model” parameter.

/* 
- In this middleware, dynamically require() the data model specified by the model parameter:
- Identify a valid model in the route param
- Finds the module in the file system
- Requires and instantiates it
- Makes that model available to the handler functions so - that they can still call, for example, `request.model. create()
*/

