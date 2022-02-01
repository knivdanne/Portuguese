/**THIS IS A NETFLIX STYLE CAROUSEL */

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MultipleItems from "./carouselMultipleItems"
import content from '../content';


export default class Browse extends Component {
    constructor(props) {

        super(props);

    }
    fetchList(listToFetch) {
        //CALL API TO FETCH A LIST

    }

    render() {
        return (

            <Container>
                <div className="mt-5 shadow-sm">
                    <MultipleItems title="Popular" API="" />
                </div>
                <div className="mt-5 shadow-sm">
                    <MultipleItems title="Trending" API="" />
                </div>
                <div className="mt-5 shadow-sm">
                    <MultipleItems title="Asian" API="" />
                </div>
                <div className="mt-5 shadow-sm">
                    <MultipleItems title="European" API="" />
                </div>
            </Container>
        );
    }
}

