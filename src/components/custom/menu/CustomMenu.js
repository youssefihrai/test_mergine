import * as React from "react";
import { Menu } from "react-admin";
import {
  FaTruck,
  FaCreditCard,
  FaPrint,
  FaBuilding,
  FaUser,
  FaPage4,
  FaPager,
  FaFileInvoice,
  FaBlog,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";
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
    <Menu.Item to="/users" primaryText="Users" leftIcon={<FaUser />} />
    <Menu.Item
      to="/ordervirement"
      primaryText="Order Virement"
      leftIcon={<FaPager />}
    />

    <Menu.Item
      to="/factures"
      primaryText="Factures"
      leftIcon={<FaFileInvoice />}
    />
    <Menu.Item
      to="/virements"
      primaryText="Virements"
      leftIcon={<MdPayments />}
    />

    <Menu.Item
      to="/logfactures"
      primaryText="Log Factures"
      leftIcon={<FaBlog />}
    />
    <Menu.Item
      to="/print"
      primaryText="Print Order Virement"
      leftIcon={<FaPrint />}
    />
  </Menu>
);
