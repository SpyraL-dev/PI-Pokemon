import { render, screen } from '@testing-library/react';
import Main from '../components/Cards/card'

describe('test Form', () => {
    it('debería mostrar un elemento',()=>{
        render(<Main/>)
        expect(screen.queryByText(/Tipo/i).toBeInTheDocument)
    
    })
})
