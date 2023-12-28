
const Contact = () => {
    return(
        <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Developer contact</h1>
        <h2 className="text-2xl mb-4">Contact Us and your issue is already resolved :-) </h2>
        <form>
          <input type="text" placeholder="Name" className="border-2 border-gray-300 p-2 m-2 rounded-lg mb-2" />
          <input type="text" placeholder="Message" className="border-2 border-gray-300 p-2 rounded-lg mb-2" />
          <button className="bg-black text-white p-2 m-2 rounded-lg">Submit</button>
        </form>
        <h3 className="text-2xl font-bold mb-4 p-2 m-2">Or</h3>
        <a href="mailto:anujeetkunturkar12@gmail.com" className="text-lg text-fuchsia-600 hover:text-indigo-700 rounded-md">
        Mail: anujeetkunturkar12@gmail.com
      </a>
        </div>
    );
};

export default Contact;