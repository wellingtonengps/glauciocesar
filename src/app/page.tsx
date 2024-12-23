"use client"

import React from "react";
import FAQAccordion from "@/app/components/FAQAccordion";
import SheetComponent from "@/app/components/SheetComponent";
import MenuCustom from "@/app/components/MenuCustom";
import MainComponent from "@/app/components/MainComponent";
import CarouselCustom from "@/app/components/CarouselCustom";
import CustomerReview from "@/app/components/CustomerReview";
import ReviewCustom from "@/app/components/ReviewCustom";



export default function Home() {

  return (
      <div className="no-scrollbar">
          <main className="w-full no-scrollbar">
              <MainComponent/>
              <div className="p-16">
                  <CarouselCustom/>
                  <section>
                      <h1 className="text-2xl">Clientes e Avaliações</h1>
                      <ReviewCustom/>
                  </section>
                  <section>
                      <h1 className="text-2xl">Perguntas frequentes</h1>
                      <FAQAccordion/>
                  </section>
              </div>
          </main>
          <footer>

          </footer>
      </div>
  );
}