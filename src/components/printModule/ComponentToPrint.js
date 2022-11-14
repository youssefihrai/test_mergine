import React from "react";
import logo from "./img/logo.png";
import "./styles.css";
import { ToWords } from "to-words";
import DataFournisseurList from "./printComponenets/DataFournisseurList";
const toWords = new ToWords({
  localeCode: "fr-FR",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
    currencyOptions: {
      // can be used to override defaults for the selected locale
      name: "DIRHAMS",
      plural: "DIRHAMS",
      symbol: "MAD",
      fractionalUnit: {
        name: "CENTIMES",
        plural: "CENTIMES",
        symbol: "CENT",
      },
    },
  },
});

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
      sum: 25547452.25,
    };
  }

  componentDidMount() {
    this.fetchApiToFrournisseur("http://10.111.1.217:8080/allfournisseurs");
    this.OnChangeFornisseur("");
  }
  componentDidUpdate() {
    console.log(
      "name --------------------------> ",
      this.props.fournisseursName
    );
  }
  fetchApiToFrournisseur = (apiToFetch) => {
    fetch(apiToFetch)
      .then((result) => result.json())
      .then((fournisseursList) => {
        this.setState({
          ...this.state,
          fournisseursList,
        });
      })
      .catch((error) => console.log(error));
  };

  OnChangeFornisseur = (nom) => {
    this.setState({ ...this.state, select: nom });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div>
          <img className="logo" src={logo} alt="atner logo" />
        </div>
        <hr />
        <div className="date">
          <p dir="rtl">
            Rabat le &emsp;
            {this.state.current}
          </p>
          <p dir="rtl">A l'attention de Monsieur le Dircteur</p>
          <p dir="rtl">du Center d'Affaires</p>
          <p dir="rtl">BP</p>
          <p>Objet: Order de virement</p>
        </div>
        <div className="discription">
          <p>Monsieur,</p>
          <div className="atner-compte">
            <span>&emsp;&emsp;&emsp;&emsp;Par le débit de notre compte N°</span>
            <span>181 810 21211 47619 200 03 02</span>
          </div>
          <p>
            &emsp;&emsp;&emsp;&emsp;nous vous prions de bien vouloir traiter les
            virements détaillés dans le tableau ci-dessous:
          </p>
        </div>
        <div className="table">
          <table className="torder">
            <thead>
              <tr>
                <th className="thorder">N°</th>
                <th className="thorder">Béneficiaire</th>
                <th className="thorder">N° du compte</th>
                <th className="thorder">Montant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">
                  <DataFournisseurList
                  // OnChangeFornisseur={OnChangeFornisseur}
                  />
                </td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">1</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
              <tr>
                <td className="tdorder">10</td>
                <td className="tdorder">TEMARA STELL</td>
                <td className="tdorder">007 825 000 676 200 000 018 411</td>
                <td className="tdorder">91.652,96</td>
              </tr>
            </tbody>
            <tfoot>
              <th className="thorder">Total</th>
              <th colSpan={2} className="thorder montant">
                {toWords
                  .convert(this.state.sum, { currency: true })
                  .toLocaleUpperCase()}
              </th>
              <th className="thorder montant">25547452,25</th>
            </tfoot>
          </table>
        </div>
        <div className="discription">
          <p>Salutations distinguées</p>
          <b>
            <p>Le Directeur Général</p>
            <p>M Youness ZAMANI</p>
          </b>
        </div>
        <div className="footer">
          <p>S.A.R.L. au capital social 70.000.000,00 DH</p>
          <p>Siége social : 24, route du sud, MIDELT</p>
          <p>
            R.C. Midelt n°479-Patente n°18906900-I.F n° : 04150014-C.N.S.S n°
            1280510
          </p>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
