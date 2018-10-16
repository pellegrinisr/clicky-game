import React from "react";
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
      images
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
  clickHandler() {
    this.shuffle(this.state.images);
  }
  render() {
    return (
      <div>
        <Header/> 
        <Jumbotron/>
        <div className="container">
          <div className="row">
            {this.state.images.map(image => (
              <div className="col-lg-3">
                <Image
                  onClick={this.clickHandler}
                  id={image.id}
                  name={image.name}
                  src={image.src}
                  key={image.id}
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