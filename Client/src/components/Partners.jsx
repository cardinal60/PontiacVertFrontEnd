import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"
import {useState} from "react"


function Partners(props) {

    let content = {
        EN: {
          TITLE: "PARTNERS",
          T1: "The initiative for a green and prosperous Outaouais is that of the following elected officials, organizations and committed citizens:",
          BUTTON2: "Return to Home Page",
          Comity: "Committee of regional elected members",
          T2: "And other Partners :",
          CHAMBER: "House of Communs of Canada",
          SOPHIE: "Sophie Chatel, member of Parliament of Pontiac",
          GREG: "Greg Fergus, member of Parliament of Hull-Aylmer",
          STEPHANE: "Stéphane Lauzon member of Parliament of Argenteuil- La petite-Nation",
          STEVEN:"Steven MacKinnon member of Parliament of Gatineau",
          ASSEMBLY: "National Assembly",
          ROBERT: "Robert Bussière MNA of Gatineau",
          ANDRE: "André Fortin, Pontiac representative ",
          MARYSE: "Maryse Gaudreault, Hull representative",
          MATHIEULE: "Mathieu Lévesque, Chapleau representative",
          MATHIEULA: "Mathieu Lacombe, Papineau representative",
          MUNICIPALITY: "regional Municipalities of Region",
          MARC: "Marc Carrière, Prefect of MRC des Collines ",
          CHANTAL: "Chantal Lamarche, Prefect MRC of Vallée-de-la-Gatineau",
          JANE: "Jane Toller, Prefect de la MRC Pontiac",
          TONY: "Tony Wawatie, chief of the Anishinabe of Kitigan Zibi nation's Council",
          DYLAN: "Dylan Whiteduck, chief of Kitigan Zibi Anishinabeg",
          COMITE: "Committees of organisations and Outaouais citizens",
          ORGANISME: "Partner organisations",
          BENOIT: "Benoît Délage, general director",
          PAUL: "Paul Turpin, consultant",
          TOURISM: "Tourism Outaouais",
          JULIE: "Julie Kinnear, general director",
          CHCOM: "Chamber of Commerce de la Vallée-de-la-Gatineau",
          MIKE: "Mike McConnery, president ",
          REMI: "Rémi Lafond, general director",
          OLAF: "Olaf Jensen, directorr ",
          RHONDA: "Rhonda Perry, general director",
          CHERYL: "Cheryl Layer, president ",
          STEPHANEAL: "Stéphane Alary, president",
          SCOTT: "Scott Judd, president",
          PATRICK: "Patrick Sullivan, president",
          DANIEL: "Daniel Patry, vice-president",
          CITIZENS: "Engaged Citizens",
          SHAUGHN: "Shaughn McArthur, Climate and social policy advocate",
          CARYL: "Caryl Green, former warden of the MRC des Collines and former mayor of Chelsea, advisor to the office of the Member of Parliament for Pontiac",
          FRANCIS: "Francis Beausoleil, Municipal Councilor of La Pêche and Special Assistant to the Member of Parliament for Pontiac ",
          CHEF: "Aboriginal Chief",





    
        },
    
        FR: {
          TITLE: "PARTENAIRES",
          T1: "L’initiative pour un Outaouais vert et prospère est celle des élus, organisations et citoyens engagés suivants :",
          BUTTON2: "Retourner à la page d'acceuil",
          T2: "Et Autres Partenaires :",
          Comity: "Comité des élus de la région de l’Outaouais",
          CHAMBER: "Chambre des communes du Canada",
          SOPHIE: "Sophie Chatel, députée de Pontiac ",
          GREG: "Greg Fergus, député de Hull-Aylmer ",
          STEPHANE: "Stéphane Lauzon, député de Argenteuil—La Petite-Nation",
          STEVEN:"Steven MacKinnon, député de Gatineau",
          ASSEMBLY: "Assemblée Nationale du Québec ",
          ROBERT: "Robert Bussière, député de Gatineau ",
          ANDRE: "André Fortin, député de Pontiac ",
          MARYSE: "Maryse Gaudreault, député de Hull",
          MATHIEULE: "Mathieu Lévesque, député de Chapleau",
          MATHIEULA: "Mathieu Lacombe, député de Papineau",
          MUNICIPALITY: "Municipalités Régionales de Compté",
          MARC: "Marc Carrière, Préfet de la MRC des Collines ",
          CHANTAL: "Chantal Lamarche, Préfète MRC de la Vallée-de-la-Gatineau",
          JANE: "Jane Toller, Préfète de la MRC Pontiac",
          TONY: "Tony Wawatie, Chef du conseil de la Nation Anishinabe de Kitigan Zibi",
          DYLAN: "Dylan Whiteduck, Chef Kitigan Zibi Anishinabeg",
          COMITE: "Comité des organismes et citoyens de l’Outaouais",
          ORGANISME: "Organismes partenaires",
          BENOIT: "Benoît Délage, directeur général",
          PAUL: "Paul Turpin, consultant",
          TOURISM: "Tourisme Outaouais ",
          JULIE: "Julie Kinnear, directrice générale",
          CHCOM: "Chambre de commerce de Vallée-de-la-Gatineau ",
          MIKE: "Mike McConnery, président ",
          REMI: "Rémi Lafond, directeur général",
          OLAF: "Olaf Jensen, Directeur ",
          RHONDA: "Rhonda Perry, directrice générale",
          CHERYL: "Cheryl Layer, présidente ",
          STEPHANEAL: "Stéphane Alary, président",
          SCOTT: "Scott Judd, président",
          PATRICK: "Patrick Sullivan, président",
          DANIEL: "Daniel Patry, vice-président",
          CITIZENS: "Citoyens engagés",
          SHAUGHN: "Shaughn McArthur, Défenseur des politiques climatiques et sociales ",
          CARYL: "Caryl Green, ancienne préfète de la MRC des Collines et ancienne mairesse de Chelsea, conseillère au bureau de la députée de Pontiac",
          FRANCIS: "Francis Beausoleil, conseillé municipal de La Pêche et adjoint spécial de la députée de Pontiac",
          CHEF: "Chef autochtones"
         
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

      const [Representative, showRepresentative] = useState("hidden");
      const [Organisation, showOrganisations] = useState("hidden");
      const [Repclicked, changeRepBackground] = useState("notRepClicked");
      const [ORG, changeOrgBackground] = useState("notOrgClicked");
      let RepClasses = `PartnerList ${Repclicked}`;
      let OrgClasses = `PartnerList ${ORG}`;

      const handleClick = (name) => {
        if(name === "representative"){
          if(Representative === "hidden"){
            showRepresentative("show")
            changeRepBackground("Repclicked")
          }
          else {
            showRepresentative("hidden")
            changeRepBackground("notRepClicked")
          }


        }

        else {
          if(Organisation === "hidden"){
            showOrganisations("show")
            changeOrgBackground("OrgClicked")
          }
          else {
            showOrganisations("hidden")
            changeOrgBackground("notOrgClicked")
          }
          

        }
      }

    

    return (
        <main className="MainContent">
            <ImageBanner title= {content.TITLE}/>
            <div className="AboutContainer">
                <h2>{content.T1}</h2>
                
                <h3 className={RepClasses} onClick={() => handleClick("representative")}>{content.Comity}</h3>
                <div className={Representative}>
                  <h4 className="Padding10">{content.CHAMBER}</h4>
                  <ul className="RepresentativeContainer">
                      <li>{content.SOPHIE}</li>
                      <li>{content.GREG}</li>
                      <li>{content.STEPHANE}</li>
                      <li>{content.STEVEN}</li>
                  </ul>
                  <h4 className="Padding10">{content.ASSEMBLY}</h4>
                  <ul className="RepresentativeContainer">
                      <li>{content.ROBERT}</li>
                      <li>{content.ANDRE}</li>
                      <li>{content.MARYSE}</li>
                      <li>{content.MATHIEULE}</li>
                      <li>{content.MATHIEULA}</li>
                  </ul>
                  <h4 className="Padding10">{content.MUNICIPALITY}</h4>
                  <ul className="RepresentativeContainer">
                      <li>{content.MARC}</li>
                      <li>{content.CHANTAL}</li>
                      <li>{content.JANE}</li>
                  </ul>
                  <h4 className="Padding10">{content.CHEF}</h4>
                  <ul className="RepresentativeContainer">
                      <li>{content.TONY}</li>
                      <li>{content.DYLAN}</li>
                  </ul>
                </div>

                

                <h3 className={OrgClasses} onClick={() => handleClick("")}>{content.COMITE}</h3>
                <div className={Organisation}>
                  <h4 className="Padding10">{content.ORGANISME}</h4>
                  
                  <h5 className="Padding15">Cocoriko</h5>
                  <ul className="RepresentativeContainer">
                      <li>Sébastien Lemay</li>
                  </ul>

                  <h5 className="Padding15">CREDDO</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.BENOIT}</li>
                      <li>{content.PAUL}</li>
                  </ul>
                  <h5 className="Padding15">{content.TOURISM}</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.JULIE}</li>
                  </ul>
                  <h5 className="Padding15">ALUS Outaouais</h5>
                  <ul className="RepresentativeContainer">
                      <li>Maria José Maezo</li>
                  </ul>
      
                  <h5 className="Padding15">{content.CHCOM}</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.MIKE}</li>
                      <li>{content.REMI}</li>
                  </ul>
                  
                  <h5 className="Padding15">ACRE</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.OLAF}</li>
                  </ul>
                  
                  <h5 className="Padding15">SADC Pontiac</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.RHONDA}</li>
                  </ul>
                  
                  <h5 className="Padding15">UPA des Collines de l'Outaouais</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.CHERYL}</li>
                  </ul>

                  <h5 className="Padding15">UPA Outaouais-Laurentides</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.STEPHANEAL}</li>
                      <li>Suzanne Laplante</li>
                  </ul>

                  <h5 className="Padding15">UPA du Pontiac</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.SCOTT}</li>
                  </ul>

                  <h5 className="Padding15">UPA Vallée-de-la-Gatineau</h5>
                  <ul className="RepresentativeContainer">
                      <li>{content.PATRICK}</li>
                      <li>{content.DANIEL}</li>
                  </ul>

                  <h4 className="Padding10">{content.CITIZENS}</h4>
                  <ul className="RepresentativeContainer">
                      <li>{content.SHAUGHN}</li>
                      <li>{content.CARYL}</li>
                      <li>{content.FRANCIS}</li>
                  </ul>
                </div>



                
                <Link to="/" className="HomeLink ReturnButton"><p className='HomeButton'>{content.BUTTON2}</p></Link>
            </div>
            
        </main>
    )
}

export default Partners