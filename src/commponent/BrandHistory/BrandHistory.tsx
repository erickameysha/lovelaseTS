import React from 'react';
// import StoryBaba from "../../images/brandStory/women.png"
import StoryBaba from "../../images/brandStory/women.png"
import StoryBaba2 from "../../images/brandStory/women2.png"

import './brandHistory.css'

const BrandHistory = () => {
    return (
        <div>

            <div className={'container'}>
                <div className={'bread-crums'}>
                    <span>HOME</span> / <span>Brand History</span>
                </div>
                <div className={'posts'}>
                    <div className={'post1'}>
                        <div className="history__wrapper flex flex_fs">
                            <div className="history__left">


                                <img className={'history__left-photo'} src={StoryBaba} alt=""/>
                            </div>
                            <div className="history__right">
                                <div className="title history__left__title"><span>On November  2015,
                                    I woke up wanting to
                                    start sewing</span>
                                </div>
                                <div className="text text_mt48 text_w359">I downloaded the pattern of the lif
                                    "triangle", took a sewing machine from a friend and began to sew in the kitchen.
                                    The bodice was cute, but uncomfortable and prickly. I postponed the idea of
                                    creatting a brand for six months, and in May 2016 I went to sewing courses. True,
                                    there I did not learn much, but I realized that I would not be responsible for
                                    sewing. But for the creative part - with pleasure.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history__wrapper history__wrapper_mt40 flex flex_fs">
                        <div className="history__left">
                            <div className="title title_left title_fs40 title_w380">It took exactly a year to find a
                                seamstress. A year of wasted money, materials and time.
                            </div>
                        </div>
                        <div className="history__right">
                            <div className="text">I finally found a girl who could implement my ideas. And I had time to
                                shoot and promote the brand.
                                After a while, I came across an advertisement for a flat for rent in the heart of the
                                old town.
                                It was a former makeshift photo studio, and it looked like the perfect place for
                                creativity: high ceilings, a retro sofa, a white piano. At the same moment, a weakened
                                and blind kitten named Jack showed up next to me.
                                I decided to do two crazy things: I rented a flat that cost half my salary and I took in
                                a sick kitten who needed medical treatment and food (sometimes I had nothing to eat
                                myself). But hardship makes you stronger.


                            </div>

                        </div>
                    </div>
                </div>

                <div className={'history2'}>

                    <div className={'mp2'}>
                        <div className={''}>
                           <span className={'title history2_subtitle'}>
                              <span> The motivation to work and</span>
                              <span>earn was off the charts. So</span>
                              <span>in 2016 I turned my</span>
                              <span>accommodation into a</span>
                            <span>  showroom.</span>
                           </span>
                            <div></div>
                        </div>

                    </div>
                    <div className={'m3'}>
                        <div className="mp3-left">
                            <div>
                                <img className={'history__left-photo'} src={StoryBaba2} alt=""/>
                            </div>
                            <div className={'title history__left-title'}>
                                <span>
                                Everything I earned went towards materials, filming and training. The money quickly ran out.
                           </span>
                            </div>
                        </div>
                        <div className="mp3-right">
                            <div className={'title  history__right__title '}>
                                I resign from the bar and put myself in a limited existence.
                            </div>
                            <div className={'text_mt48 text  rprpr'}>
                                <span>
                                    <div>Coincidence or not, on my first day of "free sailing", my first client came to me and bought a swimming costume. That's how I got my first $100 and my faith in my business. But after that first customer, no one else came to my showroom.</div>
<div>I boarded the Minsk-Moscow bus again with a bag full of panties. In three days I haven't had a single sale. Going back to Minsk with nothing would be very silly, so I took a risky step.
       </div>
 <div>My friend gave me $1,500 for some expensive clothes in braanded boutiques. I bought them all at once, but I still had $400 left. I decided to buy ads for the money and again wrote to all the bloggers in a row. Yana Yarany wrote back.
The ads worked out great! This investment paid off and I gained invaluable experience and understanding that advertising for money is a great investment in your brand.
                                   </div>
<div>had oatmeal on water.
I sold my evening dresses, boots and even my iPhone. Sometimes it was hard mentally. Especially when you or your cats have nothing to eat. I can still remember my signature dish: boiled rice with fried onions and butter, and the cats had oatmeal on water.
 </div>
Unpaid utility bills and blackout warnings added to the anxiety. I couldn't eat or sleep, I was constantly afraid it would always be like this.
                                </span>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>

    );
};

export default BrandHistory;