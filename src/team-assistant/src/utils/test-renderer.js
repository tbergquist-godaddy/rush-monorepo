// @flow

import * as React from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export default function testRenderer(ui: React.Element<any>): RenderResult<> {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}
