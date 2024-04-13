'use client'
import React from 'react';
import Switch from "./Switch";

const Header = () => {
  return (
    <header className={"p-2 bg-slate-300 dark:bg-gray-800"}>
      <div className="flex w-full justify-between items-center container mx-auto">
        <span className={"text-black dark:text-white"}>Header</span>
        <Switch/>
        <button className="btn-primary">
          Save changes
        </button>
      </div>
    </header>
  );
};

export default Header;
