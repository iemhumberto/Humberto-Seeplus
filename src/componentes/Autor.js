import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

const build = <img style={{'width':'22px'}} src={'http://res.cloudinary.com/cristiansam/image/upload/v1532830265/coding.svg'} alt="see+" />;
const heart = <img style={{'width':'22px'}} src={'http://res.cloudinary.com/cristiansam/image/upload/v1532830161/heart.svg'}  alt="see+" />;
const geek = <img style={{'width':'80px','alignItems':'center'}} src={'http://res.cloudinary.com/cristiansam/image/upload/v1532830234/geek.svg'} alt="see+" />;

class Autor extends Component {
    render() { 
        return (
            <section>
            <div className="row justify-content-center">
            <p style={{'fontSize':'1.5em', 'textAlign':'center', 'justifyContent':'center'}}>Made {build} with {heart} by Cristian Samboni©</p>
            </div>
            <div className="row justify-content-center">
            {geek}
            </div>
            <div  className="row justify-content-center">
            <SocialIcon url="https://github.com/csamboni" network="github" />
            <SocialIcon url="https://twitter.com/Cris_SamJS" network="twitter" />
            <SocialIcon url="https://medium.com/@CristianSAM" network="medium" />
            </div>
        </section>
        );
    }
}
export default Autor;
