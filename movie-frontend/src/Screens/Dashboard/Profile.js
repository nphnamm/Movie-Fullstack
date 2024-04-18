import React from "react";
import SideBar from "./SideBar";
import Uploder from "../../Components/Uploder";
import { Input } from "../../Components/UserInputs";

export default function Profile() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
        <Uploder />
        <Input
          label="FullName"
          placeholder="netflixo react tailwind"
          type="text"
          bg={true}
        />
        <Input
          label="Email"
          placeholder="netflixo@gmail.com"
          type="email"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded w-full sm:w-auto ">
            Delete Account
          </button>
          <button className="bg-main font-medium transitions hover:bg-subMain text-white py-3 px-6 rounded w-full sm:w-auto ">
            Delete Account
          </button>
        </div>
      </div>
    </SideBar>
  );
}
