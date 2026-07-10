import { describe, test, expect } from '@jest/globals';
import { characters } from '../../src/js-foundation/02-destructuring.js';

describe('js-foundation/02-destructuring.ts', () => {
    test('characters should contain flash, superman', () => {
        
        expect(characters).toContain('flash');
        expect(characters).toContain('superman');
    });

    test('first character should be flash, and second superman', () => {
        
        const [flash, superman] = characters;

        expect(flash).toBe('flash');
        expect(superman).toBe('superman');
    })
});