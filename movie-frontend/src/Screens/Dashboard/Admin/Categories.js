import React, { useEffect, useState } from "react";
import SideBar from "./../SideBar";
import { Movies } from "./../../../Data/MoviesData";
import Table from "./../../../Components/Table";
import { HiPlus, HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../Components/Table2";
import { CategoriesData } from "../../../Data/CategoriesData";
import CategoryModal from "../../../Components/Modals/CategoryModal";
import { useDispatch } from "react-redux";
import { getAllCategoriesAction } from "../../../Redux/Actions/CategoriesActions";
import Loader from "../../../Components/Notifications/Loader";
import { Empty } from "../../../Components/Notifications/Empty";

export default function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector(
    (state) => state.categoryGetAll
  );

  const onEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    // get all categories
    dispatch(getAllCategoriesAction());
    if (modalOpen === false) {
      setCategory();
    }
  }, [modalOpen, dispatch]);
  return (
    <SideBar>
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded w-full sm:w-auto"
          >
            <HiPlusCircle />
            Create
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : categories?.length > 0 ? (
          <Table2
            data={categories}
            users={false}
            onEditFunction={onEditFunction}
          />
        ) : (
          <Empty message="No Movies found" />
        )}
      </div>
    </SideBar>
  );
}
