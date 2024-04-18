import React from "react";
import SideBar from "./../SideBar";
import { Movies } from "./../../../Data/MoviesData";
import Table from "./../../../Components/Table";
import { HiPlus, HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../Components/Table2";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UsersData } from "./../../../Data/UsersData";

export default function Users() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">User</h2>

        <Table2 data={UsersData} users={true} />
      </div>
    </SideBar>
  );
}
