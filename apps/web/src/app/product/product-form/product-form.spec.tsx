import { render } from '@testing-library/react';

import ProductForm from './product-form';

describe('ProductForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductForm />);
    expect(baseElement).toBeTruthy();
  });
});
