import IllustrationHero from '../assets/images/illustration-hero.svg';
import MusicIcon from '../assets/images/icon-music.svg';

function Lobby(){
    return(
        <div className='allpage'>
            <div className='container'>
                <div className='image-container'>
                    <img alt='IllustrationHero' src={IllustrationHero}/>
                </div>        
                <div className='order-summary-title-container'>
                    <p className='order-summary-title'>Order Summary</p>
                </div>
                <div className='order-summary-description-container'>
                    <p className='order-summary-description'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                </div>
                <div className='plan-container'>
                    <div className='columns-plan-container'>
                        <div className='plan-music-image-container'>
                            <img alt='MusicIcon' src={MusicIcon}/>
                        </div>
                        <div className='annual-plan-container'>
                            <p className='annual-title'>Annual Plan</p>
                            <p className='annual-price'>$59.99/year</p>
                        </div>
                        <div className='change-plan-container'>
                            <a href=' '>Change</a>
                        </div>
                    </div>
                </div>
                <div className='payment-button-container'>
                    <input type='button' value='Proceed to Payment'/>
                </div>
                <div className='cancel-order-container'>
                    <a href=' '>Cancel Order</a>
                </div>
            </div>
            <div className='footer-page'>
                <p>Created by <a href="https://github.com/Farith-Palestina">Farith Palestina</a>.</p>
            </div>
        </div>
    );
}

export default Lobby;