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
          P3: "Pontiac MP Sophie Chatel, and roundtable co-chair Shaugh McArthur, launched the discussion by noting how important it is to look beyond the horizon of immediate concerns in order to prepare farmers for the future impacts of climate change. Thankfully farmers are innovators and they can lead the effort to enhance their communitiesâ€™ resiliency. ",
          P4: "This roundtable on sustainable agriculture represents the first in a series that will examine various issues ranging from forestry, green construction and finance, transportation, and economic development.",
          T6: "Minister Marie-Claude Bibeau",
          P5: "The Minister of Agriculture and Agri-Food, the Honourable Marie-Claude Bibeau, reminded participants that the federal government's primary responsibilities are for international trade, research, development and innovation, as well as providing financial support to provinces and farmers. She also discussed the principles of the Guelph Declaration, an agreement signed by all the provincial agriculture ministers that will become the framework for future programs and partnerships to promote sustainable agriculture and enhance international competitivity. The Minister concluded by answering audience questions regarding various programs, collaboration with local provinces and stakeholders, and the importance of beef farming for Pontiacâ€™s economy.",
          T7: "Experts :",
          P6: "Sarah Delisle, climate change project coordinator at the Conseil pour le dĂ©veloppement de l'agriculture du QuĂ©bec (Agriclimat), and FranĂ§ois Quesnel, agri-environmental advisor at the Club conseil Profit-eau-sol, presented the Agriclimat program, as well as climate models for Pontiac. Climate change is already being felt across Pontiac and will become more pronounced by 2050: temperatures will increase by 2.3 degrees Celsius, snow cover will last fewer months, and the snow depth will decrease by more than 40%. Although the growing season for crops will increase by 17 days, summers will have 28 days above 30 degrees Celsius, which increases the risk of drought, and accentuates the region's water deficit. This forecast present certain opportunities in terms of longer growing season, but also greater risks of crop failure. Water management and soil erosion prevention will be critical. There will be more invasive weeds and insects to manage. Farmers should explore alternative crops that can better withstand longer periods of drought and experiment with new systems for rotation.",
          P7: "StĂ©phane Alary, president of the FĂ©dĂ©ration de l'UPA Outaouais-Laurentides, and Maria-JosĂ© Maezo, agri-environmental project coordinator at the UPA, presented the ALUS (Alternative Land Use Service) program. This program compensates farmers who implement new sustainable practices for agricultural land, including tree planting, revitalizing riparian areas and protecting wetlands. ALUS financially compensates farmers who implement long-term solutions, providing them a stable cash flow.",
          P8: "Brent Preston and Virginie Picard-LavallĂ©e, Director and Project Manager for Farmers for Climate Solutions, also introduced their organization. This coalition representing over 20,000 farmers aims to demonstrate that farmers are key players in the fight against climate change and can play part in a larger solution. Most farmers in Eastern Canada are soil carbon emitters, mostly due to the overuse of nitrogen fertilizers. The coalition proposes quick fixes for a more sustainable agriculture, including reducing nitrogen fertilizers, using cover crops, rotating pastures, incorporating renewable energy on the farm and protecting wetlands.",
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
          T1: "Table ronde â€“ Outaouais (Pontiac) vert et prospĂ¨re 2040",
          TIME: "Le lundi 31 janvier 2022 de 9 h 30 Ă  midi",
          T2: "ThĂ¨me gĂ©nĂ©ral",
          P1: "Lâ€™agriculture en 2040 dans la circonscription fĂ©dĂ©rale de Pontiac et lâ€™Outaouais, Ă  lâ€™Ă¨re des changements climatiques. ",
          T3: "Sous-thĂ¨me",
          P2: "La santĂ© et la conservation des sols des terres cultivables (grandes cultures et pĂ˘turages) par lâ€™adoption de pratiques agroenvironnementales responsables et performantes.",
          T4: "Participants",
          LI1: "Agriculteurs et agricultrices de la circonscription de Pontiac qui dĂ©sirent opĂ©rer une transition proactive par lâ€™adoption de pratiques agroenvironnementales responsables et performantes",
          LI2: "Experts en agriculture qui contribuent ou dĂ©sirent contribuer Ă  lâ€™adoption de pratiques agroenvironnementales ",
          LI3: "Chercheurs, chercheuses, Ă©tudiants, Ă©tudiantes, citoyens, citoyennes qui ont un intĂ©rĂŞt pour les pratiques agroenvironnementales",
          LI4: "Acteurs de la sphĂ¨re politique municipale, rĂ©gionale, provinciale et fĂ©dĂ©rale qui dĂ©sirent soutenir les agriculteurs et agricultrices dans lâ€™adoption de pratiques agroenvironnementales responsables et performantes en rĂ©ponse aux enjeux liĂ©s aux changements climatiques",
          T5: "Faits saillants",
          P3: "La dĂ©putĂ©e de Pontiac, Sophie Chatel, ainsi que le co-prĂ©sident de la table ronde, Shaughn McArthur, ont dĂ©butĂ© la discussion en indiquant quâ€™il est important de regarder au-delĂ  des menaces et enjeux immĂ©diats et de se projeter dans le futur afin de se prĂ©parer dĂ¨s maintenant aux impacts du changement climatique. Les agriculteurs sont des innovateurs et les communautĂ©s qui sont fondĂ©es sur l'innovation sont rĂ©silientes. ",
          P4: "Cette table ronde sur lâ€™agriculture durable est la premiĂ¨re d'une sĂ©rie d'Ă©vĂ©nements visant Ă  aborder d'autres questions telles que la foresterie verte, les finances vertes, les bĂ˘timents verts, le transport, et le dĂ©veloppement Ă©conomique vert.",
          T6: "Ministre Marie-Claude Bibeau",
          P5: "La ministre de lâ€™Agriculture et de lâ€™Agroalimentaire, lâ€™honorable Marie-Claude Bibeau, a rappelĂ© aux participants que les responsabilitĂ©s du gouvernement fĂ©dĂ©ral sont principalement les suivantes : le commerce international, la recherche, le dĂ©veloppement et lâ€™innovation ainsi que les transferts aux provinces et les programmes de soutien financier aux agriculteurs. Elle a Ă©galement abordĂ© les principes de la dĂ©claration de Guelph, Ă  savoir un accord signĂ© par tous les ministres de l'agriculture de toutes les provinces qui deviendra un cadre pour les actions et partenariats futurs visant Ă  aborder l'agriculture durable et la concurrence extĂ©rieure. Enfin, la ministre a rĂ©pondu Ă  des questions de lâ€™auditoire concernant la pĂ©rennitĂ© de certains programmes, la collaboration avec les provinces et acteurs locaux ainsi que lâ€™importance de lâ€™agriculture bovine dans lâ€™Ă©conomie du Pontiac.",
          T7: "Experts",
          P6: "Sarah Delisle, coordonnatrice projet changements climatiques au Conseil pour le dĂ©veloppement de lâ€™agriculture du QuĂ©bec (Agriclimat), et FranĂ§ois Quesnel, conseiller en agroenvironnement au Club conseil Profit-eau-sol, ont prĂ©sentĂ© le programme Agriclimat ainsi que les prĂ©visions mĂ©tĂ©orologiques dâ€™ici 2050 pour le Pontiac. Les changements climatiques se font dĂ©jĂ  sentir dans la rĂ©gion, et ils vont sâ€™accentuer : augmentation des tempĂ©ratures de 2,3 degrĂ©s Celsius, pĂ©riode d'enneigement plus courte, diminution de lâ€™Ă©paisseur de neige de plus de 40%. Bien que la saison de croissance des cultures augmentera de 17 jours, les Ă©tĂ©s compteront 28 jours au-dessus de 30 degrĂ©s Celsius, ce qui accroĂ®t le risque de sĂ©cheresse et accentue le dĂ©ficit hydrique de la rĂ©gion. Cela signifie qu'il y a des avantages mais aussi des risques plus importants Ă  prĂ©voir. La gestion de l'eau et la prĂ©vention de l'Ă©rosion des sols deviendront essentielles. Il y aura davantage de mauvaises herbes et d'insectes envahissants qu'il faudra gĂ©rer. Les plantes alternatives qui peuvent supporter de plus longues pĂ©riodes de sĂ©cheresse devraient ĂŞtre considĂ©rĂ©es comme des cultures de rente ou dans les rotations de cultures.",
          P7: "StĂ©phane Alary, prĂ©sident de la FĂ©dĂ©ration de lâ€™UPA Outaouais-Laurentides, ainsi que Maria-JosĂ© Maezo, coordonnatrice de projets en agroenvironnement Ă  lâ€™UPA, ont fait la prĂ©sentation du programme ALUS (Alternative Land Use Service). Ce programme indemnise les agriculteurs qui mettent en place de nouvelles pratiques durables pour l'utilisation des terres agricoles, dont notamment la plantation d'arbres, la revitalisation des zones riveraines et la protection des zones humides. ALUS compense financiĂ¨rement les agriculteurs qui mettent en place des solutions Ă  long terme, ce qui assure la stabilitĂ© des flux de trĂ©sorerie.",
          P8: "Brent Preston et Virginie Picard-LavallĂ©e, respectivement directeur et chargĂ©e de projet pour Farmers for Climate Solutions, ont prĂ©sentĂ© lâ€™organisation. Cette coalition, comptant plus de 20 000 agriculteurs, a pour objectif de dĂ©montrer que les agriculteurs sont des acteurs essentiels de la lutte contre le changement climatique et font partie de la solution. La plupart des agriculteurs de l'est du Canada sont des Ă©metteurs de carbone dans le sol, notamment en raison de la surutilisation d'engrais azotĂ©s. La coalition propose des solutions rapides pour une agriculture plus durable, Ă  savoir la rĂ©duction de lâ€™utilisation dâ€™engrais azotĂ©s, lâ€™utilisation de cultures de couverture, la rotation des pĂ˘turages, lâ€™incorporation des Ă©nergies renouvelables Ă  la ferme et la protection des milieux humides.",
          T8: "Groupes de discussion",
          P9: "Les groupes de discussion ont permis aux agriculteurs et aux experts dâ€™Ă©changer entre eux sur plusieurs questions. Ils ont notamment discutĂ© de techniques de rĂ©duction des engrais chimiques, des systĂ¨mes de crĂ©dit carbone ainsi que de lâ€™importance dâ€™un effort concertĂ© incluant les agriculteurs et les consommateurs, mais Ă©galement les municipalitĂ©s et les MRC",
          P10: "Les agriculteurs ont soulevĂ© lâ€™enjeu quâ€™il est difficile de savoir vers qui se tourner pour mettre de bonnes pratiques en place. Nâ€™y aurait-il pas une possibilitĂ© dâ€™Ă©tablir un guichet unique pour faciliter la mise en place de ces pratiques durables et la communication entre les diffĂ©rents acteurs concernĂ©s? Ă‰galement, comment sâ€™assurer que les indicateurs sur lâ€™impact environnement dâ€™une ferme soient les mĂŞmes partout dans la rĂ©gion, incluant entre le QuĂ©bec et lâ€™Ontario?",
          D1NAME: "Presentation Climat et Impacts",
          D1URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/3-2022-01-27-Presentation-Climat-et-Impacts.pdf",
          DBUTTON: "Consult!",
          D2NAME: "ALUS UPA Outaouais Vert et ProspĂ¨re",
          D2URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/ALUS_UPA_OutaouaisVertetProspere.pdf",
          D3NAME: "Tableau comparatif et propositions issues de la table ronde",
          D3URL: "http://sophiechatel.libparl.ca/wp-content/uploads/sites/171/2022/02/Tableau-comparatif-et-propositions-issues-de-la-table-ronde.pdf",
          BUTTON3: "Retourner Ă  la page d'acceuil",
    
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
