import React from 'react';
import { render,screen,fireEvent ,act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {Search} from './App';

describe ('App',()=>{
  test('renders App component',()=>{
    render(<App/>);
    //expect(screen.getByText('jerecho:')).toBeInTheDocument(); <<- this one fails since ther isnt any thing with jerecho
    expect(screen.getByText('Search:')).toBeInTheDocument();
    expect(screen.getByLabelText('Search:')).toBeInTheDocument();
    
    // expect(screen.getByText(/Searches for JavaScript/)).toBeNull();<<- this one fails hence we can use query by
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    // screen.debug();
    // screen.getByRole("");
  });

  test('use of for asynchronous rendering', async () => {
      render(<App />)
      
      
      
      expect( await screen.findByText('Signed in as Robin')).toBeInTheDocument();
   
      screen.debug();
  });

  test('checking out fireEvent', async() => {
    render(<App />);
    await screen.findByText(/Signed in as/)
    
    // screen.debug();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
    // screen.debug();
  });


  test('checking out userEvent- built on top of fireEvent', async() => {
    render(<App />);

  // wait for the user to resolve
  await screen.findByText(/Signed in as/)

  expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

  await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

  expect(
    screen.getByText(/Searches for JavaScript/)
  ).toBeInTheDocument();
  });
});
describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();
 
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
 
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();
 
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
 
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
 
    expect(onChange).toHaveBeenCalledTimes(10);
  });
});