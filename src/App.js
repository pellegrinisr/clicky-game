import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Image from "./components/Image";
import Footer from "./components/Footer";
import images from "./images.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      score: 0,
      topScore: 0,
      clicked: [],
      shake: false,
      visible: false
    };
    this.shuffle = this.shuffle.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  shuffle(array) {
    let newArray = array.slice();
    for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    this.setState({
      images: newArray
    });
  }
  clickHandler(event) {
    let array = this.state.clicked.slice();
    if (array.includes(event.target.id)) {
      this.setState({
        images: images,
        score: 0,
        clicked: [],
        shake: true,
        visible: true
      });
    } else {
      let score = this.state.score;
      score++;
      array.push(event.target.id);
      if (score > this.state.topScore) {
        this.setState({
          clicked: array,
          score: score,
          topScore: score
        });
      } else {
        this.setState({
          clicked: array,
          score: score
        });
      }
      this.shuffle(this.state.images);
    }
  }
  render() {
    return (     
      <div>
        <Header 
          score={this.state.score} 
          topScore={this.state.topScore} 
          loser={
            <CSSTransition
              in={this.state.visible}
              timeout={2000}
              classNames="fade"
              onEnter={() => {
                this.setState({
                  visible: false
                });
              }}
            >
              <span className="loser mr-4">You Lose</span>
            </CSSTransition>
          }
        /> 
        <Jumbotron/>
        <div className="container">
          <TransitionGroup
            className="image-group"
          >
            <div className="row">
              {this.state.images.map(image => (
                <CSSTransition
                  in={this.state.shake}
                  key={image.id}
                  timeout={1000}
                  classNames="shake"
                  onEnter={() => {
                    this.setState({
                      shake: false,
                    });
                  }}
                >
                  <div className="col-md-3" >
                    <Image
                      onClick={this.clickHandler}
                      id={image.id}
                      name={image.name}
                      src={image.src}
                    />
                  </div>
                  </CSSTransition>
              ))}
            </div>
          </ TransitionGroup>
        </div>
        <br/>
        <Footer />
      </div>  
    );
  }
}

export default App;