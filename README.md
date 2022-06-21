# AutoScribe Test: Nest JS Backend with Vue JS frontend

## Getting started

###### Build the base images
```bash
docker-compose build
```

###### Then youre good to go :
```bash
docker-compose up
```
then navigate http://127.0.0.1:8080/

###### The application
The NestJs backend receives a string argument on the request and passes to a service where an injected http services  will read the provided url and use jsdom to scrap the information needed
The VueJS fontend interacts with the backend through
vuex : a state management library. 

### RTFM !
- https://docs.nestjs.com/
- https://vuejs.org/v2/guide/
