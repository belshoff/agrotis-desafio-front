import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import find from '../../assets/images/find.svg'

import { Header, Container, Button, Footer } from './styles';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      docs: []
    }
    this.styles = {
      inputGroup: {
        width: '25vw',
        marginTop: '1rem'
      },
      addon: {
        borderRadius: '0px',
        backgroundColor: 'white',
        border: 'none',
      }
    }
  }

  insert = () => {
    this.props.dispatch({ type: 'INSERT', item: { nome: 'item' } })
  }

  remove = () => {
    this.props.dispatch({ type: 'REMOVE' })
  }

  render() {
    const { docs } = this.props
    return (
      <section>
        <header style={Header}>
          <h1>Nome</h1>
          <div style={ this.styles.inputGroup } class="input-group mb-3">
            <div class="input-group-prepend">
              <span style={ this.styles.addon } class="input-group-text" id="basic-addon1">
              <img src={find} alt="" style={{width: '1rem'}} />
              </span>
            </div>
            <input style={ this.styles.addon } type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          {/* <input className="form-control" style={{width: '15vw'}} type="text"/> */}
        </header>
        <Container>
          <div>
            <h1>Docs</h1>
            { docs.length }
            {
              docs.map(
                el => (
                  <div>{ el.nome }</div>
                )
              )
            }
            <button className="btn btn-primary" onClick={this.insert} >add</button>
          </div>
          <Footer>
            <Button className="rounded-circle">+</Button>
          </Footer>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  docs: state.docs
})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);
