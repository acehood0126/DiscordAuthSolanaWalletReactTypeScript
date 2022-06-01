const Login = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="p-6 max-w-sm mx-auto bg-white border-[1px] border-gray-50 backdrop-blur rounded-xl shadow-md items-center space-x-1">
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={`https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png`}
            height={60}
            width={60}
            alt="Discord Logo"
          ></img>
        </div>
        {/* <a href="http://localhost:5000/api/discord/auth"> */}
        <a href="http://localhost:5000/api/discord/auth">
          <button className="px-6 py-2 text-sm justify-start items-start text-indigo-500 font-semibold rounded-full border border-indigo-500 hover:bg-indigo-500 hover:text-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-5555dd-200 focus:ring-offset-2">
            Discord Oauth2
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
