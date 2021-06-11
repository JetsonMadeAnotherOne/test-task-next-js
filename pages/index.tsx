import { useState, useEffect, default as React } from 'react';
import { MainLayout } from '../components/MainLayout';
import Content from '../components/Content';
import Footer from '../components/Footer';

interface rateProps {
    bitcoinRate: any,
    ethRate: any
}

export default function Index({ bitcoinRate: serverBitcoinRate, ethRate: serverEthRate }: rateProps) {
    const [bitcoinRate, setBitcoinRate] = useState(serverBitcoinRate);
    const [ethRate, setEthRate] = useState(serverEthRate);

    useEffect(() => {
        async function load() {
            const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
            const response2 = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
            const data = await response.json();
            const data2 = await response2.json();
            setBitcoinRate(data);
            setEthRate(data2);
        }

        if (!serverBitcoinRate && !serverEthRate) {
            load();
        }
    }, []);


    return (
        <MainLayout>
            <div className={'outerWrap'}>
                <div className={'parrentWrap'}>
                    <div className={'top-content-1'}>Do The Task And Have Fun</div>
                </div>
                <div className={'content-block'}>
                    <div className={'andyWrap'}>
                        <div className={'andy'}>
                            <div className={'andy-inner-wrap'}>
                                <img src={'./andy.png'} className={'andy-img'} alt={'andy'}/>
                                <div className={'andy-desc'}>
                                    <div>Andy</div>
                                    <span>Head Of UX Design</span>
                                </div>
                            </div>
                        </div>
                        <div className={'anotherAndyInfoWrap'}>
                            <div className={'anotherAndyInfo'}>
                                “The Style Of This Test Task
                                Matches The Style That You Will
                                Be Making Real Job In.”
                            </div>
                        </div>
                    </div>
                    <div className={'fontsColorsWrap'}>
                        <div className={'top-content-2'}>Be Persistent & Attentive To Details</div>
                        <div className={'fontsColors'}>
                            <div className={'fontsLeft'}>
                                <div className={'fontsText'}>
                                    Fonts & Colors <span>Matter</span>
                                </div>
                                <div className={'rate'} style={{ marginTop: 42 }}>
                                    <b>Responsive Design</b>
                                    <div className={'price'} style={{ color: '#FE805C' }}>
                                        <span>{bitcoinRate.bpi.USD.rate.slice(0, 8)}$</span>
                                        <div>+8.5% &#x2191;</div>
                                    </div>
                                    <span>You’ll Learn A Lot From This Task</span>
                                </div>
                            </div>
                            <div className={'fontsRight'}>
                                <div className={'rate'} style={{ color: '#4643D3' }}>
                                    <b>Mobile Friendly</b>
                                    <div className={'price'}>
                                        <span>{JSON.stringify(ethRate.USD).slice(0, 6)}$</span>
                                        <div>-3.2% &#x2193;</div>
                                    </div>
                                    <span>Don’t Forget About Small Devices</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Content/>
            <Footer/>
        </MainLayout>
    );
}


Index.getInitialProps = async ({ req }: any) => {
    if (!req) {
        return { bitcoinRate: null, ethRate: null };
    }

    const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
    const response2 = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,CNY,JPY,GBP`);

    const bitcoinRate: any = await response.json();
    const ethRate: any = await response2.json();

    return {
        bitcoinRate,
        ethRate,
    };
};
