import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"
import DocumentBox from "./DocumentBox"

function AgricultureConsultation(props) {
    let content = {
        EN: {
          TITLE: "DURABLE AGRICULTURE",
          T1: "Roundtable - Green and Prosperous Outaouais (Pontiac) 2040",
          TIME: "Monday, January 31, 2022 from 9:30 am to noon",
          T2: "General theme",
          P1: "Agriculture in 2040 in the federal riding of Pontiac and the Outaouais in an era of climate change. ",
          T3: "Sub-theme",
          P2: "Soil health and conservation on arable and pasture lands through the adoption of responsible and efficient agro-environmental practices.",
          T4: "Participants",
          LI1: "Farmers from the Pontiac riding who wish to make a proactive transition by adopting responsible and efficient agro-environmental practices.",
          LI2: "Agricultural experts who contribute or wish to contribute to the adoption of agri-environmental practices ",
          LI3: "Researchers, students and citizens who are interested in agri-environmental practices",
          LI4: "Actors in the municipal, regional, provincial and federal political sphere who wish to support farmers in the adoption of responsible and efficient agri-environmental practices in response to climate change issues",
          T5: "Highlights",
          P3: "Pontiac MP Sophie Chatel, and roundtable co-chair Shaugh McArthur, launched the discussion by noting how important it is to look beyond the horizon of immediate concerns in order to prepare farmers for the future impacts of climate change. Thankfully farmers are innovators and they can lead the effort to enhance their communities’ resiliency. ",
          P4: "This roundtable on sustainable agriculture represents the first in a series that will examine various issues ranging from forestry, green construction and finance, transportation, and economic development.",
          T6: "Minister Marie-Claude Bibeau",
          P5: "The Minister of Agriculture and Agri-Food, the Honourable Marie-Claude Bibeau, reminded participants that the federal government's primary responsibilities are for international trade, research, development and innovation, as well as providing financial support to provinces and farmers. She also discussed the principles of the Guelph Declaration, an agreement signed by all the provincial agriculture ministers that will become the framework for future programs and partnerships to promote sustainable agriculture and enhance international competitivity. The Minister concluded by answering audience questions regarding various programs, collaboration with local provinces and stakeholders, and the importance of beef farming for Pontiac’s economy.",
          T7: "Experts :",
          P6: "Sarah Delisle, climate change project coordinator at the Conseil pour le développement de l'agriculture du Québec (Agriclimat), and François Quesnel, agri-environmental advisor at the Club conseil Profit-eau-sol, presented the Agriclimat program, as well as climate models for Pontiac. Climate change is already being felt across Pontiac and will become more pronounced by 2050: temperatures will increase by 2.3 degrees Celsius, snow cover will last fewer months, and the snow depth will decrease by more than 40%. Although the growing season for crops will increase by 17 days, summers will have 28 days above 30 degrees Celsius, which increases the risk of drought, and accentuates the region's water deficit. This forecast present certain opportunities in terms of longer growing season, but also greater risks of crop failure. Water management and soil erosion prevention will be critical. There will be more invasive weeds and insects to manage. Farmers should explore alternative crops that can better withstand longer periods of drought and experiment with new systems for rotation.",
          P7: "Stéphane Alary, president of the Fédération de l'UPA Outaouais-Laurentides, and Maria-José Maezo, agri-environmental project coordinator at the UPA, presented the ALUS (Alternative Land Use Service) program. This program compensates farmers who implement new sustainable practices for agricultural land, including tree planting, revitalizing riparian areas and protecting wetlands. ALUS financially compensates farmers who implement long-term solutions, providing them a stable cash flow.",
          P8: "Brent Preston and Virginie Picard-Lavallée, Director and Project Manager for Farmers for Climate Solutions, also introduced their organization. This coalition representing over 20,000 farmers aims to demonstrate that farmers are key players in the fight against climate change and can play part in a larger solution. Most farmers in Eastern Canada are soil carbon emitters, mostly due to the overuse of nitrogen fertilizers. The coalition proposes quick fixes for a more sustainable agriculture, including reducing nitrogen fertilizers, using cover crops, rotating pastures, incorporating renewable energy on the farm and protecting wetlands.",
          T8: "Discussion Groups:",
          P9: "The focus groups allowed farmers and experts to exchange views on a range of issues. They discussed chemical fertilizer reduction techniques, carbon credit systems and the importance of a concerted effort involving farmers and consumers, but also municipalities and MRCs. ",
          P10: "Farmers have raised the issue that it is difficult to know where to turn for those desiring to implement good land practices. Wouldn't it be possible to establish a one-stop shop to facilitate the implementation of sustainable farming practices and enhance communication between actors in the agricultural sector? Also, how can we ensure that the environmental impact indicators of a farm are the same throughout the region, including between Quebec and Ontario?",
          D1NAME: "Presentation on Climate and Impacts",
          D1URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/3-2022-01-27-Presentation-Climat-et-Impacts.pdf",
          DBUTTON: "Consulter!",
          D2NAME: "4-ALUS_UPA_Green&ProsperousOutaouais",
          D2URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/4-ALUS_UPA_GreenProsperousOutaouais.pdf",
          D3NAME: "Comparative table and porpsitional issues of the round table",
          D3URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/Tableau-comparatif-et-propositions-issues-de-la-table-ronde.pdf",
          BUTTON3: "Return to Home Page",


         
    
        },
    
        FR: {
          TITLE: "AGRICULTURE DURABLE",
          T1: "Table ronde – Outaouais (Pontiac) vert et prospère 2040",
          TIME: "Le lundi 31 janvier 2022 de 9 h 30 à midi",
          T2: "Thème général",
          P1: "L’agriculture en 2040 dans la circonscription fédérale de Pontiac et l’Outaouais, à l’ère des changements climatiques. ",
          T3: "Sous-thème",
          P2: "La santé et la conservation des sols des terres cultivables (grandes cultures et pâturages) par l’adoption de pratiques agroenvironnementales responsables et performantes.",
          T4: "Participants",
          LI1: "Agriculteurs et agricultrices de la circonscription de Pontiac qui désirent opérer une transition proactive par l’adoption de pratiques agroenvironnementales responsables et performantes",
          LI2: "Experts en agriculture qui contribuent ou désirent contribuer à l’adoption de pratiques agroenvironnementales ",
          LI3: "Chercheurs, chercheuses, étudiants, étudiantes, citoyens, citoyennes qui ont un intérêt pour les pratiques agroenvironnementales",
          LI4: "Acteurs de la sphère politique municipale, régionale, provinciale et fédérale qui désirent soutenir les agriculteurs et agricultrices dans l’adoption de pratiques agroenvironnementales responsables et performantes en réponse aux enjeux liés aux changements climatiques",
          T5: "Faits saillants",
          P3: "La députée de Pontiac, Sophie Chatel, ainsi que le co-président de la table ronde, Shaughn McArthur, ont débuté la discussion en indiquant qu’il est important de regarder au-delà des menaces et enjeux immédiats et de se projeter dans le futur afin de se préparer dès maintenant aux impacts du changement climatique. Les agriculteurs sont des innovateurs et les communautés qui sont fondées sur l'innovation sont résilientes. ",
          P4: "Cette table ronde sur l’agriculture durable est la première d'une série d'événements visant à aborder d'autres questions telles que la foresterie verte, les finances vertes, les bâtiments verts, le transport, et le développement économique vert.",
          T6: "Ministre Marie-Claude Bibeau",
          P5: "La ministre de l’Agriculture et de l’Agroalimentaire, l’honorable Marie-Claude Bibeau, a rappelé aux participants que les responsabilités du gouvernement fédéral sont principalement les suivantes : le commerce international, la recherche, le développement et l’innovation ainsi que les transferts aux provinces et les programmes de soutien financier aux agriculteurs. Elle a également abordé les principes de la déclaration de Guelph, à savoir un accord signé par tous les ministres de l'agriculture de toutes les provinces qui deviendra un cadre pour les actions et partenariats futurs visant à aborder l'agriculture durable et la concurrence extérieure. Enfin, la ministre a répondu à des questions de l’auditoire concernant la pérennité de certains programmes, la collaboration avec les provinces et acteurs locaux ainsi que l’importance de l’agriculture bovine dans l’économie du Pontiac.",
          T7: "Experts",
          P6: "Sarah Delisle, coordonnatrice projet changements climatiques au Conseil pour le développement de l’agriculture du Québec (Agriclimat), et François Quesnel, conseiller en agroenvironnement au Club conseil Profit-eau-sol, ont présenté le programme Agriclimat ainsi que les prévisions météorologiques d’ici 2050 pour le Pontiac. Les changements climatiques se font déjà sentir dans la région, et ils vont s’accentuer : augmentation des températures de 2,3 degrés Celsius, période d'enneigement plus courte, diminution de l’épaisseur de neige de plus de 40%. Bien que la saison de croissance des cultures augmentera de 17 jours, les étés compteront 28 jours au-dessus de 30 degrés Celsius, ce qui accroît le risque de sécheresse et accentue le déficit hydrique de la région. Cela signifie qu'il y a des avantages mais aussi des risques plus importants à prévoir. La gestion de l'eau et la prévention de l'érosion des sols deviendront essentielles. Il y aura davantage de mauvaises herbes et d'insectes envahissants qu'il faudra gérer. Les plantes alternatives qui peuvent supporter de plus longues périodes de sécheresse devraient être considérées comme des cultures de rente ou dans les rotations de cultures.",
          P7: "Stéphane Alary, président de la Fédération de l’UPA Outaouais-Laurentides, ainsi que Maria-José Maezo, coordonnatrice de projets en agroenvironnement à l’UPA, ont fait la présentation du programme ALUS (Alternative Land Use Service). Ce programme indemnise les agriculteurs qui mettent en place de nouvelles pratiques durables pour l'utilisation des terres agricoles, dont notamment la plantation d'arbres, la revitalisation des zones riveraines et la protection des zones humides. ALUS compense financièrement les agriculteurs qui mettent en place des solutions à long terme, ce qui assure la stabilité des flux de trésorerie.",
          P8: "Brent Preston et Virginie Picard-Lavallée, respectivement directeur et chargée de projet pour Farmers for Climate Solutions, ont présenté l’organisation. Cette coalition, comptant plus de 20 000 agriculteurs, a pour objectif de démontrer que les agriculteurs sont des acteurs essentiels de la lutte contre le changement climatique et font partie de la solution. La plupart des agriculteurs de l'est du Canada sont des émetteurs de carbone dans le sol, notamment en raison de la surutilisation d'engrais azotés. La coalition propose des solutions rapides pour une agriculture plus durable, à savoir la réduction de l’utilisation d’engrais azotés, l’utilisation de cultures de couverture, la rotation des pâturages, l’incorporation des énergies renouvelables à la ferme et la protection des milieux humides.",
          T8: "Groupes de discussion",
          P9: "Les groupes de discussion ont permis aux agriculteurs et aux experts d’échanger entre eux sur plusieurs questions. Ils ont notamment discuté de techniques de réduction des engrais chimiques, des systèmes de crédit carbone ainsi que de l’importance d’un effort concerté incluant les agriculteurs et les consommateurs, mais également les municipalités et les MRC",
          P10: "Les agriculteurs ont soulevé l’enjeu qu’il est difficile de savoir vers qui se tourner pour mettre de bonnes pratiques en place. N’y aurait-il pas une possibilité d’établir un guichet unique pour faciliter la mise en place de ces pratiques durables et la communication entre les différents acteurs concernés? Également, comment s’assurer que les indicateurs sur l’impact environnement d’une ferme soient les mêmes partout dans la région, incluant entre le Québec et l’Ontario?",
          D1NAME: "Presentation Climat et Impacts",
          D1URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/3-2022-01-27-Presentation-Climat-et-Impacts.pdf",
          DBUTTON: "Consult!",
          D2NAME: "ALUS UPA Outaouais Vert et Prospère",
          D2URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/ALUS_UPA_OutaouaisVertetProspere.pdf",
          D3NAME: "Tableau comparatif et propositions issues de la table ronde",
          D3URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/Tableau-comparatif-et-propositions-issues-de-la-table-ronde.pdf",
          BUTTON3: "Retourner à la page d'acceuil",
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return ( 
    <main className="MainSecondaryContent">
        <ImageBanner className= "noMargin" title= {content.TITLE}/>
        <div className="secPageContent">
        <div className="AboutContainer">
            <h1 className="RoundTableTitle">{content.T1}</h1>
            <p>{content.TIME}</p>
                <article className="RoundTableArticle">
                    <div className="tableContainer">
                        <div className="asideVideo">
                            <h3>{content.T2}</h3>
                            <p>{content.P1}</p>
                            <h3>{content.T3}</h3>
                            <p>{content.P2}</p>
                            <h3>{content.T4}</h3>
                            <ul className="TableParticipants">
                                <li>{content.LI1}</li>
                                <li>{content.LI2}</li>
                                <li>{content.LI3}</li>
                                <li>{content.LI4}</li>
                            </ul>
                        </div>
                        <div className="RoundTableVideo">
                        <iframe className="RoundTableVideo" width="560" height="315" src="https://www.youtube.com/embed/9M1Sq59hWIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <h3>{content.T5}</h3>
                    <p>{content.P3}</p>
                    <p>{content.P4}</p>
                    <h3>{content.T6}</h3>
                    <p>{content.P5}</p>
                    <h3>{content.T7}</h3>
                    <p>{content.P6}</p>
                    <p>{content.P7}</p>
                    <p>{content.P8}</p>
                    <h3>{content.T8}</h3>
                    <p>{content.P9}</p>
                    <p>{content.P10}</p>

                </article>
                
            <section className="DocumentSection">
                <h2 className="documentTitle">Documents :</h2>
                <DocumentBox 
                language={props.language} 
                url={content.D1URL}
                name = {content.D1NAME} 
                button= {content.DBUTTON} 
                />
                <DocumentBox 
                language={props.language} 
                url={content.D2URL}
                name = {content.D2NAME} 
                button= {content.DBUTTON} 
                />
                <DocumentBox 
                language={props.language} 
                url={content.D3URL}
                name = {content.D3NAME} 
                button= {content.DBUTTON} 
                />
            </section>

      </div>
      <Link to="/" className="HomeLink ReturnButton"><p className='HomeButton'>{content.BUTTON3}</p></Link>
    </div>
</main>
)

}

export default AgricultureConsultation
