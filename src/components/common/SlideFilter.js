import React from 'react';
import styled from 'styled-components';

import { MDBSelect } from 'mdbreact';
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

const SlideFilter = () => {

  state = {
    options: [
      {
        text: "Option 1",
        value: "1"
      },
      {
        text: "Option 2",
        value: "2"
      },
      {
        text: "Option 3",
        value: "3"
      }
    ]};

  return (
    <div>
      <div>
        <MDBSelect
          options={this.state.options}
          selected="Choose your option"
          label="Example label"
        />
      </div>
    </div>
  )
}

export default SlideFilter;