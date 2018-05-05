import { HelloWorldService } from '../src/services/hello-world.service';

const service = new HelloWorldService();

describe('HELLO WORLD SERVICE', ()=>{
    
    it('should return a value', ()=>{
        const result = service.getData();
        expect(result.message).toMatch(/.+/);
    });

    it('should return a message', ()=>{
        const result = service.getData();
        expect(result.message).toEqual('Hello World Component');
    });
    
});