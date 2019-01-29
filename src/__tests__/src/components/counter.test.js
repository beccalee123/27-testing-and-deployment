import React from "react";

import renderer from "react-test-renderer";
import Counter from "../../../components/counter/counter.js";

describe("counter", () => {
  it("is alive", () => {
    expect(true).toBeTruthy();
  });

  it("exists", () => {
    let component = shallow(<section />);
    expect(component.find("section").exists()).toBeTruthy();
  });

  it("is changes state to a higher number on an up click", () => {
    let component = mount(<Counter />);
    let anchor = component.find("a.up.clicker");
    anchor.simulate("click");
    expect(component.state("count")).toBe(1);
    expect(component.find("span").text()).toContain("1");
  });

  it("is changes state to a lower number on an down click", () => {
    let component = mount(<Counter />);
    let anchor = component.find("a.down.clicker");
    anchor.simulate("click");
    expect(component.state("count")).toBe(-1);
    expect(component.find("span").text()).toContain("-1");
  });
});
