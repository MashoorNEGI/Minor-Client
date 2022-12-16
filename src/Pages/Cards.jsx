import "../shared/cards/cards.scss"
import Section from "../shared/cards/Cards"
import Header from "../shared/header/Header"
import Footer from "../shared/footer/Footer"
function Cards() {
    const data = JSON.parse(localStorage.getItem("token") || "[]")
    const record = data.userlogin.courses
    const Name = data.userlogin.Fac_Name

    return (
        <>
            <Header />
            {
                record ?
                    <>
                        <h1 className="text-center mt-5">Wellcome back {Name} !</h1>
                        <div className="card-container">
                            <div className="row">
                                {
                                    record.map((data, index) =>
                                        <div key={index} className="col-sm">
                                            <Section link="/attendance-data" header={data} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </>
                    : <div className="p-5 rounded" style={{ background: 'rgba(255, 0, 0, 0.195)', margin: '20px', backdropFilter: 'blur(2px)' }}>
                        <h1 style={{ color: 'rgba(225, 109, 109, 0.779)' }}>Data Not Found</h1>
                        <p className="lead">Faculty that logged in either he/she is not valid or hasn't any course alloted. Contact to over team</p>
                        <a className="btn btn-light" style={{ background: 'rgb(255,0,0,0.200)' }} href="/Contact" role="button">Contact Us</a>
                    </div>
            }
            <Footer />

            {/* <div class="Neon Neon-theme-dragdropbox">
                <input style={{'z-index': '999', opacity: '0'; width: 320px; height: 200px; position: absolute; right: 0px; left: 0px; margin-right: auto; margin-left: auto;}}" name="files[]" id="filer_input2" multiple="multiple" type="file" />
                <div class="Neon-input-dragDrop"><div class="Neon-input-inner"><div class="Neon-input-icon"><i class="fa fa-file-image-o"></i></div><div class="Neon-input-text"><h3>Drag&amp;Drop files here</h3> <span style="display:inline-block; margin: 15px 0">or</span></div><a class="Neon-input-choose-btn blue">Browse Files</a></div></div>
            </div> */}
        </>
    );
}

export default Cards;