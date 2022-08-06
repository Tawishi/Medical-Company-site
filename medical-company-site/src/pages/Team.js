import data from './dev'
import Developer from './Developers';
import './dev.css'

function Team() {
    var btn = document.getElementsByClassName("btn");
    var slide = document.getElementById("slide");

    function setActive(item) {
        for (let i = 0; i < 4; i++) {
            btn[i].classNameList.remove("active");
        }
        item.classNameList.add("active");
    }

    const slideSlideOne = (e) => {
        console.log(e.target.style.transform);
        // e.target.style.transform = "translateX(0px)";
        console.log(e.target.style.transform);
    }
    const slideSlideTwo = (e) => {
        console.log(e.target.style.transform);
        // e.target.style.transform = "translateX(-800px)";
        console.log(e.target.style.transform);
    }
    const slideSlideThree = (e) => {
        console.log(e.target.style.transform);
        // e.target.style.transform = "translateX(-1600px)";
        console.log(e.target.style.transform);
    }
    const slideSlideFour = (e) => {
        console.log(e.target.style.transform);
        // e.target.style.transform = "translateX(-2400px)";
        console.log(e.target.style.transform);
    }

    // btn[0].onclick = function () {
    //     slide.style.transform = "translateX(0px)";
    //     setActive(this);
    // }
    // btn[1].onclick = function () {
    //     slide.style.transform = "translateX(-800px)";
    //     setActive(this);
    // }
    // btn[2].onclick = function () {
    //     slide.style.transform = "translateX(-1600px)";
    //     setActive(this);
    // }
    // btn[3].onclick = function () {
    //     slide.style.transform = "translateX(-2400px)";
    //     setActive(this);
    // }

    return (
        // <div className="reviews">
        //     <div className="slide-row" id="slide">
        //         <div className="slide-col"></div>
        //         <Developer team={team} />
        //     </div>
        // </div>
        <div className="hero">
            <h1>Developer Team</h1>
            <div className="container">
                <div className="indicator">
                    <span className="btn" onClick={slideSlideOne}></span>
                    <span className="btn" onClick={slideSlideTwo}></span>
                    <span className="btn" onClick={slideSlideThree}></span>
                    <span className="btn" onClick={slideSlideFour}></span>
                </div>
                <div className="reviews">
                    <div className="slide-row" id="slide">
                        <div className="slide-col">
                            <div className="user-text">
                                <h3>Tom</h3>
                                <p>Backend Developer</p>

                            </div>
                            <div className="user-img">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            </div>
                        </div>
                        <div className="slide-col">
                            <div className="user-text">
                                <h3>Sarah</h3>
                                <p>Frontend Developer</p>

                            </div>
                            <div className="user-img">
                                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600I" alt="" />
                            </div>
                        </div>
                        <div className="slide-col">
                            <div className="user-text">
                                <h3>Sam</h3>
                                <p>UI/UX developer</p>

                            </div>
                            <div className="user-img">
                                <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                        <div className="slide-col">
                            <div className="user-text">
                                <h3>Samantha</h3>
                                <p>Fontend Developer</p>

                            </div>
                            <div className="user-img">
                                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Team;