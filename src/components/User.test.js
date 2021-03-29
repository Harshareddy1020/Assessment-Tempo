import React from 'react';
import { render } from '@testing-library/react';
import { User } from './User';
import { BrowserRouter } from 'react-router-dom';
describe('user test', () => {
    test('View user', () => {
        const obj={
            "id": "fd282131-d8aa-4819-b0c8-d9e0bfb1b75c",
            "firstName": "Gianni",
            "lastName": "Wehner",
            "displayName": "gianniWehner",
            "avatarUrl": "https://cdn.fakercloud.com/avatars/rude_128.jpg",
            "location": "Brakusstad"
        }
        const navBar=render(
            <User user={obj}/>
        );
        expect(navBar.getByText('User level: User')).toBeInTheDocument();
    });
   });