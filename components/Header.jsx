'use client'
import React from 'react';

const Header = () => {
  return (
    <header className={"p-2 bg-slate-300"}>
      <div className="flex w-full justify-between items-center container mx-auto">
        <span>Header</span>
        <button className="btn-primary ml-auto">
          Save changes
        </button>
      </div>
    </header>
  );
};

export default Header;
