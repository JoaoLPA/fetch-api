import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

const setup = () => shallow(<App />);

const findAttr = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`);

Enzyme.configure({ adapter: new Adapter() });

test("renders without error", () => {
  const wrapper = setup();
  const componentApp = findAttr(wrapper, "component-app");
  expect(componentApp.length).toBe(1);
});

test("renders title", () => {
  const wrapper = setup();
  const componentTitle = findAttr(wrapper, "component-title");
  expect(componentTitle.length).toBe(1);
});

test("renders notebook button", () => {
  const wrapper = setup();
  const componentButtonNB = findAttr(wrapper, "component-button-nb");
  expect(componentButtonNB.length).toBe(1);
});

test("renders tablet button", () => {
  const wrapper = setup();
  const componentButtonTBT = findAttr(wrapper, "component-button-tbt");
  expect(componentButtonTBT.length).toBe(1);
});

test("renders smartphone button", () => {
  const wrapper = setup();
  const componentButtonSP = findAttr(wrapper, "component-button-sp");
  expect(componentButtonSP.length).toBe(1);
});

test("renders api result", () => {
  const wrapper = setup();
  const componentButtonSP = findAttr(wrapper, "component-button-sp").simulate(
    "click"
  );
  const componentProduct = findAttr(wrapper, "component-product");
  expect(componentProduct.length).toBe(1);
});
