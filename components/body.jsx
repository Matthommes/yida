import { useState } from "react";
import Experience from "./experience";


export default function Body() {


  return (
    <main className="px-8 lg:px-32">
      <div>
        <h1 className="text-2xl font-extrabold text-pink-400">
          Share your feedback
        </h1>
        <Experience />
 
      </div>
    </main>
  );
}
