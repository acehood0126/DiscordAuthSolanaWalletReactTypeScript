import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// const tokenURL = "https://discord.com/api/oauth2/token";
// const apiURLBase = "https://discord.com/api/users/@me";
const serverURL = "http://localhost:5000";

type userData = {
  username: string;
  userid: string;
  gid: string;
};

const Discord = () => {
  const [discordname, setDiscordName] = useState("");
  const [discordid, setDiscordId] = useState("");
  const [wadres, setWalletAddress] = useState("");
  const [groupid, setGroupId] = useState("");

  const { username, userid, gid } = useParams<keyof userData>() as userData;

  useEffect(() => {
    setDiscordName(username);
    setDiscordId(userid);
    setGroupId(gid);
  }, [username, userid, gid]);

  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="p-6 max-w-sm mx-auto w-[400px] bg-white border-[1px] border-gray-50 rounded-xl shadow-md items-center space-x-1 backdrop-blur">
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={`https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png`}
            height={100}
            width={100}
            alt="Discord Logo"
          ></img>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Discord Name"
            value={discordname}
            onChange={(e) => setDiscordName(e.target.value)}
            readOnly
            className="flex-shrink-0 flex justify-center items-center text-center border-b-2 p-3 m-1 border-indigo-500 focus:border-indigo-900 focus:outline-none"
          ></input>
          <input
            type="text"
            placeholder="Discord ID"
            value={discordid}
            onChange={(e) => setDiscordId(e.target.value)}
            readOnly
            className="flex-shrink-0 flex justify-center items-center text-center border-b-2 p-3 m-1 border-indigo-500 focus:border-indigo-900 focus:outline-none"
          ></input>
          <input
            type="text"
            placeholder="Wallet Address"
            value={wadres}
            onChange={(e) => setWalletAddress(e.target.value)}
            readOnly
            className="flex-shrink-0 flex justify-center items-center text-center border-b-2 p-3 m-1 border-indigo-500 focus:border-indigo-900 focus:outline-none"
          ></input>
          <input
            type="text"
            placeholder="Group ID"
            value={groupid}
            onChange={(e) => setGroupId(e.target.value)}
            readOnly
            className="flex-shrink-0 flex justify-center items-center text-center border-b-2 p-3 m-1 border-indigo-500 focus:border-indigo-900 focus:outline-none"
          ></input>

          <Link
            to=""
            className="flex-shrink-0 flex justify-center items-center text-center"
          >
            <button
              className="px-6 mt-2 py-2 w-full text-sm justify-start items-start text-indigo-500 font-semibold rounded-full border border-indigo-500 hover:bg-indigo-500 hover:text-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-5555dd-200 focus:ring-offset-2"
              onClick={() => {
                const req = {
                  discordname,
                  discordid,
                  wadres,
                  groupid,
                };
                //console.log(req);
                axios
                  .post(serverURL + "/user/create", req)
                  .then((res) => res.data)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discord;
