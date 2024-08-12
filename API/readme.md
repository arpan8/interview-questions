# Rest api interview questions

## 1. What is Rest API?
A REST API (Representational State Transfer API) is a set of rules for building web services that allows systems to communicate over the web using standard HTTP methods. Key features include:

1. Statelessness: Each request is independent, with no client session stored on the server.
2. Resources: Resources (like users or orders) are identified by URIs (e.g., /users/123).
3. HTTP Methods: Common methods include:
    - **GET**: Retrieve data
    - **POST**: Create new data
    - **PUT**: Update existing data
    - **DELETE**: Remove data
4. Data Formats: Typically uses JSON or XML for data exchange.

REST APIs are commonly used for building scalable and flexible web services.

## 2. What is the differences between get, post, put, delete methods.
- **GET** is for retrieving data.
- **POST** is for creating data.
- **PUT** is for updating or creating data.
- **DELETE** is for removing data.

## 3. What is the differences between put, patch methods.
- **PUT**: Replaces the entire resource with the provided data .i.e entire resouce is needed for update if not found then the resource is created.
- **PATCH**: Partially updates the resource with only the specified changes .i.e entire resouce is not needed, only get what need to update.

## 4. What is Idempotence?
It means performing a operation multiple times gives the same result.
E.g Sending multiple identical get requests will always return same result.

## 5. What are the roles of status codes?
Status codes are used to convey the result of client's request.
![alt text](public/status-code.png)

## 6. What is CORS?
CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that controls how resources can be requested between different domain. It allows or restricts cross-origin requests by using specific HTTP headers:

- Access-Control-Allow-Origin: Specifies which domains can access the resource.
- Access-Control-Allow-Methods: Lists the HTTP methods allowed for cross-origin requests.
- Access-Control-Allow-Headers: Specifies which headers are allowed.
- Access-Control-Allow-Credentials: Indicates if credentials (cookies, etc.) are allowed.

CORS helps protect users by preventing unauthorized cross-origin requests while allowing legitimate ones when configured correctly.

## 7. What is serialization and deserialization?

Serialization: Converts an object to a storable/transmittable format (like JSON).
Deserialization: Converts the formatted data back into an object.

> [!NOTE] 
> **APIs are created using, JAVA, python, and JS and everyone handles object differently, therefore we convert a object to JSON, then we send them**

## 8. Versioning in Rest API?
Versioning refers to the multiple versions of the API to maintain the backward compatibility.

## 9. What are authentication and authorization?
Authentication is the process of verifying the identity of a user by validating there credentials.
Authorization is the process of allowing an authenticated user to access the resources.

## 10. What are the types of authentication?
- Basic: User passes credential using post request, credentials are verified and send back the response. The disadvantage is credentials are sent in plain text over the network, so it's not a secured method of authentication.
- API key authentication: Here, the API owner will share an API key with the users and this key will authenticate the users. The main disadvantage is the shared API key can be stolen or shared, so it's a possibility of data breach.
- Token based authentication(JWT):  JWT is a compact, URL-safe way to represent claims between two parties. A JWT is composed of three parts: Header, Payload, and Signature.
    - Advantages:
        1. Self-Contained: JWTs include all the information needed, reducing server-side storage.
        2. Scalable: Stateless tokens support scalability across distributed systems.
        3. Secure: Signed tokens ensure data integrity and authenticity; optional encryption adds extra security.
    - Disadvantages:
        1. Token Size: JWTs can become large, affecting performance, especially if the payload is extensive.
        2. Revocation Complexity: Once issued, JWTs cannot be easily revoked before expiration.
        3. Sensitive Data: If not encrypted, sensitive data in the payload is visible and could be exposed if not handled properly.

- Mutli factor authentication(MFA): Its enhancing security in online banking, email, and sensitive accounts. Requires two or more verification methods, such as: 
    1. Something you know: Password or PIN.
    2. Something you have: Smartphone, hardware token.
    3. Something you are: Biometric data (fingerprint, face recognition).
- Cerificate based authentication: Uses digital certificates issued by trusted authorities to authenticate users or devices.