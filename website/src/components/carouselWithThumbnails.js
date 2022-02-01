// CAROUSEL WITH THUMBNAILS UNDERNEITH
import React, { useState, useEffect } from 'react';
import '../App.css';
import './carouselStyleSheet.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CarouselWithThumbnails() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });


    const settingsMain = {
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplaySpeed: 8000,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };
    const recipeName = "Köttbullar"
    /** ATM Slide data is a map with 3 key components, id(img) */
    const slidesData = [
        {
            id: 1,
        }, {
            id: 2,
        }, {
            id: 3,
        }, {
            id: 4,
        }, {
            id: 5,
        }, {
            id: 6,
        },
    ];
    /** ATM Slide data is a map with 3 key components, id(img) */
    const DepricatedSlidesData = [
        {
            id: 1,
            title: 'repellendus id ullam',
            label: 'Dolorem officiis temporibus.'
        }, {
            id: 2,
            title: 'excepturi consequatur est',
            label: 'Officia non provident dolor esse et neque.'
        }, {
            id: 3,
            title: 'eius doloribus blanditiis',
            label: 'Ut recusandae vel vitae molestiae id soluta.'
        }, {
            id: 4,
            title: 'nihil voluptates delectus',
            label: 'Qui vel consequatur recusandae illo repellendus.'
        }, {
            id: 5,
            title: 'nemo dolorem necessitatibus',
            label: 'Placeat odit velit itaque voluptatem.'
        }, {
            id: 6,
            title: 'dolorem quibusdam quasi',
            label: 'Adipisci officiis repudiandae.'
        },
    ];

    return (

        <div className="slider-wrapper">

            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
            >

                {slidesData.map((slide) =>

                    <div className="slick-slide" key={slide.id}>
                        <h2 className="slick-slide-title">{recipeName}</h2>
                        {/*<h2 className="slick-slide-title">{slide.title}</h2>*/}
                        <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                        {/*<label className="slick-slide-label">{slide.label}</label>*/}
                    </div>

                )}

            </Slider>
            <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>

                    {slidesData.map((slide) =>

                        <div className="slick-slide" key={slide.id}>
                            <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                        </div>

                    )}

                </Slider>
            </div>
        </div>

    );
}

export default CarouselWithThumbnails;