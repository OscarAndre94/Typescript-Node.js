import { describe, test, expect } from '@jest/globals';
import { getuuid } from '../../src/plugins/get-id.plugin.js';

describe('plugins/get-id.plugin.ts', () => {
    test('getuuid() should return a UUID', () => {
        const uuid = getuuid();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    
    });

});