
function validateUsername(username) {
                        
                        return /^[A-Za-z]+[A-Za-z0-9]*$/.test(username);
                    }
                    
                    function validatePassword(password) {
                        
                        return /^(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
                    }
                    
                    function validateEmail(email) {
                        
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                    }
                    