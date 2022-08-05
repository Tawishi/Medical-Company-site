import './style.css'
import Card from './Card'

function CustomerStats() {
    return (
        <section>
            <div className="parallax1">
                <div className='caption'>
                    <span class="border">Solutions for your pharmacy, hospital, medical practice or biopharma company</span>
                </div>
            </div>
            <div className="about">
                <h1>MEDICO</h1>
                <p>As a diversified healthcare leader, our solutions help patients access life-changing therapies, create a real difference for patients with cancer, and equip pharmacies, health systems and clinics with technologies to operate more effectively. We do all of this and much more as we pursue our mission to improve health outcomes for all.</p>
            </div>

            <div className="parallax2">
                <div className='info'>
                    <Card
                        img=""
                        name="Pharmaceutical Distribution"
                        desc="It’s not just a package. It’s a patient. Rely on our accurate, safe and speedy drug distribution services to build a better patient experience."
                    />
                    <Card
                        img=""
                        name="Medical Supplies & Equipment"
                        desc="Find the quality wholesale supplies and equipment you need for your high-performing lab, physician practice or post-acute care setting. Satisfaction guaranteed."
                    />
                    <Card
                        img=""
                        name="Pharmacy Services & Technology"
                        desc="Balance customer care, operational efficiency and business growth with the help of our pharmacy management tools and consultancy services."
                    />
                    <Card
                        img=""
                        name="Specialty Practice Solutions"
                        desc="Value-based care programs. Specialty group purchasing. A top-of-the-line EHR. Learn how we can support your oncology or other specialty practice."
                    />
                    <Card
                        img=""
                        name="Solutions for Biopharma"
                        desc="From commercialization services to medication access and adherence, we’ll get your groundbreaking treatment to the patients who need it most."
                    />
                </div>
            </div>
            <p></p>
            <div className="parallax3"></div>
        </section>
    );
}

export default CustomerStats;