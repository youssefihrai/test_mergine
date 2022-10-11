import * as React from "react";
import { Menu } from "react-admin";
import { FaTruck, FaCreditCard, FaPrint, FaBuilding } from "react-icons/fa";

export const CustomMenu = (props) => (
  <Menu {...props}>
    {/* <Menu.DashboardItem /> */}
    <Menu.Item
      to="/fournisseurs"
      primaryText="Fournisseurs"
      leftIcon={<FaTruck />}
    />
    <Menu.Item
      to="/ribtempo"
      primaryText="RIB Temporaire"
      leftIcon={<FaCreditCard />}
    />
    <Menu.Item
      to="/ribfournisseurs"
      primaryText="RIB Validé"
      leftIcon={<FaCreditCard />}
    />
    <Menu.Item
      to="/ribatner"
      primaryText="RIB Atner"
      leftIcon={<FaBuilding />}
    />
    <Menu.Item
      to="/print"
      primaryText="Order de virment"
      leftIcon={<FaPrint />}
    />
  </Menu>
);
