import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Wine = () => {
 let { lotCode } = useParams();
  console.log('lot code:', lotCode);
  return <div>{lotCode}</div>;
};

const mapStateToProps = (state, props) => {
  return {
    wineryData: state.wineryData,
  };
};

export default connect(mapStateToProps)(Wine);
