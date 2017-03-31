var express = require('express')
let transformer = require('./helper/blogentrytransformer.js')
let filereader = require('./helper/filereader.js')

const port = 3000

var app = express()


let blog_holder = []

/*
	* Takes content of a file, passes to the custom
	* data transformer which returns an object for storage.
	*	@elem Contents of a file
	* @returns void
*/
function add(elem) {
	blog_holder.push(transformer.process_entry(elem))
}

filereader.inject_patterns([
	// Vim swap files
	/\.[^\.]*\.sw/,

	// The blog template
	/\.template/
])

filereader.readFiles("posts/",
					// Success callback
					(filename, content) => {
						add(content)
					},
					// Fail
					(error) => { console.log(error) }
				)

app.get('/', (req, res) => {
  res.send("Hello world")
});

app.get('/blog', (req, res) => {
  res.send(blog_holder)
});


app.listen(port, () => {
  console.log("Listening on " + port);
})
