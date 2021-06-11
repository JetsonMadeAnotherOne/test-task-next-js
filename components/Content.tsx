import * as React from 'react';

export default function Content() {
    return (
        <>
        <div className='whatWrap'>
            <span>What Pros Are Saying...</span>
            <div className={'developers'}>
                <div className={'dev'}>
                    <img src={'./1.png'} className={'nia-img'} alt={'Nia'}/>
                    <span>Nia</span>
                    <div>“This task can be perfect for students from FIT”</div>
                </div>
                <div className={'dev'}>
                    <img src={'./2.png'} className={'nia-img'} alt={'Abigale'}/>
                    <span>Abigale</span>
                    <div>“I am so sexy, that men are doing  test tasks for me for free.”</div>
                </div>
                <div className={'dev'}>
                    <img src={'./3.png'} className={'nia-img'} alt={'Fedya'}/>
                    <span>Fedya</span>
                    <div>“Kuku Epta. EZ Task.”</div>
                </div>
            </div>
        </div>
            <div className='whatWrap otherCoders'>
                <span>What Other Coders Are Saying...</span>
                <div className={'comments'}>
                    <div className={'comment'}>
                        <img src={'./4.png'} className={'kennedy-img'} alt={'Nia'}/>
                        <div className={'author'}>
                            <span>Wow, this test task is absolutely amazing! Loved it!</span>
                            <div>John Kennedy</div>
                        </div>
                        <div className={'marks'}>
                            <span>05:20</span>
                            <div className={'stars'}>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star'}>&#9733;</div>
                            </div>
                        </div>
                    </div>
                    <div className={'comment'}>
                        <img src={'./5.png'} className={'kennedy-img'} alt={'Abigale'}/>
                        <div className={'author'}>
                            <span>Holy cow, developers rock, but I missed the 5 stars button.</span>
                            <div>Vasiliy Igorsky</div>
                        </div>
                        <div className={'marks'}>
                            <span>14:30</span>
                            <div className={'stars'}>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star'}>&#9733;</div>
                                <div className={'star grey'}>&#9733;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
};