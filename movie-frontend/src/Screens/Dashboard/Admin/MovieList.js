import React from "react";
import SideBar from "./../SideBar";
import { Movies } from "./../../../Data/MoviesData";
import Table from "./../../../Components/Table";

export default function MovieList() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete All
          </button>
        </div>

        <Table data={Movies} admin={true} />
      </div>
    </SideBar>
  );
}
