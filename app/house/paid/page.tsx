import React from "react";
import MainHeader from "@/layouts/Header";
import SectionHeader from "@/layouts/house/paid/Header";
import Details from "@/components/house/paid/Details";
import Notes from "@/components/house/paid/Notes";
import Process from "@/components/house/paid/Process";

const Paid: React.FC = () => {
  return (
    <div className="w-full bg-light-secondary dark:bg-dark-background min-h-screen">
      <MainHeader />
      <div className="px-10 py-8">
        <SectionHeader />
        <div className="grid grid-cols-12 gap-6">
          <Details />
          <div className="col-span-4">
            <Notes />
            <h3 className="text-lg font-bold text-light-primary dark:text-dark-primary">Process</h3>
            <Process />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paid;
