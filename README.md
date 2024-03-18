# Note Taker Application

<br/>
<p align="center">
    <a href="https://nodejs.org/" >
        <img alt="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications" src="https://img.shields.io/static/v1.svg?label=Node.js&message=JavaScript runtime&color=lightyellow" /></a>
    <a href="https://expressjs.com/" >
        <img alt="Express.js - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications" src="https://img.shields.io/static/v1.svg?label=Express.js&message=web app framework&color=blue" /></a>
    <a href="https://www.render.com/">
        <img alt="Render (for deployment) - A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud" src="https://img.shields.io/static/v1.svg?label=Render&message=deployment&color=red" /></a>
    <a href="https://www.npmjs.com/package/express-session">
        <img alt="express-session - A session middleware for Express.js, used for handling user sessions" src="https://img.shields.io/static/v1.svg?label=express-session&message=middleware&color=green" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data" >
        <img alt="Fetch - Another very common task in modern websites and applications is retrieving individual data items from the server to update sections of a webpage without having to load an entire new page." src="https://img.shields.io/static/v1.svg?label=Fetch&message=retrieve data&color=yellow" /></a>
    <a href="https://www.npmjs.com/" >
        <img alt="Node Package Manager" src="https://img.shields.io/static/v1.svg?label=npm&message=packages&color=lightblue" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
        <img alt="JavaScript - ES6" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=lightgrey" /></a>
    <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=black" /></a>
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=UNB&message=Bootcamp&color=red" /></a>
    <a href="https://opensource.org/license/mit/">
        <img alt="The MIT License" src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=lightgreen" /></a>
</p>
<br/>

## Description

Note Taker is a simple, easy-to-use application built to help small business owners and individuals keep track of their tasks and organize their thoughts efficiently. Utilizing an Express.js back end, it saves and retrieves note data from a JSON file, providing a persistent, lightweight solution for note management.

[Live Application][live-application]

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Starter Code](#starter-code)
- [Additional Resources](#additional-resources)
- [State Flow Diagram](#state-flow-diagram)
- [Contributing](#contributing)
- [License](#license)

## Features
-  **Create Notes:** Users can add new notes with a title and body text, which are then saved to a backend database.
- **View Notes:** All saved notes are displayed in a list on the left-hand side of the application, allowing for easy access.
- **Delete Notes:** Users have the option to delete any note. (Bonus functionality)

## Installation
To install the application locally, follow these steps:

1. Clone the repository to your local machine:

```shell
git clone https://github.com/naturuplift/NoteTaker.git
```

2. Navigate into the application directory:
```bash
cd NoteTaker
```

3. Install the necessary packages:
```bash
npm install
```

Before using the Note Taker application, make sure you have Node.js and npm (Node Package Manager) installed on your system.

## Usage
To run the application locally:

1. Start the server:

```sql
npm start
```

2. Open your browser and navigate to http://localhost:3000. This display landing page below:

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/f7ab71c7-9a11-467f-809b-4e3d9f86dd6a)

4. Click on 'Get Started' to start creating notes as per image below:

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/e9a6f869-789d-4d7b-9f91-e13d85930bac)

### Verify the application routes using [Insomnia][insomnia]

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/01d6524f-546d-4934-961e-b0450cb1b78f)

**HTML routes**

-  `GET /notes` should return the `notes.html` file:

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/b7894be5-362b-480b-8a5c-5b4eddfefeb7)

-  `GET *` should return the `index.html` file:

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/9f5a9ee4-1402-456d-afb4-f15b1337312c)

**API routes**

-  `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/428065cb-60b5-42ab-9257-3d807b1d3a88)

-  `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/8f749268-6774-4611-8b9e-a47851b93339)

-  `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete.

![image](https://github.com/naturuplift/NoteTaker/assets/23546356/5f259289-9766-4b5b-a04a-2c2d02890cf2)


## Starter Code 

To start with this project we use the following [Starter Code][starter-code]

## Additional Resources

- [Node.js Documentation][node-doc]: Documentation for Node.js, the runtime used for this project.
- [Render][render]: Render offers cloud hosting services, making it easy to deploy and scale applications.
- [Express.js][express-doc]: The official documentation for Express.js, a web application framework for Node.js.
- [Insomnia][insomnia]: Insomnia is a powerful REST API Client that simplifies the process of testing web APIs.

Feel free to explore and enhance this Note Taker Project to suit your specific requirements. Creating well-documented projects is crucial for better collaboration and understanding.

## State Flow Diagram
For a visual representation of the sequence of actions involved in the Note Taker App, refer to the [State Flow Diagram][state-flow] provided in the project documentation.

## Contributing
Contributions to this project are welcome. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
Feel free to reach out, contribute, or provide feedback to make the Note Taker App even more robust and user-friendly!

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[live-application]: <https://notetaker-c6xh.onrender.com>
[node-doc]: <https://nodejs.org/en/docs/>
[render]: <https://dashboard.render.com/>
[express-doc]: <https://www.npmjs.com/package/express>
[insomnia]: <https://insomnia.rest/>
[starter-code]: <https://github.com/coding-boot-camp/miniature-eureka>
[node-doc]: <https://nodejs.org/en/learn/getting-started/introduction-to-nodejs>
[state-flow]: <https://github.com/naturuplift/NoteTaker/blob/main/assets/Note%20Taker%20State%20Diagram%20v1.png>
[MIT]: <https://github.com/naturuplift/NoteTaker/blob/main/LICENSE>
