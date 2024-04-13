
$(document).ready(function(){
                        function showInfoMessage(fieldId, message) {
                            $('#' + fieldId + '-info').text(message);
                        }
                    
                        function validateField(fieldElem, infoMessage, validateFn) {
                            $(fieldElem).on('input', function() {
                                var value = $(this).val();
                                if (validateFn(value)) {
                                    showInfoMessage($(this).attr('id'), '');
                                    $(this).data('valid', true);
                                } else {
                                    showInfoMessage($(this).attr('id'), infoMessage);
                                    $(this).data('valid', false);
                                }
                                checkAllFieldsValid();
                            });
                        }
                    
                        function checkAllFieldsValid() {
                            var allValid = true;
                            $('#myForm input').each(function() {
                                if ($(this).data('valid') === false) {
                                    allValid = false;
                                    return false;
                                }
                            });
                            $('#submitBtn').prop('disabled', !allValid);
                        }
                    
                        
                        validateField('#username', 'Username can contain only letters or letters and numbers, but not only numbers.', validateUsername);
                        validateField('#password', 'Password must contain at least two characters, one special character, and digits.', validatePassword);
                        validateField('#email', 'Please enter a valid email address.', validateEmail);
                    
                        
                        checkAllFieldsValid();
                    
                        $('#myForm input').on('input', function() {
                            checkAllFieldsValid();
                        });
                    });
                    
                    
                    

