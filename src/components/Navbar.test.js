import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './Navbar';
import { BrowserRouter } from 'react-router-dom';
describe('nav bar', () => {
    test('Nav Bar', () => {
        const navBar=render(
            <BrowserRouter>
            <Navbar/>
          </BrowserRouter>
        );
        expect(navBar.getByText('Dashboard')).toBeInTheDocument();
    });
   });