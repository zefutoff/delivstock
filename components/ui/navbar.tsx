"use client";
import { Home, Package, ShoppingBag, Clock, Settings } from "react-feather";
import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-white w-full fixed bottom-0 md:relative">
      <div className="flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-between  w-full">
          <nav aria-label="Global" className="w-full md:w-auto">
            <ul className="flex gap-8 text-lm justify-center">
              <li className="mx-2 md:mx-0">
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 flex"
                  href="dashboard"
                >
                  <Home className="block md:hidden" color="#6789A7" />
                  <p className="hidden md:block">Dashboard</p>
                </a>
              </li>

              <li className="mx-2 md:mx-0">
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="stock"
                >
                  <Package className="block md:hidden" color="#6789A7" />
                  <p className="hidden md:block">Stock</p>
                </a>
              </li>

              <li className="mx-2 md:mx-0">
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="kit"
                >
                  <ShoppingBag className="block md:hidden" color="#6789A7" />
                  <p className="hidden md:block">Kit</p>
                </a>
              </li>

              <li className="mx-2 md:mx-0">
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="history"
                >
                  <Clock className="block md:hidden" color="#6789A7" />
                  <p className="hidden md:block">Historique</p>
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="settings"
                >
                  <Settings className="block md:hidden" color="#6789A7" />

                  <p className="hidden md:block">Paramétres</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
