import React from 'react';


class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
        
        this.state = {
            count: 0,
            userInfo: {
                //Dummy Data
                name: "Tanvi",
                bio: "Fail-Student",
                location: "Solapur",
                avatar_url: "Dummy",
            },
        };
        console.log("Constructor");
    }

    async componentDidMount(){
        // console.log("Component Did Mount");
        
        const data = await fetch("https://api.github.com/users/Anujeet23");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }

    render() {
        console.log("Render");
    return (   
            <div className="bg-white p-6 max-w-sm mx-auto rounded-lg text-center">
            <img className="rounded-full w-20 mx-auto mb-4" src="https://avatars.githubusercontent.com/u/89986435?v=4" alt="User Avatar" />
            
            <h1 className="text-xl font-semibold mb-2">{this.state.userInfo.name}</h1>
            <h2 className="text-gray-600 text-sm mb-4">{this.state.userInfo.bio}</h2>
            
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
                this.setState({ count: this.state.count + 1 });
            }}
            >
            Send Love 💓
            </button>
        
            <h3 className="mt-4 mb-2">Sent {this.state.count} times</h3>
            <h3 className="text-gray-600 text-sm mb-2">Location: {this.state.userInfo.location}</h3>
        </div>
    );
    }
}

export default UserClass;