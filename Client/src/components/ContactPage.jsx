import ImageBanner from "./ImageBanner"

function ContactPage(props) {


    return (
        <main className="MainContent">
            <ImageBanner title= "CONTACT"/>

            <div className="EmailAddress">
                <strong>email adress: </strong> sophie.chatel@parl.gc.ca
            </div>

            <div className="AdressContainer">
                <div className="OfficeAddress">
                    <h2>Main Office - Campbell's Bay</h2>
                    <p className="NoMargin">110, rue Front</p>
                    <p className="NoMargin">Campbell's Bay, Quebec</p>
                    <p className="NoMargin">J0X 1K0</p>
                    <p className="NoBottomMargin">Telephone :</p>
                    <p className="NoMargin">819-648-2138</p>
                    <p className="NoBottomMargin">Toll free Number :</p>
                    <p className="NoMargin">819-648-2181</p>
                </div>
                <div className="OfficeAddress">
                <h2>Gracefield</h2>
                    <p className="NoMargin">87-B St Joseph Street</p>
                    <p className="NoMargin">Gracefield, Quebec</p>
                    <p className="NoMargin">J0X 1W0</p>
                    <p className="NoBottomMargin">Telephone :</p>
                    <p className="NoMargin">819-463-0112</p>
                    <p className="NoBottomMargin">Fax :</p>
                    <p className="NoMargin">819-463-2554</p>
                </div>
            </div>

        </main>
    )
}

export default ContactPage
