socket.io-client-htmlfile-ie6-problem
=====================================
This program shows a simple page that has "hello" button.
I expect each time I click "hello" button, "receive:hello" is displayed on a server console.
First click is OK. But from the second time, that message isn't displayed.
This problem can only be seen on IE6 with transport "htmlfile".

I found this on a following environment.

* OS: Windows XP SP3
* browser: IE6
* node: 0.8.6
* socket.io: 0.9.10
* transport: htmlfile
    
If you'd like to try this, please use socket.io 0.9.10, because older version has a problem 

https://github.com/LearnBoost/socket.io-client/issues/413

