import React from 'react'
import './Coin.css'

const Coin = ( {image, name, symbol, price, volume, marketcap} ) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol.toUpperCase()}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>R${price}</p>
                    <p className='coin-volume'>R${volume.toLocaleString()}</p>
                    <p className='market-cap'>
                        Valor Relativo: R${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin
