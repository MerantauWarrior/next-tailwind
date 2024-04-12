import React from 'react';
import Card from "../../components/Card";

const Page = () => {
  return (
    <div className={"flex flex-col gap-4 md:gap-8"}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
};

export default Page;
