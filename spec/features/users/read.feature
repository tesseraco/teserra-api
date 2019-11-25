Feature: Read User

  Clients should be able to send a request to our API in order to read a user. Our API should validate the structure of the payload amd response with an error if it is invalid

  Scenario Outline: Request Payload with invalid user ID

    If the client sends a GET request to /users with invalid User ID, they should receive a response with a 400 status code

    When the client creates a GET request to /users with id param which is exactly <id>
    And sends the request
    Then our API should respond with a 400 HTTP status code
    And the content type of the response should be JSON
    And the body of the response should be a JSON object
    And contains an success property set to false
    And contains a message property which says "The ID param must be valid"

    Examples:

      | id           |
      | true         |
      | randomstring |


  Scenario: Minimal Valid Request with Non-Existing User as params

    If the client sends a GET request to /users with an User ID that does not exist, they should receive a response with a exists key set to false

    When the client creates a GET request to /users with id param which is exactly 123
    And sends the request
    Then our API should respond with a 400 HTTP status code
    And the content type of the response should be JSON
    And the body of the response should be a JSON object
    And contains an success property set to false
    And contains a message property which says "User does not exist"


  Scenario: Minimal Valid Request with Existing User as params

    If the client sends a GET request to /users with valid param, they should receive a response with a 200 status code

    When the client creates a POST request to /users
    And attaches a valid Create User payload
    And sends the request
    Then our API should respond with a 201 HTTP status code
    And the content type of the response should be JSON
    And the body of the response should be a JSON object
    And contains an success property set to true
    And contains a message property which says "Successfully created a new user"
    When the client creates a GET request to /users with id param which is exactly 1
    And sends the request
    Then our API should respond with a 200 HTTP status code
    And the content type of the response should be JSON
    And the body of the response should be a JSON object
    And contains an success property set to true
    And contains a message property which says "Successfully fetched the user data"
    And contains a data property of type object
    And delete the test record
