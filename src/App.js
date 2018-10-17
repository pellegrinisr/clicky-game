import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Image from "./components/Image";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: images,
      score: 0,
      topScore: 0,
      clicked: []
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
    console.log("clicked: ", event.target.id);
    if (array.includes(event.target.id)) {
      window.alert('you lose');
      this.setState({
        images: images,
        score: 0,
        clicked: []
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
        <Header score={this.state.score} topScore={this.state.topScore}/> 
        <Jumbotron/>
        <div className="container">
          <div className="row">
            {this.state.images.map(image => (
              <div className="col-lg-3" key={image.id}>
                <Image
                  onClick={this.clickHandler}
                  id={image.id}
                  name={image.name}
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
        <br/>
        <Footer />
      </div>  
    );
  }
}

export default App;