# Azure Mystery Mansion

## Getting set up with development

In general, this project uses [Em's dev-focused Twine workflow](https://dev.to/lazerwalker/a-modern-developer-s-workflow-for-twine-4imp).

### Getting set up with Tweego

If you want to compile and test locally, you'll need the `tweego` app. You can download a precompiled binary from the releases at https://github.com/tmedwards/tweego.git, but I'd recommend compiling from source:

- Make sure you have golang installed (`brew install go` if you're on a Mac)
- Make sure your GOPATH is part of your system PATH: `export PATH="$(go env GOPATH)/bin:$PATH"`
- Run `go get https://github.com/tmedwards/tweego.git`

From here, you should be able to just run `tweego` as a CLI tool.

### Actually working on the game

Once you have a functioning Tweego binary, you're good to go!

- The game itself lives in `mysterymansion.twee`. I personally use VS Code (you can download a Twee syntax highlighter).
- To live-compile the game, run `tweego -w mysterymansion.twee -o index.html`. Run a web server of your choice (e.g. `python -m SimpleHTTPServer` from within the project dir), and index.html will update whenever you save the Twee file. It's possible images will be broken; I get that's annoying, but it won't be broken on production.
- If you would rather edit in the visual Twine editor, you can import that `index.html` file into a downloaded copy of Twine 2. You should convert it back into a Twee file before committing changes to git; `tweego -d index.html -o mysterymansion.twee` will do that.
- Pull request in your changes!
- When your code hits master on GitHub, a GitHub Action is responsible for compiling the Twee file into a website, doing some file munging to make our microsoft.com redirect work properly, and then deploy the latest version of the code to Azure.
- Up for discussion: the code might be cleaner if we let ourselves split it out into separate files via Twee imports. This would break the ability to edit the game in the Twine editor. I think this may be a positive tradeoff, but I'm not going to make that executive decision right now.
