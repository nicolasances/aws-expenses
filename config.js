
class Config {
    
    async load() {
        
        return;
    }
    
    getProps() {
        return {
            noCorrelationId: true, 
            noAuth: true, 
        }
    }
    
    getAuthorizedClientID() {
        return {
            
        }
    }
} 


exports.config = new Config();