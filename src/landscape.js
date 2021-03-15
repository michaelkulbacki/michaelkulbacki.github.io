'use strict';

//const e = React.createElement;

class Landscape extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
  }

  componentDidMount(){
    //alert(process.env.REACT_APP_API_KEY);
    fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=f960df8c5bb9ad360d3d37f4bbf36c6f&photoset_id=72157677571789503&user_id=110278078%40N06&extras=url_z%2C+url_k&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      alert(JSON.stringify(j));
      let picArray = j.photoset.photo.map((pic) => {

        return(
          <img alt="" src={pic.url_z} data-image={pic.url_k}></img>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {
    return (
      <div id="gallery" style="display:none;">
          {this.state.pictures}
      </div>
    );
  }
}

//const domContainer = document.querySelector('#landscape_container');
//ReactDOM.render(e(Landscape), domContainer);


let domContainer = document.querySelector('#landscape_container');
ReactDOM.render(<Landscape />, domContainer);
