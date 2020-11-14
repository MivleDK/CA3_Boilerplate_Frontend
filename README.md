# CA3 quick start code: Frontend Boilerplate

(Insert travis URL)

<br>

# Introduction

This is part of a 3'rd semester, computer science course at CPH Business, Lyngby.

<br>

## **Frontend configuration**

The frontend is a single page application (SPA) written in REACT.

<br>

## **Backend configuration**

**The Database**

- MySQL Database using Java Persistence API (JPA) (With some JPQL) to achieve ORM.

**RESTFUL Web service**

- JAX-RS to handle REST operations

**Testing**  
Consisting of unit and integration tests using:

- jUnit
- Grizzly webserver
- Hamcrest

**Security**

- BCrypt plus hash/salt configurations.

**CI/CD pipeline**

- Travis configuration with github hooks - Everytime you push, travis builds and deploys

<br>

# Getting started

In order to get started with the "Quick start code" you will need a [backend](https://github.com/MivleDK/CA3_Boilerplate_Backend) and [frontend](https://github.com/MivleDK/CA3_Boilerplate_Frontend).

## Getting started with the backend

1. Clone or download this project
2. Create two local databases for the project. One for mocking production and one for tests.  
   The testdatabase must end with "\_test" - eg. `localDB` and `localDB_test`.
3. Configure `persistence.xml` to match your database and credentials
4. (Optional) Configure `pom.xml` to match your deployment target (Domain name or IP-address)
5. Make a plain java file in package "utils" named `"SetupTestUsers.java"` and persist some different users.  
   You can use [this code example](https://gist.github.com/MivleDK/b7452b652a33414573fb3a7d91876340)
6. **DO NOT USE LEGIT USERS AND PASSWORDS IN THE TEST PACKAGE**
7. Run a "Clean & build" to make sure that everyting was setup correctly.
8. Run the project and verify it's accessible in your browser on localhost.
9. Run the `SetupTestUsers.java` file to persist test users.
10. Done 🍻🎉🍾  
    You can deploy on travis from this point or deploy directly using a WAR with tomcat manager .

<br>

## Getting started with the frontend

1. Clone or download [the repo](https://github.com/MivleDK/CA3_Boilerplate_Frontend)
2. Run `npm install` to get all dependencies
3. Run `npm start` to run the project locally on localhost
4. Done 🍻🎉🍾  
   You can tweak as you like or deploy directly on your domain or using surge.
5. (Extra) to deploy on surge run `surge --project ./build --domain A_DOMAIN_NAME.surge.sh`

<br>

**Thanks to the original boilerplate contributers**

- [Alexander Pihl](https://github.com/AlexanderPihl)
- [Jean-Poul Leth-Møller](https://github.com/Jean-Poul)
- Mick Larsen (Me)
- [Morten Rasmussen]()
- [Per Kringelbach](https://github.com/cph-pk)
