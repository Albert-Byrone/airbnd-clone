import React, { useEffect } from "react";
import "./Footer.css";

function Footer() {
  useEffect(() => {
    console.log("Loaded");
    setupTab();
    document.querySelectorAll(".tabs").forEach((tabsContainer) => {
      tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
    });
  });

  const setupTab = () => {
    document.querySelectorAll(".tabs__button").forEach((button) => {
      console.log(button);
      button.addEventListener("click", () => {
        const sideBar = button.parentElement;
        const tabsContainer = sideBar.parentElement;
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabsContainer.querySelectorAll(
          `.tabs__content[data-tab="${tabNumber}"]`
        );

        sideBar.querySelectorAll(".tabs__button").forEach((button) => {
          button.classList.remove("tabs__button--active");
        });

        tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
          tab.classList.remove("tabs__content--active");
        });

        button.classList.add("tabs__button--active");
        tabToActivate[0].classList.add("tabs__content--active");
      });
    });
  };
  return (
    <div className="footer">
      <div className="tabs">
        <div className="tabs__sidebar">
          <button
            className="tabs__button tabs__button--active"
            data-for-tab="1"
          >
            Destinations for arts & culture
          </button>
          <button className="tabs__button" data-for-tab="2">
            Destinations for outdoor adventure
          </button>
          <button className="tabs__button" data-for-tab="3">
            Mountain cabins
          </button>
          <button className="tabs__button" data-for-tab="4">
            Beach destinations
          </button>
          <button className="tabs__button" data-for-tab="5">
            Popular destinations
          </button>
          <button className="tabs__button" data-for-tab="6">
            Unique Stays
          </button>
        </div>
        <div className="tabs__content tabs__content--active" data-tab="1">
          <div className="tabs__container">
            <div className="tab_fluid">
              <h4 className="tabs__title">Phoenix</h4>
              <p className="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>

        <div className="tabs__content" data-tab="2">
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p className="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>

        <div className="tabs__content" data-tab="3">
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p className="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="tabs__content" data-tab="4">
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p className="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="tabs__content" data-tab="5">
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p className="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="tabs__content" data-tab="6">
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p className="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div className="tabs__container">
            <div>
              <h4 className="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 className="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 className="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 className="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
