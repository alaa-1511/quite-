
 
 
function get(){
var quote=[
    {'author': ' Albert Einstein', 
    'quote':"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {'author': 'Oscar Wilde', 
    'quote':'Be yourself; everyone else is already taken.'
    },
    {'author': 'Marilyn Monroe', 
    'quote':"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. "
    },

    {'author': 'Frank Zappa', 
    'quote':'So many books, so little time.'
   },
   {'author': 'Epictetus', 
    'quote': 'It\'s not what happens to you, but how you react to it that matters.'
   },
   {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
   },
   {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
   },
   {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
   },
   {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
   },
   {'author': 'Mae West', 
    'quote': 'You only live once, but if you do it right, once is enough.'
   },
];
 
 


 var num =  Math.floor( Math.random() * quote.length+1);
 document.getElementById("demo").innerHTML=`"${quote[num].quote}"`;
document.getElementById("demotwo").innerHTML=`--${quote[num].author}`;


}

