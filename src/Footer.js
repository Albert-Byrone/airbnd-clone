import React from "react";
import "./Footer.css";

function Footer() {
  useEffect(() => {
    setupTabs();
    document.querySelectorAll(".tabs").forEach((tabsContainer) => {
      tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
    });
  });

  function setupTabs() {
    document.querySelectorAll(".tabs__button").forEach((button) => {
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
  }
  return (
    <div className="footer">
      <div class="tabs">
        <div class="tabs__sidebar">
          <button class="tabs__button tabs__button--active" data-for-tab="1">
            Destinations for arts & culture
          </button>
          <button class="tabs__button" data-for-tab="2">
            Destinations for outdoor adventure
          </button>
          <button class="tabs__button" data-for-tab="3">
            Mountain cabins
          </button>
          <button class="tabs__button" data-for-tab="4">
            Beach destinations
          </button>
          <button class="tabs__button" data-for-tab="5">
            Popular destinations
          </button>
          <button class="tabs__button" data-for-tab="6">
            Unique Stays
          </button>
        </div>
        <div class="tabs__content tabs__content--active" data-tab="1">
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p class="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>

        <div class="tabs__content" data-tab="2">
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p class="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>

        <div class="tabs__content" data-tab="3">
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p class="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
        <div class="tabs__content" data-tab="4">
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p class="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
        <div class="tabs__content" data-tab="5">
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p class="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
        <div class="tabs__content" data-tab="6">
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p class="tabs__par">Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="tabs__title">San Diego</h4>
              <p>California</p>
            </div>
          </div>
          <div class="tabs__container">
            <div>
              <h4 class="tabs__title">Phoenix</h4>
              <p>Arizona</p>
            </div>
            <div>
              <h4 class="tabs__title">Hot Springs</h4>
              <p>Arkansas</p>
            </div>
            <div>
              <h4 class="tabs__title">Los Angeles</h4>
              <p>California</p>
            </div>
            <div>
              <h4 class="">San Diego</h4>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
