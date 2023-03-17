import * as React from "react";
import { Menu, usePermissions } from "react-admin";
import {
  FaTruck,
  FaCreditCard,
  FaPrint,
  FaBuilding,
  FaUser,
  FaPager,
  FaSearch,
  FaHistory,
  FaEnvelope,
  FaTrash,
  FaDollarSign,
  FaBorderAll
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";

export const CustomMenu = (props) => {
  const { permissions } = usePermissions();

  return (
    <Menu {...props}>
      {(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt"  ) && (
        <Menu.Item
          to="/fournisseurs"
          primaryText="Fournisseurs"
          leftIcon={<FaTruck />}
        />
      )}

      <Menu.Item
        to="/ribtempo"
        primaryText="RIB Temporaire"
        leftIcon={<FaCreditCard />}
      />

      {(permissions === "admin"|| permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt"  ) && (
        <Menu.Item
          to="/ribfournisseurs"
          primaryText="RIB Validé"
          leftIcon={<FaCreditCard />}
        />
      )}
      {(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt"  ) && (
        <Menu.Item
          to="/ribatner"
          primaryText="RIB Atner"
          leftIcon={<FaBuilding />}
        />
      )}
 
      {(permissions === "admin"|| permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt" ) && (
        <Menu.Item
          to="/ordervirement"
          primaryText="Order Virement"
          leftIcon={<FaPager />}
        />
      )}
      {(permissions === "admin"|| permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt"  ) && (
        <Menu.Item
          to="/virements"
          primaryText="Virements"
          leftIcon={<MdPayments />}
        />
      )}
    
      {(permissions === "admin"|| permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt" ) && (
        <Menu.Item
          to="/print"
          primaryText="Print Order Virement"
          leftIcon={<FaPrint />}
        />
      )}


{(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt"  ) && (  
        <Menu.Item
          to="/facturesres"
          primaryText="facturesresptionner"
          leftIcon={< FaEnvelope  />}
        />
      )}
{(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt"  ) && (  
        <Menu.Item
          to="/FactureValider"
          primaryText="archivage facture"
          leftIcon={<FaHistory />}
        />
      )}


{(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt" ) && (  
        <Menu.Item
          to="/factureRech"
          primaryText="fiche navette"
          leftIcon={<FaSearch />}
        />
      )}





{(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt" ) && (  
        <Menu.Item
          to="/historiquefacture"
          primaryText="historiquefacture"
          leftIcon={< FaTrash  />}
        />
      )}
{(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt" ) && (  
        <Menu.Item
          to="/paiement"
          primaryText="paiement"
          leftIcon={<FaDollarSign />}
        />
      )}

{(permissions === "admin" || permissions==="comptable midelt"|| permissions==="superviseur comptabilite midelt" ) && (  
        <Menu.Item
          to="/all"
          primaryText="all"
          leftIcon={<FaBorderAll />}
        />
      )}


      {permissions === "admin" && (
        <Menu.Item to="/users" primaryText="Users" leftIcon={<FaUser />} />
      )}
    </Menu>
  );
};
