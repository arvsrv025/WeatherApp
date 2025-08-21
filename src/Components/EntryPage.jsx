import React from "react";

const EntryPage = () => {
  return (
    <div className="flex justify-center bg-blue-300 p-[4rem]">
      <form>
        <p className="text-4xl">Enter the Location</p>
        <div className="flex flex-col pt-[25px]">
          <label className="flex flex-col">
            Enter the name of the city
            <input
              className="bg-white rounded-[5px] pl-[5px]"
              placeholder="City Name"
              type="text"
            ></input>
          </label>
        </div>
        <div className="flex flex-col pt-[15px]">
          <label className="flex flex-col">
            Enter the name of the country
            <input
              className="bg-white rounded-[5px] pl-[5px]"
              placeholder="Country Name"
              type="text"
            ></input>
          </label>
        </div>

        <div className="flex flex-col items-center pt-[15px]">
          <button className="bg-white tetx-black h-[1.5rem] w-[6.5rem] rounded-2xl hover:bg-blue-900 hover:text-white">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryPage;
// hover:h-[1.8rem] hover:w-[6.8rem]
