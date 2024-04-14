import React from "react";
import Check from "@/components/Check";
import Input from "@/components/Input";

export default function Interactive() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Check/>
      <div>
        <Input/>
      </div>
    </div>
  )
}
