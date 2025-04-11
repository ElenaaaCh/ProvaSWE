import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import XAxis from '../src/components/axes/XAxis';

describe('XAxis component', () => {
  it('renders all labels correctly', () => {
    const labels = ['Jan', 'Feb', 'Mar'];
    render(<XAxis labels={labels} />);

    labels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
