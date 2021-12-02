import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import {
	crntWeather,
	nearestWeather,
	searchHistory,
} from '../Reducers/Weather';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const rootReducer = combineReducers({
	searchHistory,
	crntWeather,
	nearestWeather,
});

export const renderWithRedux = (
	component: any,
	{
		// @ts-ignore
		initialState,
		store = createStore(rootReducer, initialState, composedEnhancer),
	} = {},
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
	};
};
