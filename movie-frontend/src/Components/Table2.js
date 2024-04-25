import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { DateFormat, shortUppercaseId } from "./Notifications/Empty";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = ({ data, users, onEditFunction, OnDeleteFunction }) => {
  return (
    <tr>
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={`${data?.images ? data.images : "user.png"}`}
                alt={data?.fullName}
              />
            </div>
          </td>
          <td className={`${Text}`}>
            {data?._id ? shortUppercaseId(data._id) : "2R75T8"}
          </td>
          <td className={`${Text}`}>
            {data.createdAt ? DateFormat(data.createdAt) : "12,Jan 2023"}
          </td>
          <td className={`${Text}`}>{data.fullName}</td>
          <td className={`${Text}`}>{data.email}</td>
          <td className={`${Text}`}>{data?.isAdmin ? "Admin" : "User"}</td>

          <td className={`${Text} float-right flex-rows gap-2`}>
            {!data.isAdmin && (
              <button
                onClick={() => OnDeleteFunction(data?._id)}
                className="bg-subMain text-white rounded flex-colo w-6 h-6"
              >
                <MdDelete />
              </button>
            )}
          </td>
        </>
      ) : (
        //Categories
        <>
          <td className={`${Text} font-bold`}>
            {data?._id ? shortUppercaseId(data._id) : "2R75T8"}
          </td>
          <td className={`${Text}`}>
            {data.createdAt ? DateFormat(data.createdAt) : "12,Jan 2023"}
          </td>
          <td className={`${Text}`}>{data.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button
              onClick={() => onEditFunction(data?._id)}
              className="border border-border bd-dry flex-rows gap-2 text-border rounded py-1 px-2"
            >
              Edit <FaEdit />
            </button>
            <button className="bg-subMain text-white rounded flex-colo w-7 h-7">
              <MdDelete />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};
export default function Table2({
  data,
  users,
  OnEditFunction,
  OnDeleteFunction,
}) {
  console.log("check user", data);

  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
                <th scope="col" className={`${Head}`}>
                  Role
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Name
                </th>
              </>
            )}
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => (
            <Rows
              key={i}
              data={data}
              users={users}
              OnEditFunction={OnEditFunction}
              OnDeleteFunction={OnDeleteFunction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
