import React from "react";
import { Link } from "react-router-dom";
const UserName = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center  h-screen">
        <div>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-grey-500">
              Explore More to Connect With us
            </span>

            <form className="py-1">
              <div className="profile flex justify-center py-4">
                <img src="" alt="avatar" />
              </div>
              <div className="textbox">
                <input type="text" name="Username" placeholder="UserName" />
                <button type="submit">Let's Go</button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a Member{" "}
                  <Link to="/register" className="text-red-500">
                    Register Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
