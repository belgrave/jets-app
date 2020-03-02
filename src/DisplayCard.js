import React from 'react';
import ExpandingCard from './ExpandingCard';

const teamCard = (card) => {
    return (
        <div key={card.idTeam} >
            <img className="TeamHeader" src={card.strTeamBanner} alt="NY Jets Team Banner" />

            <div key={card.idTeam + Math.random()} className='InfoCard'>
                <h2>{card.strTeam} </h2>
                <div><span className="Bold">Established:</span> {card.intFormedYear} </div>
                <div><span className="Bold">Coach:</span> {card.strManager} </div>
                <div><span className="Bold">Current Stadium:</span> {card.strStadium} </div>
                <div><span className="Bold">Stadium Capacity:</span> {card.intStadiumCapacity} </div>
                <div><span className="Bold">Stadium Location:</span> {card.strStadiumLocation} {card.strCountry} </div>
                <div><span className="Bold">Nick Name:</span> {card.strAlternate}</div>
                <br />
            </div>

            <div key={card.idTeam + Math.random()} className='InfoCard'>
                <ExpandingCard title={"Team History"}>
                    {card.strDescriptionEN}
                </ExpandingCard>
            </div>

            <div key={card.idTeam + Math.random()} className='InfoCard'>
                <ExpandingCard title={"Stadium Information"}>
                    {card.strStadiumDescription}
                </ExpandingCard>
            </div>

            <div key={card.idTeam + Math.random()} className='InfoCard Social'>
                <a href={`http://${card.strWebsite}`}>Jets Website</a>
                <a href={`http://${card.strYoutube}`} > Youtube</a>
                <a href={`http://${card.strFacebook}`} > Facebook</a>
                <a href={`http://${card.strTwitter}`} > Twitter</a>
                <a href={`http://${card.strInstagram}`} > Instagram</a>
            </div>

        </div>
    );
}

const DisplayCard = ({ teamCards }) => {
    return (
        <div className="InfoPanel">
            {teamCards && teamCards.map((item) => {
                return (teamCard(item));
            })
            }
        </div>
    );
}

export default DisplayCard;