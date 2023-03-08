import React from "react";
import { Octokit } from "@octokit/rest";

// access token
const octokit = new Octokit({
  auth: process.env.REACT_APP_ACCESS_TOKEN,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
});

class GitApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    Promise.all([
      octokit.users.getByUsername({
        username: "jamesCodes808",
      }),
      octokit.users.getByUsername({
        username: "Sheldon-Pierce",
      }),
      octokit.users.getByUsername({
        username: "ekalber",
      }),
      octokit.users.getByUsername({
        username: "reedoooo",
      }),
    ])
      .then((responses) => responses.map((response) => response.data))
      .then((data) => {
        this.setState({
          users: data.map((user) => ({
            name: user.name,
            location: user.location,
            bio: user.bio,
            followers: user.followers,
          })),
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.users.map((user, index) => (
          <div key={index}>
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
            <p>Bio: {user.bio}</p>
            <p>Followers: {user.followers}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GitApi;


// import React from "react";

// class GitApi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

//   componentDidMount() {
//     Promise.all([
//       fetch('https://api.github.com/users/jamesCodes808'),
//       fetch('https://api.github.com/users/Sheldon-Pierce'),
//       fetch('https://api.github.com/users/ekalber'),
//       fetch('https://api.github.com/users/reedoooo')
//     ])
//       .then(responses => Promise.all(responses.map(response => response.json())))
//       .then(data => {
//         this.setState({
//           users: data.map(user => ({
//             name: user.name,
//             location: user.location,
//             bio: user.bio,
//             followers: user.followers
//           }))
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.users.map(user => (
//           <div key={user.name}>
//             <h1>{user.name}</h1>
//             <p>Location: {user.location}</p>
//             <p>Bio: {user.bio}</p>
//             <p>Followers: {user.followers}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default GitApi;


// import React from "react";

// class GitApi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {},
//       user2: {},
//       user3: {},
//       user4: {}
//     };
//   }

//   componentDidMount() {
//     fetch('https://api.github.com/users/jamesCodes808')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           user: {
//             name: data.name,
//             location: data.location,
//             bio: data.bio,
//             followers: data.followers
//           }
//         });
//       });

//     fetch('https://api.github.com/users/Sheldon-Pierce')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           user2: {
//             name: data.name,
//             location: data.location,
//             bio: data.bio,
//             followers: data.followers
//           }
//         });
//       });

//     fetch('https://api.github.com/users/ekalber')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           user3: {
//             name: data.name,
//             location: data.location,
//             bio: data.bio,
//             followers: data.followers
//           }
//         });
//       });

//     fetch('https://api.github.com/users/reedoooo')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           user4: {
//             name: data.name,
//             location: data.location,
//             bio: data.bio,
//             followers: data.followers
//           }
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.user.name}</h1>
//         <p>Location: {this.state.user.location}</p>

//         <h1>{this.state.user2.name}</h1>
//         <p>Location: {this.state.user2.location}</p>
//         <p>Bio: {this.state.user2.bio}</p>
//         <p>Followers: {this.state.user2.followers}</p>

//         <h1>{this.state.user3.name}</h1>
//         <p>Location: {this.state.user3.location}</p>
//         <p>Bio: {this.state.user3.bio}</p>
//         <p>Followers: {this.state.user3.followers}</p>

//         <h1>{this.state.user4.name}</h1>
//         <p>Location: {this.state.user4.location}</p>
//         <p>Bio: {this.state.user4.bio}</p>
//         <p>Followers: {this.state.user4.followers}</p>
//       </div>
//     );
//   }
// }

// export default GitApi;

// import React, { Component } from 'react';

// class GitApi extends Component {
//   state = {
//     users: [],
//     name: '',
//     location: '',
//     bio: '',
//     followers: ''
//   };

//   componentDidMount() {
//     fetch('https://api.github.com/users/reedoooo')
//       .then(response => response.json())
//       .then(data => this.setState({ users: data }))

//     fetch('https://api.github.com/users/jamesCodes808')
//       .then(response => response.json())
//       .then(data => this.setState({ users: data }))

//     fetch('https://api.github.com/users/Sheldon-Pierce')
//       .then(response => response.json())
//       .then(data => this.setState({ users: data }))

//     fetch('https://api.github.com/users/ekalber')
//       .then(response => response.json())
//       .then(data => this.setState({ users: data }))
//   }

//   render() {
//     return (
//       <div>
//         <h1>GitHub Users</h1>
//         <ul>
//           {this.state.users.map(user => (
//             <li key={user.id}>
//               <h2>{user.login}</h2>
//               <p>{user.id}</p>
//               <p>{user.avatar_url}</p>
//               <p>{user.url}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
// }

// export default GitApi;
