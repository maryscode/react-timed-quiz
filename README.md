# Branded Interactive Panel

This is the code for an executable that starts a node server that serves a quiz and leaderboard as well as an admin panel for managing results.

- http://device.local.IP:server.port/leader-board
  - front end for leaderboard
- http://device.local.IP:server.port/quiz
  - front end for quiz
- http://device.local.IP:server.port/scores
  - create, read, update, delete endpoints
- http://device.local.IP:server.port/badge-data
  - read
- http://device.local.IP:server.port/healthcheck
  - read

### Table of Contents

1. [Dev](#dev)
2. [Run](#run)
3. [Publish](#publish)
4. [Usage](#usage)
5. [Examples](#examples)

## Dev

Built with [Electron](https://electronjs.org).

When working on the front ends (or anything served via the node server) the following "tokens" will be replaces with relevant data. Example 3 shows a way to use these in a front end.

- ELECTRON_NET_INFO
  - becomes a json object with information on where the node server is located on the network. See the post request in example 1 below.
- ELECTRON_COUNTRY_LIST
  - becomes an array of all supported countries.
- ELECTRON_STATE_LIST
  - becomes and array of all supported states.

### Run

```
$ npm install
$ npm start
```

Currently each of the views are react apps to run them with hot reloading cd into them for example: 

```
$ cd ./src/views/quiz/quiz-app
$ yarn
$ yarn start
```

to serve them from the electron server run 

```
$ ./build.sh
$ yarn start
```


### Publish

```
$ ./build.sh dist 
```

After Travis finishes building your app, open the release draft it created and click "Publish".

## Usage

#### Scores API

In the body of the post request to scores the following fields are supported when creating a "score" in the database.

The server requires:

1. first name

- key: firstName
- type: string
- required

2. last name

- key: lastName
- type: string
- required

3. Country

- key: country
- type: [enum](src/constants/ISO-3166-Countries-with-Regional-Codes.json)
  - one of the name values
  - TEMP: enum validation removed
- required

4. State

- key: state
- type: string
- type: [enum](src/constants/USA-STATES.json)
  - one of the abbreviation values
  - TEMP: enum validation removed
- required
- required: if the country selected is "United States of America"

5. Score

- key: score
- type: number
- required
- val:

```javascript
>= 0 && <= 25
```

6. Time

- key: time
- type: number
  - time in MS to complete the quiz
- required

```javascript
>= 0 && <=  97000
```

7. Last Modified

- key: lastModified
- type: number
  - unix time stamp
- FPO
  - this will likely change if we only allow one score per doctor
- required

#### Badge API

**SEE NOTE**

The badge api which can be found with a get request to badge-data is used after a user scans their badge and the badge id is extracted. Once that is done the server can fetch user data to auto populate the quiz "intake" form. The get request requires the following query parameters. See example #5 for more details.

1. badge_id

- string
- a valid user badge uid

A successful query will respond with:

```javascript
{
    "First Name Prefix": "",
    "First Name": "MEREDITH",
    "Middle Initial": "",
    "Last Name": "COURTEMANCHE",
    "Last Name Suffix": "",
    "Title": "WP",
    "Company": "CompuSystems, Inc.",
    "Company 2": "",
    "Address": "2805 S 25th Ave",
    "Address 2": "",
    "Email Address": "bryan.loehr+sales15_dregistration1024@csireg.com",
    "City": "Broadview",
    "State": "IL",
    "Mail Code": "",
    "Country Code": "GB",
    "Country": "United Kingdom",
    "Phone Area Code": "708",
    "Phone Number": "3449070",
    "Fax Area Code": "708",
    "Fax Number": "7864114",
    "Badge Number": "5100356"
}
```

> note: The country and state values might fail validation on the back end as our "valid" values might not be the same as the APIs. There are a few ways address this but we should coordinate. Also, the data keys do not perfectly line up with the expected keys of scores submission end point ie. "firstName" !== "First Name".

## Examples:

1. The adding a score to the leader board with fetch.

```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  firstName: "Aaron",
  lastName: "Stack",
  country: "United States of America",
  state: "NY",
  score: 20,
  time: 200,
  lastModified: 10000,
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

const { LOCAL_IP, PORT, SCORES_END_POINT } = window.electronNetInfo;

fetch(`http://${LOCAL_IP}:${PORT}/${SCORES_END_POINT}`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
```

2. Getting all of the scores saved with fetch.

```javascript
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const { LOCAL_IP, PORT, SCORES_END_POINT } = window.electronNetInfo;

fetch(`http://${LOCAL_IP}:${PORT}/${SCORES_END_POINT}`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
```

3. The following tag will add a JSON object containing the port, ip adress and a list of end points to the window, an array of all supported states, and an array of all supported countries. Whenever content is sent from the node server all instances of ELECTRON_NET_INFO, ELECTRON_STATE_LIST, ELECTRON_COUNTRY_LIST will be replaced with the corresponding content.

```HTML
	<script>
			window.electronNetInfo = ELECTRON_NET_INFO;
			window.electronStates = ELECTRON_STATE_LIST;
			window.electronCountries = ELECTRON_COUNTRY_LIST;
	</script>

```

4. This code snippet is an example of submiting a score as well as using the validator.

```javascript
document.getElementById("scoreForm").addEventListener("submit", (evt) => {
  evt.preventDefault();

  let errors = false;
  let results = {};
  const els = Array.from(evt.target).slice(0, 5);

  els.forEach((formEl) => {
    let { name, value } = formEl;
    if (name === "score" || name === "time") {
      value = parseInt(value); //ew
    }

    const el = { [name]: value };

    // onlyCheckIncluded allows you to check a single element
    const errorData = validator({ ...el, onlyCheckIncluded: true })[name];

    if (errorData.hasErrors) {
      console.warn(errorData.errors);
      errors = true;
      formEl.classList.add("error");
    } else {
      results = { ...results, ...el };
    }
  });

  if (errors) return;

  results.lastModified = +new Date();
  els.forEach((el) => (el.value = ""));
});
```

5. This is an example of taking a badge id from a user and getting the users info.

```javascript
const request = require("request");
const { LOCAL_IP, PORT, BADGE_DATA_END_POINT } = window.electronNetInfo;
const code = "whatever the badge id is we are trying to fetch info for";

const options = {
  method: "GET",
  url: `http://${LOCAL_IP}:${PORT}/${BADGE_DATA_END_POINT}?badge_id=${code}`,
  headers: {},
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

6. Fetch the badge_id from a badge.

```javascript
import { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";

function Sample() {
  const [code, setCode] = useState("");

  const setScanResults = (scanResults) => {
    if (!scanResults || (scanResults && !scanResults.text)) {
      return;
    }

    let code = scanResults.text.split("|")[1];

    setCode(code);
  };

  useEffect(() => {
    if (!code) return;
    console.log(code);
  }, [code]);

  return (
    <QrReader
      delay={300}
      onError={console.log}
      onScan={setScanResults}
      style={{ width: "100%" }}
    />
  );
}
```

### Tasks

Need to have:

- [ ] qr code scanner might not work NOT on https due to chrome security rules, see [here](https://www.npmjs.com/package/react-qr-reader) for more information.

Nice to have:

- [ ] improve views ie) how are the quizzes built? Should we link it here to another repo in a build pipeline? Should we add CRA or webpack and develop everything here?
- [ ] address the include node issue in views
- [ ] remove all export defaults
