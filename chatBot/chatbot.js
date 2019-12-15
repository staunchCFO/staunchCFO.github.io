let toggleButton = document.getElementById("toggle")
toggleButton.addEventListener("click" , event => {
    var body = document.getElementById("body");
    if (toggleButton.textContent === "Toggle Night Mode"){
        toggleButton.textContent = "Toggle Light Mode"
    }else {
        toggleButton.textContent = "Toggle Night Mode"
    }
    var currentClass = body.className;
    body.className = currentClass == "bg-light" ? "bg-dark" : 'bg-light'
})

// Preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(2000).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top home
  $(window).scroll(function() {
    if ($(this).scrollTop() ) {
      $('.back-to-home').fadeIn('slow');
    } else {
      $('.back-to-home').fadeOut('slow');
    }
  });
  $('.back-to-home').click(function(){
    $('html, body').animate({scrollTop : 0},1000, 'easeInOutExpo');
    return false;
  });


//.......javaScript BOT app.......
let botui = new BotUI("chat-bot-ui")
botui.message.add({
    delay: 5000,
    loading: true,
    content: "Hey, I'm StaunchBot."
}).then(function() {
    botui.message.add({  // pops up message after 1sec
        delay: 1000,
        loading: true,
        content: `Can i know your name?`
    }).then(function() {
    return botui.action.text({
        action: {
            placeholder: 'Your name'
            }
        })
    }).then(function(res) {
        return botui.message.add({
            content: 'Hello ' + res.value + ',' + ' How are you?'
        });
    }).then(function() {
        return botui.action.button({
            delay: 3000,
            loading: true,
            action: [{
                text: "I'm good thank you",
                value: "Yes"
            }, {
                text: "I feel pretty tired",
                value: "No"
            }]
        })
    }).then(function(res) {
        var message
        if (res.value === "Yes"){
            message = "Oh, good to know."
        }else if (res.value === "No"){
            message = "You should consider resting, we can chat later."
        }
        return botui.message.add({
            type: 'html',
            delay: 3000,
            loading: true,
            content: message
        });
    }).then(function() {
        return botui.message.add({
            delay: 3000,
            loading: true,
            content: `since you\'re having a great day, what would you like to know?`
        })
    }).then(function() { //Suggested questions from our home set 1
        return botui.action.button({
            delay: 3000,
            loading: true,
            action: [{
                text: 'Who is Staunch?',
                value: 'staunch'
            }, {
                text: 'What services does he offer?',
                value: 'service'
            }, {
                text: 'how can i contact you?',
                value: 'contact'
            }, {
                text: 'What are your hobbies?',
                value: 'hobbies'
            }]
        });
    }).then(function(res) {  // answers to questions
        var message;
        if (res.value === "staunch") {
            message =
            "Staunch is a computer science enthusiast, with great passion for technology.<br>" +
            "He is a young entrepreneur with great interest in customer satisfaction."
        }else if (res.value === "service") {
            message = 
            'As a software developer, he offers the following services: <br>' +
            'Web Development Software Development'
        }else if (res.value === "contact") {
            message =
            'You can contact him via his email: emekaokezie36@yahoo.com, twitter: staunchCFO or on whatsapp and calls' +
            'on 09066829042'
        }else if (res.value === "hobbies"){
            message = 
            'Coding, as a matter of fact this created this to talk to you... winks';
        }
        return botui.message.add({
            type: 'html',
            delay: 3000,
            loading: true,
            content: message
            });
        }).then(function() { //Suggested questions from our home set 2
            return botui.action.button({
                delay: 3000,
                loading: true,
                action: [{
                    text: 'Who is Staunch?',
                    value: 'staunch'
                }, {
                    text: 'What services does he offer?',
                    value: 'service'
                }, {
                    text: 'how can i contact you?',
                    value: 'contact'
                }, {
                    text: 'What are your hobbies?',
                    value: 'hobbies'
                }]
            });
        }).then(function(res) {  // answers to questions
            var message;
            if (res.value === "staunch") {
                message =
                "Staunch is a computer science enthusiast, with great passion for technology.<br>" +
                "He is a young entrepreneur with great interest in customer satisfaction."
            }else if (res.value === "service") {
                message = 
                'As a software developer, he offers the following services: <br>' +
                'Web Development Software Development'
            }else if (res.value === "contact") {
                message =
                'You can contact him via his email: emekaokezie36@yahoo.com, twitter: staunchCFO or on whatsapp and calls' +
                'on 09066829042'
            }else if (res.value === "hobbies"){
                message = 
                'Coding, as a matter of fact this created this to talk to you... winks';
            }
            return botui.message.add({
                type: 'html',
                delay: 3000,
                loading: true,
                content: message
                });
            }).then(function() { //Suggested questions from our home set 3
                return botui.action.button({
                    delay: 3000,
                    loading: true,
                    action: [{
                        text: 'Who is Staunch?',
                        value: 'staunch'
                    }, {
                        text: 'What services does he offer?',
                        value: 'service'
                    }, {
                        text: 'how can i contact you?',
                        value: 'contact'
                    }, {
                        text: 'What are your hobbies?',
                        value: 'hobbies'
                    }]
                });
            }).then(function(res) {  // answers to questions
                var message;
                if (res.value === "staunch") {
                    message =
                    "Staunch is a computer science enthusiast, with great passion for technology.<br>" +
                    "He is a young entrepreneur with great interest in customer satisfaction."
                }else if (res.value === "service") {
                    message = 
                    'As a software developer, he offers the following services: <br>' +
                    'Web Development Software Development'
                }else if (res.value === "contact") {
                    message =
                    'You can contact him via his email: emekaokezie36@yahoo.com, twitter: staunchCFO or on whatsapp and calls' +
                    'on 09066829042'
                }else if (res.value === "hobbies"){
                    message = 
                    'Coding, as a matter of fact this created this to talk to you... winks';
                }
                return botui.message.add({
                    type: 'html',
                    delay: 3000,
                    loading: true,
                    content: message
                    });
                }).then(function() { //Suggested questions from our home set 4
                    return botui.action.button({
                        delay: 3000,
                        loading: true,
                        action: [{
                            text: 'Who is Staunch?',
                            value: 'staunch'
                        }, {
                            text: 'What services does he offer?',
                            value: 'service'
                        }, {
                            text: 'how can i contact you?',
                            value: 'contact'
                        }, {
                            text: 'What are your hobbies?',
                            value: 'hobbies'
                        }]
                    });
                }).then(function(res) {  // answers to questions
                    var message;
                    if (res.value === "staunch") {
                        message =
                        "Staunch is a computer science enthusiast, with great passion for technology.<br>" +
                        "He is a young entrepreneur with great interest in customer satisfaction."
                    }else if (res.value === "service") {
                        message = 
                        'As a software developer, he offers the following services: <br>' +
                        'Web Development Software Development'
                    }else if (res.value === "contact") {
                        message =
                        'You can contact him via his email: emekaokezie36@yahoo.com, twitter: staunchCFO or on whatsapp and calls' +
                        'on 09066829042'
                    }else if (res.value === "hobbies"){
                        message = 
                        'Coding, as a matter of fact this created this to talk to you... winks';
                    }
                    return botui.message.add({
                        type: 'html',
                        delay: 3000,
                        loading: true,
                        content: message
                        });
    }).then(function() {
        botui.message.add({
            delay: 3000,
            loading: true,
            content: 'Do you have more questions?'
        })
    }).then(function() {
        return botui.action.button({
            delay: 3000,
            loading: true,
            action: [{
                text: 'No! i dont have anymore questions',
                value: 'noquestion'
            }, {
                text: 'Yes! i have more questions',
                value: 'question'
            }]
        });
    }).then(function(res) {
        var message;
        if (res.value === "noquestion") {
            message = 
            'Nice! Thanks for your time.';
        }else if (res.value === "question") {
            message = 
            'For more questions, pls visit Staunch\'s Twitter handle' + 
            '<a href="https://twitter.com/staunchCFO" and send him a DM.>page</a>';
        }
        return botui.message.add({
            type: 'html',
            delay: 3000,
            loading: true,
            content: message
        })
    }).then(function() {
        return botui.message.add({
            delay: 3000,
            loading: true,
            content: 'Is there anything youd suggest i improve on?'
        })
    }).then(function() {
        return botui.action.text({
            action: {
                placeholder: 'Type here...'
            }
        });
    }).then(function(index) {
        return botui.message.add({
            delay: 3000,
            loading: true,
            content: 'Thanks for your responses. Anything else?'
        });
    }).then(function() {
        return botui.action.button({
            delay: 3000,
            loading: true,
            action: [{
                text: "No",
                value: "No"
            }, {
                text: "Yes",
                value: "Yes"
            }]
        })
    }).then(function(res) {
        var message
        if (res.value === "No") {
            message = "Alright. Good Bye!"
        }else if (res.value === "Yes") {
            message =
            "You like chitchats, don\'t you?<br>" + 
            "Well, we\'d talk better next time. Good Bye!"
        }
        return botui.message.add({
            type: 'html',
            delay: 3000,
            loading: true,
            content: message
        })
    });
})