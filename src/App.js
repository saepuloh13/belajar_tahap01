import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Example from './components/Example';
import menu_icon from './foto/menu_icon.png';
import google from './foto/Google.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button color="white" className="transparan">Gmail</Button>
          <Button color="white" className="transparan">Gambar</Button>
          <Button color="white" className="transparan padding-horizontal-0" >
            <img src={menu_icon} width="30" />
          </Button>
          <Button color="primary">Masuk</Button>
          {/* <h1 className="App-title">Belajar Tahapan Pertama</h1> */}
        </header>
        <img src={google} />
        <div>
          <input type="text" style={{ height: 44, width: 584, paddingLeft: 16 }} />
        </div>
        <div className="margin-top-20">
          <Button color="white" className="transparan text-gray">Penelusuran Google</Button>
          <Button color="white" className="transparan text-gray">Saya Lagi Beruntung</Button>
        </div>
        <Example />
      </div >
    );
  }
}

export default App;
