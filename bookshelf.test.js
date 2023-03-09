import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Bookshelf from '../components/Bookshelf';

jest.mock('axios');

describe('Bookshelf component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders CreateBook component when authenticated', () => {
    const mockAuth0 = {
      isAuthenticated: true,
      getIdTokenClaims: jest.fn(),
    };
    render(<Bookshelf auth0={mockAuth0} />);
    const createBookElement = screen.getByTestId('create-book');
    expect(createBookElement).toBeInTheDocument();
  });

  test('does not render CreateBook component when not authenticated', () => {
    const mockAuth0 = {
      isAuthenticated: false,
      getIdTokenClaims: jest.fn(),
    };
    render(<Bookshelf auth0={mockAuth0} />);
    const createBookElement = screen.queryByTestId('create-book');
    expect(createBookElement).not.toBeInTheDocument();
  });

  test('calls getBooks method when authenticated', async () => {
    const mockAuth0 = {
      isAuthenticated: true,
      getIdTokenClaims: jest.fn(),
    };
    const getBooksMock = jest.spyOn(Bookshelf.prototype, 'getBooks');
    render(<Bookshelf auth0={mockAuth0} />);
    expect(getBooksMock).toHaveBeenCalled();
    getBooksMock.mockRestore();
  });

  test('does not call getBooks method when not authenticated', async () => {
    const mockAuth0 = {
      isAuthenticated: false,
      getIdTokenClaims: jest.fn(),
    };
    const getBooksMock = jest.spyOn(Bookshelf.prototype, 'getBooks');
    render(<Bookshelf auth0={mockAuth0} />);
    expect(getBooksMock).not.toHaveBeenCalled();
    getBooksMock.mockRestore();
  });

  test('calls deleteBook method when delete button is clicked', async () => {
    const mockAuth0 = {
      isAuthenticated: true,
      getIdTokenClaims: jest.fn(),
    };
    const deleteBookMock = jest.spyOn(Bookshelf.prototype, 'deleteBook');
    // eslint-disable-next-line no-unused-vars
    const book = { id: 1, title: 'Test Book', cover: 'test-cover' };
    render(<Bookshelf auth0={mockAuth0} />);
    const deleteButton = screen.getByTestId('delete-button-1');
    userEvent.click(deleteButton);
    await waitFor(() => {
      expect(deleteBookMock).toHaveBeenCalledWith(1);
    });
    deleteBookMock.mockRestore();
  });
});
