A web application to demonstrate how to use the UH CAS service.

##### JavaScript

You'll need Node.js installed to build and run the frontend project (v20.17.0).
I would recommend installing [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) to handle the node installations.

##### Java

You'll need a Java JDK to build and run the project (version 21+).
I would recommend installing [sdkman (Software Development Kit Manager)](https://sdkman.io/).
If necessary, be sure to set your JAVA_HOME environment variable.

##### Building

Install the necessary project dependencies from the command line:

|    <!-- -->  | <!-- -->                          |
|--------------|-----------------------------------|
| maven        | `$ ./mvnw install               ` |

To start the application:

|    <!-- -->  | <!-- -->                         |
|--------------|----------------------------------|
| maven        | `$ ./mvnw clean spring-boot:run` |

After the application starts, navigate to here in a web browser:

<http://localhost:8080/casdemo>

If you would like to use the node dev server for frontend work (make sure the spring app is running):

| <!-- -->                 |
|--------------------------|
| `$ cd src/main/frontend` |
| `$ npm run dev`          |

After the dev server starts, navigate to here in a web browser:

<http://localhost:5173/casdemo>

##### Running Unit Tests

The project includes Unit Tests for various parts of the system. For this project, Unit Tests are defined as those tests
that will rely on only the local development computer. A development build of the application will run the Unit Tests.

To run the unit tests:

|    <!-- -->  | <!-- -->              |
|--------------|-----------------------|
| maven        | `$ ./mvnw clean test` |

To run a test single test class:

|    <!-- -->  | <!-- -->                                         |
|--------------|--------------------------------------------------|
| maven        | `$ ./mvnw clean test -Dtest=StringsTest        ` |

To run a single method in a test class:

|    <!-- -->  | <!-- -->                                           |
|--------------|----------------------------------------------------|
| maven        | `$ ./mvnw clean test -Dtest=StringsTest#trunctate` |

##### Build to deploy to an Environment

To build a deployable war file for deployment:

|    <!-- -->  | <!-- -->                 |
|--------------|--------------------------|
| maven        | `$ ./mvnw clean package` |

You should have a deployable war file in the target directory. Deploy as usual in a servlet container, e.g. tomcat.

_Important Note:_
If you are setting up tomcat for the first time, make sure you enable SSL and add any necessary certificates.

Here are instructions for Tomcat 8, for example:
<https://tomcat.apache.org/tomcat-8.0-doc/ssl-howto.html>

Copy the casdemo.war file into the webapps directory of Tomcat.

##### Build Tool (Optional)

Download and install maven (version 3.2.1+).

##### Source Repository

The files for the project are kept here:

<https://github.com/lukemcd9/uh-casdemo-react>

##### Important Note

The UH Number is restricted by University of Hawaii policy, so be sure not to expose it on any public page.