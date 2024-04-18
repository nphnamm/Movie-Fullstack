import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Message, { Input, Select } from "../../../Components/UserInputs";
import Uploder from "../../../Components/Uploder";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UsersData } from "../../../Data/UsersData";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../Components/Modals/CastsModal";

export default function AddMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);
  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);
  return (
    <SideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="Game of Thrones"
            type="text"
            bg={true}
          />
          <Input label="Hours" placeholder="2 Hr" type="text" bg={true} />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input
            label="Year of Release"
            placeholder="2022"
            type="number"
            bg={true}
          />
        </div>
        {/* Images */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* img without title*/}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploder />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/movies/99.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* img with title*/}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image with Title
            </p>
            <Uploder />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/movies/99.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        {/*Description*/}
        <Message
          label="Movie Description"
          placeholder="Make it short and sweet"
        />
        {/*Category*/}
        <div className="text-sm w-full">
          <Select label="Movie Category" options={CategoriesData} />
        </div>
        {/*Movie Video*/}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Movie video
          </label>
          <Uploder />
        </div>
        {/* Cast*/}
        <div className="w-fulll grid lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
          >
            Add cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4 ">
            {UsersData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs rounded flex-colo bg-main border border-border"
              >
                <img
                  src={`/images/${
                    user.image ? user.image : "/images/user.png"
                  }`}
                  alt={user.fullName}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p>{user.name}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain roudned">
                    <MdDelete />
                  </button>

                  <button
                    onClick={() => {
                      setCast(user);
                      setModalOpen(true);
                    }}
                    className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 roudned"
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center my-4">
          <button className="bg-subMain w-full flex-rows font-medium transitions hover:bg-dry text-white py-4 rounded  ">
            <ImUpload /> Publish Movie
          </button>
        </div>
      </div>
    </SideBar>
  );
}
