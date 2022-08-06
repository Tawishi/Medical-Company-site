import './dev.css'


function Developer(props) {

    console.log(props);

    return (
        <div className="user-text">
            <strong>{props.name}</strong>
            <img src={props.image} alt={props.name} className="card--image"/>
            <div className="card--content">
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default Developer;

{/* <div class="user-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aut ea labore dolor,
                                reiciendis eius expedita, molestiae, nam aspernatur natus exercitationem eligendi ipsa
                                vitae
                                officiis minima eum recusandae? Vitae, suscipit.</p>
                            <h3>Tom</h3>
                            <p>2018-2022</p>
                        </div>
                        <div class="user-img">
                            <img src="img/p1.jpg" alt="" width=100%>
                        </div> */}