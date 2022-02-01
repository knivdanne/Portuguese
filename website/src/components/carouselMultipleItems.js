/**THIS IS A NETFLIX STYLE CAROUSEL */

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from "./config";

export default class MultipleItems extends Component {

    /**
     * Props: 
     * title - the name displayed above carousel 
     * */


    render() {
        const SlidesData = [
            {
                id: 1,
                title: 'Köttbullar',
                desc: 'Dolorem officiis temporibus.',
                link: 'https://www.google.com'
            }, {
                id: 2,
                title: 'spaghetti',
                desc: 'Officia non provident dolor esse et neque.',
                link: 'https://www.google.com'
            }, {
                id: 3,
                title: 'potatismos',
                desc: 'Ut recusandae vel vitae molestiae id soluta.',
                link: 'https://www.google.com'
            }, {
                id: 4,
                title: 'pizza',
                desc: 'Qui vel consequatur recusandae illo repellendus.'
            }, {
                id: 5,
                title: 'hamburgare',
                desc: 'Placeat odit velit itaque voluptatem.'
            }, {
                id: 6,
                title: 'delorian',
                desc: 'Adipisci officiis repudiandae.'
            },
            {
                id: 7,
                title: 'Köttbullar',
                desc: 'Dolorem officiis temporibus.'
            }, {
                id: 8,
                title: 'spaghetti',
                desc: 'Officia non provident dolor esse et neque.'
            }, {
                id: 9,
                title: 'potatismos',
                desc: 'Ut recusandae vel vitae molestiae id soluta.'
            }, {
                id: 10,
                title: 'pizza',
                desc: 'Qui vel consequatur recusandae illo repellendus.'
            }, {
                id: 11,
                title: 'hamburgare',
                desc: 'Placeat odit velit itaque voluptatem.'
            }, {
                id: 12,
                title: 'delorian',
                desc: 'Adipisci officiis repudiandae.'
            },
        ];

        const settings = {
            arrows: true,
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4
        };
        return (
            <div className="rounded border-top">
                <h2>  {this.props.title} </h2>
                <Slider
                    {...settings}>
                    {SlidesData.map((slide) =>

                        <div className="slick-slide" key={slide.id}>
                            <a href={slide.link}>
                                <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                            </a>
                        </div>


                    )
                    }
                </Slider>
            </div >
        );
    }
}