import React, { Component } from 'react';
import PropTypes from "prop-types";




export default class Lightbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentImg: {}
        };

        this.goToNext = this.goToNext.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
    }

    componentDidMount () {
        this.setState ({
            currentImg: this.props.initImg
        })
    }

    goToNext() {
        const {images} = this.props;
        let index= images.indexOf(this.state.currentImg);
        let newCurrentImg = images[index + 1];
        this.setState ({
            currentImg: newCurrentImg
        })
    }

    goToPrev() {
        const images = this.props.images;
        let index=images.indexOf(this.state.currentImg);
        let newCurrentImg = images[index - 1];
        this.setState ({
            currentImg: newCurrentImg
        })

    }

    render() {
        const {closeLightBox, images} = this.props;
        let lastIndex = images.length -1;
        let index = images.indexOf(this.state.currentImg);
        return (
            <div className='lightbox'>
                <span className='close' onClick={closeLightBox}>&times;</span>
                <img className='lightbox-content' src={this.state.currentImg.thumbnail} alt= "Скульптура, фаянс"/>
                <div className='caption'>{this.state.currentImg.caption}</div>
                {(index !== lastIndex)?(<span className="next" onClick={this.goToNext}>&#10095;</span>): null}
                {(index !== 0)?(<span className="prev" onClick={this.goToPrev}>&#10094;</span>): null}
            </div>
        )
    }
}

Lightbox.propTypes = {
    closeLightBox: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired
    })).isRequired
};