import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {test, expect, describe, vi} from 'vitest';
import axios from 'axios';
import Test from './test';

describe('simple App.tsx tests', () => { 
    test('Buttoncount increment 1', async () => {

        render(<Test data={[{id:1, name: 'hello'}]}/>);

        expect(screen.getByTestId('li-key')).toHaveTextContent('hello');
 });
});