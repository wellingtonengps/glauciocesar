"use client"

import React from "react";
import FAQAccordion from "@/app/components/FAQAccordion";
import SheetComponent from "@/app/components/SheetComponent";

export default function Home() {

  return (
      <div className="no-scrollbar">
          <main className="w-full no-scrollbar">
              <FAQAccordion/>
              <SheetComponent/>
          </main>
          <footer>

          </footer>
      </div>
  );
}