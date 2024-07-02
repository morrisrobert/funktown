const About =()=> {

    return (
        <main className="main" id="aboutMain">
            <div className="container">
                <h1 className="all" id="all">All aboard the MotherShip!!</h1>
            </div>
                <div className="aboutSec" id="aboutSec1">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title" id="card12">All about us here at (F.M.R)</h5>
                                <p class="card-text" id="boogie">AQUABOOGIE BABY! Welcome to the best and funkiest place for all things funky and loud! Established in 1989 we here at FMR love selling our products to all of our fans and lovers of music. We also put on shows to showcase up and coming acts not only in the states but globally. Below are some of the places we've landed on our cosmic journey! If you love music then you will love us and this site! We have vinyl records from some of our favorite artists to ever grace our planet dig it. From Parliment to Sly and the Family Stone we have all you need to get down and get up on the good foot any day of the week baby. THE SHIP WELCOMES YOU ALL!
                                </p>
                                <p class="card-text"><small class="text-muted" id="aka">-ROB a.k.a BobbyMO(founding partner)</small></p>
                        </div>
                            <img src="https://dev-essap.s3.amazonaws.com/uploads/2021/12/863A6947-587x281.webp" class="card-img-bottom" alt="dancing to rock"/>
                    </div>
                </div>
                <div>
                    <p className="out" id="out">Look at some of the places we've landed the MotherShip and rocked out!</p>
                </div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://bluesfestivalguide.com/wp-content/uploads/2015/05/Jackson-Rhythm-and-Blues-Festival-1.jpg" class="d-block w-100" alt="jackson, ms"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="h1">Jackson, MS</h5>
                            <p className="p1"></p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.explorebigsky.com/wp-content/uploads/2017/08/Con-Brio-Press-Photo-2017-3_SMALL.jpg" class="d-block w-100" alt="new orleans, la"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="h2">New Orleans, LA</h5>
                            <p className="p2"></p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.bpmcdn.com/f/files/salmonarm/import/2023-01/31589914_web1_220824-SAA-Photo-gallery-Roots-and-Blues-2022_18.jpg" class="d-block w-100" alt="denver, co"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="h3">Denver, CO</h5>
                            <p className="p3"></p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346047168&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
        </main>
    )
}




export default About