import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
            <div className="bg-white p-6 max-w-sm mx-auto rounded-lg shadow-lg mt-8">
            <h1 className="font-bold text-xl mb-4">About Us</h1>
            <h2 className="text-gray-600 mb-4">This is a Food Delivering Company</h2>
        
            
            <UserClass name={"Anujeet.K"} location={"Nanded"} />
            <a href="https://www.linkedin.com/in/anujeet-kunturkar/" className="text-blue-500 hover:underline">
            <h3 className="mt-4 mx-7">Created with ❤️ by Anujeet Kunturkar</h3>
            </a>
        </div>
    );
};

export default About;