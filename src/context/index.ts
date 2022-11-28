import React, { createContext, useContext } from 'react';
import { googleApi } from '../constants';

const Context = createContext(googleApi);

export default Context;