import React from 'react';
import { render } from '@testing-library/react';
import { Team } from './Team';
import { BrowserRouter } from 'react-router-dom';
describe('team test', () => {
    test('View Team', () => {
        const obj={
            name:'Harsha'
        }
        const navBar=render(
            <BrowserRouter>
            <Team team={obj}/>
          </BrowserRouter>
        );
        expect(navBar.getByText('Harsha')).toBeInTheDocument();
    });
   });