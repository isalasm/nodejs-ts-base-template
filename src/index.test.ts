import { main } from './index';

describe('main', () => {
    it('should return a string', () => {
        const result = main();
        expect(typeof result).toBe('string');
    });

    it('should return the expected string', () => {
        const result = main();
        expect(result).toBe('Hello, world!');
    });
});