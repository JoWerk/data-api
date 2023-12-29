# Summary
For this assignment the task was to set up a mock server to mimick the GitHub APIs to which I could then create 
tests around the user object.  I didn't have time to setup the mock server but this repo does contain a few 
tests to demonstrate how I would go about setting up the framework and how to write the tests.  The tricky part
here is that without the mock server I would be using my personal GitHub account and I didn't want to mess with 
that data to much.  Below you will find instructions on running the tests.  In a follow up email you will see
more detail on how and what I would test.

## Implementation
Here I have an implementation of a JavaScript repo making use of Jest.  This is a pretty straightforward 
implementation of Jest so really all there is to do is to install and run.

## Tokens
In order to run these tests you will need a couple of different tokens.  To create a token you will need 
to login to GitHub and click on your icon.  Then go down to settings.  On the next page on the left you will 
see another list which should have developer settings at the bottom, click on that.  From here you can create a 
token, I generally stick with the classic as it is easier to assign more permissions, by clicking personal access 
tokens and Tokens (classic).  In our case you will need to create 3 tokens each by pressing the generate new token button.
The first token you will create with no permission.  The second you will click under the user section the `read:user` checkbox
And finally you will create the last token with the `repo` checkbox selected.

You can now take these tokens and plug them into the tests appropriately

## Run
- You will need to install nmp on your machine.  You can do this with something like Brew or Scoop
- Use git to pull down the repo (though if you are reading this you probably already have)
- In the terminal run `npm i`
- To run the tests simply run `npm test` in the terminal

