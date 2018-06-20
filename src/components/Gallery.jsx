import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import './css/gallery.css';
import Lightbox from './Lightbox'
// import {Loader } from 'semantic-ui-react'

const masonryOptions = {
    itemSelector: '.grid-item',
    percentPosition: true
};

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            lightboxIsOpen: false,
            initImg: {},
            layoutReady: false,
            imagesLoaded: false
        };
        
        this.openAndClose = this.openAndClose.bind(this);
        this.handleLayoutReady = this.handleLayoutReady.bind(this);
        this.handleImagesLoaded = this.handleImagesLoaded.bind(this);
    }
    
    openAndClose (image) {
        this.setState({
            lightboxIsOpen: !this.state.lightboxIsOpen,
            initImg: image
        });
    }

    handleLayoutReady () {
        if (!this.state.layoutReady) {
            this.setState({ layoutReady: true });
        }
    }

    handleImagesLoaded() {
        if (!this.state.imagesLoaded) {
            this.setState({ imagesLoaded: true });
        }
    }

    render() {
    const {images} = this.props;
    const childElements = images.map(image => {
           return (
               <div key={image.id} className="grid-item">
                   <li className="grid-item-li"
                       style={{listStyle: 'none', visibility: (this.state.layoutReady)
                               ? 'visible'
                               : 'hidden'}}
                       key={image.id}>
                       <img className='thumbnail'
                           alt= "Скульптура, фаянс"
                           id = {image.id}
                           src={image.thumbnail}
                           onClick={this.openAndClose.bind(this, image)}/>
                   </li>

               </div>
           )
    }
    );

        return (
            <div className="grid">
                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'ul'} // default 'div'
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
                    onImagesLoaded={this.handleImagesLoaded}
                    onLayoutComplete={this.handleLayoutReady}
                    options={masonryOptions}
                >
                    {childElements}

                </Masonry>

            {/*{(!this.state.layoutReady) ? <Loader active size='big' className="loader" inline='centered' >Loading</Loader> : null}*/}
            {(!this.state.lightboxIsOpen) ? null:
                 <Lightbox 
                           closeLightBox={this.openAndClose}
                           initImg={this.state.initImg}
                           images={images}
                 />
            }
            </div>
    );
}
    }

Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired
    })).isRequired
};


